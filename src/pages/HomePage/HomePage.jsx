import React from "react";
import Hero from "../../components/Hero/Hero";
import heroImage from "../../assets/hero_headphones.png";

function HomePage() {
  const heroTexts = [
    "100 Thousand songs, ad-free",
    "Over thousands podcast episodes",
  ];

  return (
    <div>
      <Hero
        texts={heroTexts}
        imageSrc={heroImage}
        imageAlt="headphones"
        imageWidth={212}
      />
    </div>
  );
}

export default HomePage;
