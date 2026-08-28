import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/lib/site";

const title = "Decodreams — Interior Designer in Vijay Nagar, Indore";
const description =
  "Interior design and architecture studio in Vijay Nagar, Indore. Turnkey interiors, elevation design, carpentry, POP and glass work — rated 4.9 across 131 Google reviews.";
const ogImage = `${site.url}/images/projects/luxury-living-room-01.jpg`;

/** Structured data so Google can read the studio as a local business. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#studio`,
  name: site.legalName,
  alternateName: site.name,
  slogan: site.tagline,
  description,
  url: site.url,
  telephone: `+${site.phone}`,
  email: site.email,
  image: ogImage,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "Indore",
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.7480965, longitude: 75.8955697 },
  areaServed: { "@type": "City", name: "Indore" },
  founder: [
    { "@type": "Person", name: "Hemant Ramdiya" },
    { "@type": "Person", name: "Kartik Ramdiya" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:30",
      closes: "19:00",
    },
  ],
  sameAs: site.socials.map((s) => s.href),
  hasMap: site.mapDirectionsUrl,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
      { name: "theme-color", content: "#EDE6D9" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: Index,
});

/**
 * ink → limewash → plaster → ink → limewash → espresso → plaster → ink.
 */
function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
