import { Clock, MapPin } from "lucide-react";
import { Utensils } from "lucide-react";
import React from "react";

function Features() {
  return (
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
  );
}

export default Features;
