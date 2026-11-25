import { Images } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  objectPosition?: string;
};

/** Gallery images and captions. */
const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    src: "/images/image1.jpg",
    alt: "Instructor teaching participants in a physical classroom.",
    title: "Classroom Teaching",
    category: "Teaching & Training",
  },
  {
    id: "gallery-02",
    src: "/images/image3.jpg",
    alt: "Kolawole attending a GIIT Africa mission event..",
    title: "GIIT Africa Mission Event",
    category: "Events & Engagements",
  },
  {
    id: "gallery-03",
    src: "/images/image4.jpg",
    alt: "Instructor presenting a certificate to a participant during a certification ceremony.",
    title: "Certificate Presentation",
    category: "Professional & Recognition",
    objectPosition: "center 25%",
  },
  {
    id: "gallery-04",
    src: "/images/image2.jpg",
    alt: "Instructor teaching participants in a physical classroom..",
    title: "Classroom Teaching",
    category: "Teaching & Training",
  },
  {
    id: "gallery-05",
    src: "/images/project-dashboard.jpg",
    alt: "Power BI flight performance dashboard displaying flight activity and performance metrics.",
    title: "Flight Performance Dashboard",
    category: "Projects & Analytics",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="border-b border-line bg-surface py-20 md:py-28"
    >
      <Container>
        {/* Section introduction */}
        <Reveal>
          <SectionHeading
            index="06"
            label="Gallery"
            title="Moments & Experiences"
            headingId="gallery-heading"
            description="A visual collection of selected moments, professional experiences, collaborations, and activities beyond the everyday work."
          />
        </Reveal>

        {/* Gallery grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 80} className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl border border-line bg-canvas transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:bg-surface hover:shadow-lift">
                {/* Image */}
                <div>
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      style={{
                        objectPosition: item.objectPosition ?? "center",
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Image details */}
                <div className="flex items-center justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold tracking-tight text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted">
                      {item.category}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal/20 bg-teal-tint text-teal transition-colors duration-300 group-hover:bg-navy group-hover:text-gold-soft"
                  >
                    <Images className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
