import { Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  return (
    <section>
      <h2 className="text-white text-3xl font-bold font-serif leading-tight tracking-[-0.015em] px-4 pb-6 pt-5 text-center">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        <div className="border border-white/20 rounded-xl p-6 flex flex-col items-center text-center bg-surface-dark/50">
          <div className="flex text-primary mb-2">
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
          </div>
          <blockquote className="text-white/90 italic">
            "The quality is absolutely incredible. It feels so real and I get
            compliments everywhere I go!"
          </blockquote>
          <p className="text-white font-bold mt-4">- Adetomiwa O.</p>
        </div>
        <div className="border border-white/20 rounded-xl p-6 flex flex-col items-center text-center bg-surface-dark/50">
          <div className="flex text-primary mb-2">
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
          </div>
          <blockquote className="text-white/90 italic">
            "I've never felt more confident. The glueless wig is a game-changer
            for my busy lifestyle."
          </blockquote>
          <p className="text-white font-bold mt-4">- Adeteniola O.</p>
        </div>
        <div className="border border-white/20 rounded-xl p-6 flex flex-col items-center text-center bg-surface-dark/50">
          <div className="flex text-primary mb-2">
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
            <Star fill="#f2b90d" stroke="none" />
          </div>
          <blockquote className="text-white/90 italic">
            "Stunning color and amazing customer service. They helped me find
            the perfect match."
          </blockquote>
          <p className="text-white font-bold mt-4">- Adedolapo O.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
