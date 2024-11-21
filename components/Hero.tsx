import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80"
          alt="Restaurant interior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Little Lemon</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the finest Mediterranean cuisine in Chicago
        </p>
        <Link href="/reserve">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary"
          >
            Reserve a Table
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
