import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredDishes = [
    {
      name: "Mediterranean Grilled Salmon",
      description: "Fresh salmon fillet with herbs, lemon, and olive oil",
      price: "$28",
      image:
        "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      name: "Classic Margherita Pizza",
      description: "Fresh mozzarella, tomatoes, and basil on thin crust",
      price: "$18",
      image:
        "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=400&h=300",
    },
    {
      name: "Greek Lamb Souvlaki",
      description: "Tender lamb skewers with tzatziki and pita bread",
      price: "$24",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&q=80&w=400&h=300",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Utensils className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Authentic Cuisine</h3>
              <p className="text-muted-foreground">
                Traditional recipes with a modern twist
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Open Daily</h3>
              <p className="text-muted-foreground">Serving lunch and dinner</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-bold mb-2">Prime Location</h3>
              <p className="text-muted-foreground">Heart of downtown Chicago</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Featured Dishes */}
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
                    <span className="text-secondary font-bold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
