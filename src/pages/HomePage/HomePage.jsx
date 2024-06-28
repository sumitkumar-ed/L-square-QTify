import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import heroImage from "../../assets/hero_headphones.png";

const heroTexts = [
  "100 Thousand songs, ad-free",
  "Over thousands podcast episodes",
];

function HomePage() {
  return (
    <div>
      <Hero
        texts={heroTexts}
        imageSrc={heroImage}
        imageAlt="headphones"
        imageWidth={212}
      />
      <Section title="Top Albums" type="top" />
      <Section title="New Albums" type="new" />
      <Section title="Songs" type="all" isSongsSection />
    </div>
  );
}

export default HomePage;
