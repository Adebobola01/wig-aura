import React from "react";

const LearnMoreCard = () => {
  return (
    <section className="bg-(--surface-dark) rounded-xl my-40">
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-16 p-8 md:p-12">
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            data-alt="A close-up shot of a wig stylist carefully crafting a hairline."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9wfAAMNhWXfibBzI8y9OAL6lKLnzKlne9DqxBDQpptyHzcCx44gW9Ua6Hn3T0npdcy4I9CGf7PuJB3JlN1hrK8obGG1UiQU6VKKpg1w_X7PCU_mhIuvze0YQ0OhwByve0QZ2J8dnR9TvhMUzjCc8CUtp0bzxq-kAl41hCv3RDa1jUPzlWWMT8l0PEicHCjE35FAhTD_tvBxnzk6ZzotASfJyPAiN8WR2t8rGA20pdqHRltNF07-ufMTZQ-aXEEEaCn4SXC1Jl740"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white">
            Crafted with Passion, Styled for You.
          </h2>
          <p className="text-white/80 leading-relaxed">
            Our mission is to empower you to express your unique identity with
            confidence. Each wig is meticulously crafted from the finest,
            ethically-sourced materials, ensuring a flawless, natural look and
            unparalleled comfort. We believe in the transformative power of a
            great hairstyle and are dedicated to providing you with the very
            best.
          </p>
          <a
            className="text-(--primary) font-bold mt-2 hover:underline"
            href="#"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreCard;
