"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] min-h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ext.same-assets.com/2983017386/1092742629.jpeg)"
      }}
    >
      <div className="container-custom text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Discover the Best Restaurants in Luxembourg
        </h1>
        <p className="text-xl text-white-600 mb-8 text-center md:text-left">
          Find the perfect place to eat in Luxembourg with our curated selection of top-rated restaurants
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white"
          onClick={() => {
            // Scroll to restaurant section
            document.getElementById('top-restaurants')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
        >
          Let's Eat
        </Button>
      </div>
    </section>
  );
}
