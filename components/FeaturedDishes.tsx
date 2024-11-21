import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

function FeaturedDishes({ featuredDishes }: { featuredDishes: any[] }) {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <Card
              key={dish.name}
              className="overflow-hidden border-secondary/20"
            >
              <div className="relative h-48">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{dish.name}</h3>
                  <span className="text-secondary font-bold">{dish.price}</span>
                </div>
                <p className="text-muted-foreground">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedDishes;
