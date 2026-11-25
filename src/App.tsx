import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Impact } from "./components/sections/Impact";
import { About } from "./components/sections/About";
import { Expertise } from "./components/sections/Expertise";
import { Experience } from "./components/sections/Experience";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { Credentials } from "./components/sections/Credentials";
import { Leadership } from "./components/sections/Leadership";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";
import { Gallery } from "./components/sections/Gallery";

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only rounded-lg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-navy focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Impact />
        <About />
        <Expertise />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Gallery />
        <Credentials />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
