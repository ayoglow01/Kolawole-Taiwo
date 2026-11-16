import { chromium } from "playwright-core";

const BASE = "http://localhost:4173";
const OUT = "/home/user/qa-shots";
const results = [];
const fail = (msg) => results.push({ ok: false, msg });
const pass = (msg) => results.push({ ok: true, msg });

const browser = await chromium.launch();

async function scrollThrough(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = () => {
        y += 600;
        window.scrollTo(0, y);
        if (y < document.body.scrollHeight + 800) setTimeout(step, 60);
        else resolve();
      };
      step();
    });
  });
  await page.waitForTimeout(700);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
}


// ---------- 1. Desktop load, console errors, structure ----------
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const consoleErrors = [];
page.on("console", (m) => {
  if (m.type() === "error") consoleErrors.push(m.text());
});
page.on("pageerror", (e) => consoleErrors.push(String(e)));
await page.goto(BASE, { waitUntil: "networkidle" });

if (consoleErrors.length === 0) pass("no console/page errors on load");
else fail(`console errors: ${JSON.stringify(consoleErrors)}`);

// Sections exist
const sectionIds = ["home", "about", "expertise", "experience", "work", "credentials", "leadership", "contact"];
for (const id of sectionIds) {
  const el = await page.$(`section#${id}, [id="${id}"]`);
  el ? pass(`section #${id} exists`) : fail(`section #${id} MISSING`);
}

// Heading hierarchy: exactly one h1, h2s present, no level skips
const headings = await page.$$eval("h1,h2,h3,h4", (els) => els.map((e) => Number(e.tagName[1])));
const h1Count = headings.filter((h) => h === 1).length;
h1Count === 1 ? pass("exactly one <h1>") : fail(`h1 count = ${h1Count}`);
let skipped = false;
for (let i = 1; i < headings.length; i++) if (headings[i] - headings[i - 1] > 1) skipped = true;
skipped ? fail(`heading level skip detected: ${headings.join(",")}`) : pass("no heading level skips");

// Nav anchors resolve
const navHrefs = await page.$$eval('header nav[aria-label="Primary"] a', (els) => els.map((e) => e.getAttribute("href")));
for (const href of navHrefs) {
  const id = href.slice(1);
  const exists = await page.$(`#${id}`);
  exists ? pass(`nav ${href} resolves`) : fail(`nav ${href} BROKEN`);
}

// Anchor click scrolls and header does not cover target
await page.click('header nav[aria-label="Primary"] a[href="#experience"]');
await page.waitForTimeout(900);
const covered = await page.evaluate(() => {
  const t = document.getElementById("experience").getBoundingClientRect().top;
  return t < 40; // header ~72px tall; scroll-padding 6.5rem=104px should keep top around 104-ish minus header
});
covered ? fail("anchor target obscured by sticky header") : pass("anchor scroll offset OK (header does not cover target)");

// Contact links
const mailto = await page.$eval('a[href^="mailto:"]', (e) => e.getAttribute("href"));
mailto === "mailto:kolawoletaiwo2002@yahoo.com" ? pass("mailto link correct") : fail(`mailto wrong: ${mailto}`);
const tels = await page.$$eval('a[href^="tel:"]', (els) => els.map((e) => e.getAttribute("href")));
JSON.stringify(tels) === JSON.stringify(["tel:+2347038600293", "tel:+2348057009208"])
  ? pass("tel links correct") : fail(`tel links wrong: ${JSON.stringify(tels)}`);

// Conditional elements hidden
const wa = await page.$('a[href^="https://wa.me"]');
wa ? fail("WhatsApp link shown but no number confirmed") : pass("WhatsApp link hidden (unconfirmed)");
const dl = await page.$('a[download]');
dl ? fail("CV download shown but no file configured") : pass("CV download hidden (unconfigured)");
const socials = await page.$$('a[href*="linkedin.com"], a[href*="instagram.com"], a[href*="facebook.com"], a[href*="x.com"], a[href*="twitter.com"]');
socials.length === 0 ? pass("social links hidden (unconfigured)") : fail("social links rendered while null");
const viewProject = await page.$$eval("a", (els) => els.filter((e) => /view project/i.test(e.textContent)).length);
viewProject === 0 ? pass('"View project" hidden (no URL configured)') : fail('"View project" rendered without URL');

// Images loaded
const brokenImgs = await page.$$eval("img", (els) => els.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src));
brokenImgs.length === 0 ? pass("all images loaded") : fail(`broken images: ${brokenImgs}`);

// Disclosure works on desktop
const detailsOpenBefore = await page.$eval("#experience details", (d) => d.open);
await page.click("#experience summary");
await page.waitForTimeout(300);
const detailsOpenAfter = await page.$eval("#experience details", (d) => d.open);
!detailsOpenBefore && detailsOpenAfter ? pass("experience disclosure opens on click") : fail("disclosure toggle failed");
const ubaVisible = await page.isVisible("text=UBA PLC");
ubaVisible ? pass("earlier roles visible after disclosure") : fail("earlier roles not visible");

// Full-page desktop screenshot
await scrollThrough(page);
await page.screenshot({ path: `${OUT}/desktop-1440-full.png`, fullPage: true });

// ---------- 2. Responsive: horizontal overflow at all widths ----------
const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
for (const w of widths) {
  const p = await browser.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(BASE, { waitUntil: "networkidle" });
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  overflow <= 0 ? pass(`no horizontal overflow @ ${w}px`) : fail(`horizontal overflow ${overflow}px @ ${w}px`);
  if ([320, 390, 768, 1024].includes(w)) {
    await scrollThrough(p);
    await p.screenshot({ path: `${OUT}/responsive-${w}-full.png`, fullPage: true });
  }
  await p.close();
}

// ---------- 3. Mobile menu behaviour @390 ----------
const m = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await m.goto(BASE, { waitUntil: "networkidle" });
const menuBtn = m.locator('button[aria-controls="mobile-menu"]');
await menuBtn.click();
await m.waitForTimeout(300);
const expanded = await menuBtn.getAttribute("aria-expanded");
expanded === "true" ? pass("mobile menu aria-expanded=true after open") : fail("aria-expanded not set");
const menuVisible = await m.isVisible("#mobile-menu");
menuVisible ? pass("mobile menu visible") : fail("mobile menu not visible");
await m.screenshot({ path: `${OUT}/mobile-menu-open.png` });
// Click a link → menu closes
await m.click('#mobile-menu a[href="#about"]');
await m.waitForTimeout(700);
const closedAfterNav = await m.isVisible("#mobile-menu");
!closedAfterNav ? pass("mobile menu closes after selecting a link") : fail("menu stayed open after link click");
// Escape closes
await menuBtn.click();
await m.waitForTimeout(200);
await m.keyboard.press("Escape");
await m.waitForTimeout(300);
const closedAfterEsc = !(await m.isVisible("#mobile-menu"));
closedAfterEsc ? pass("Escape closes mobile menu") : fail("Escape did not close menu");
await m.close();

// ---------- 4. Reduced motion: content visible without transitions ----------
const rm = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce" });
await rm.goto(BASE, { waitUntil: "networkidle" });
await rm.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await rm.waitForTimeout(500);
await rm.evaluate(() => window.scrollTo(0, 0));
await rm.waitForTimeout(300);
const hiddenReveals = await rm.$$eval(".reveal", (els) => els.filter((e) => getComputedStyle(e).opacity !== "1").length);
hiddenReveals === 0 ? pass("reduced motion: all reveal content fully visible") : fail(`${hiddenReveals} reveals stuck invisible under reduced motion`);
await rm.close();

// ---------- 5. Keyboard navigation reaches nav + CTA ----------
const kb = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await kb.goto(BASE, { waitUntil: "networkidle" });
await kb.keyboard.press("Tab"); // skip link
const first = await kb.evaluate(() => document.activeElement.textContent.trim());
first.includes("Skip to main content") ? pass("skip link is first tab stop") : fail(`first tab stop: ${first}`);
await kb.close();

await browser.close();

// ---------- Report ----------
const failed = results.filter((r) => !r.ok);
for (const r of results) console.log(`${r.ok ? "PASS" : "FAIL"}  ${r.msg}`);
console.log(`\n=== ${results.length - failed.length}/${results.length} checks passed ===`);
process.exit(failed.length ? 1 : 0);
