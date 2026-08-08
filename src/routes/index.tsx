import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { ArtSpace } from "../components/ArtSpace";
import { VideoSection } from "../components/VideoSection";
import { Features } from "../components/Features";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZaavTest" },
      {
        name: "description",
        content:
          "Handcrafted jewelry from Bali. Pieces made with meaning — worn every day, remembered in the moments that matter. Shipped worldwide.",
      },
      { property: "og:title", content: "ZaavTest" },
      {
        property: "og:description",
        content:
          "Handcrafted jewelry from Bali. Pieces made with meaning — worn every day, remembered in the moments that matter. Shipped worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ArtSpace />
      <VideoSection />
      <Features />
      <Faq />
      <Footer />
    </>
  );
}
