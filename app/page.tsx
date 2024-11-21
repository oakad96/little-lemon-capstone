import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
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
      <Features />

      {/* About Section */}
      <About />

      {/* Featured Dishes */}
      <FeaturedDishes featuredDishes={featuredDishes} />
    </main>
  );
}
