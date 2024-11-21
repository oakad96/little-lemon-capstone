import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Little Lemon is owned by two Italian brothers, Mario and Adrian,
              who moved to the United States to pursue their shared dream of
              owning a restaurant. Our chefs draw inspiration from Italian,
              Greek, and Turkish culture to create a unique dining experience.
            </p>
            <Button
              variant="outline"
              className="border-secondary text-primary hover:bg-secondary/10"
            >
              Learn More
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
              alt="Restaurant chefs"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
