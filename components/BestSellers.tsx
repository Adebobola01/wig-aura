import React from "react";

const BestSellers = () => {
  return (
    <section>
      <h2 className="text-white text-3xl font-bold font-serif leading-tight tracking-[-0.015em] my-4 pt-5">
        Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-3 group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Long, wavy brown wig on a mannequin"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVxsSh7t-9T7dWUrtoxHhwvxN1VI3PXPmI5Fu2eAY7-eCPHrg-sehHE1-GGlKJ4qLl-HkJFPMkUKnyf9MiJOPh7cEgmbnin5DPnqf8cihl0JQKoiJqEVGPOr8Mp92kN40GuhwjJn_p3dLyhTBIMjsaOJ1Q4S2hEi26M6wjvj3S_5G9liGf59tHDWyS_ZlG6XBZg42kyknaYG8sjUkABN0o0_PsLnGU668iScMM6F3_p-PpPQbgBhG_3tYyNb86iKrz66KppBpC_OM"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold">
              ClassNaclassNameic Wave 24"
            </h3>
            <p className="text-white/70">$249.99</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Sleek black bob wig"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoZ6gtHIytO_vU5EQkFPTre1H2o6uKtM9NxyPMzlT8WfrKzF2FPNhFuxfHj8s1R7owxHxw-HVO8V6hICTHdscLk9xyiw_4yg_eB4MoxHQcp18pa7WQgYUN4IIHhIu0dBKuXv7ZVMxl7f-xRHnbNAbQb3c0FAUuk4Jtbnpq-nk-tVBkq2Havd9lQThqsMMUTUBQijHrm8PVRKIRQOPvhClTZUZBgp0DLYDWsMCpbbOtu4fV0uY8GxSS6gtibLcB3KkhTTvLdVrCv5M"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold">Midnight Sleek Bob</h3>
            <p className="text-white/70">$179.99</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Blonde curly wig"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGyWDh6jRP8xNe9EVettA63I3BBn8SuIqjo3pdYtjSE-lVK-HXbv-eyQznIu1Y4MrSVI_-xaD8OrjQfQLDfmQpYUVYzaqZm2fornfQHrQ1qYlrdAgwEMxz19nCESq3b-uSyy6Sc4LSG15S3F1csEh1oRmulPt2OQV0yrgXfxhgVSBBeWeiTr9lXFMp7fRXJC9FPa361YEfW6u_t8AcSfXwy6lsDFbIKH-sIjAqNhTn2eEhNRk-kj0T22nqS_9ZuwlyWQhKBZP317s"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold">Golden Curls</h3>
            <p className="text-white/70">$219.99</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 group">
          <div className="overflow-hidden rounded-xl">
            <img
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              data-alt="Auburn red long wig"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArfZYItwZICeBTJuLpm-EU4IFuE3dZJt04YPkyMVhCuLwrnU1RXRphXhX9KWfBkU7oWRy4IvF2VfiWafqCuo5R_34b57GGK-bGtuOzyAQtpTwdLLo2Ddq6ogE3CZjv50T9iJQRpoMO57UnQMVhk_BwRLZpgiykLAdru4LHAxUJqgtEVQ36alYcHSTJEG5JGikQmCRZo2kC52xoMMUSRFEp3WyQWAFPYIcm4N9mhhZDB-uuTKsVD08neOae7nc9GR9niggFs9qVUc0"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-bold">Autumn Fire</h3>
            <p className="text-white/70">$229.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
