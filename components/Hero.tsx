import React from "react";

const Hero = () => {
  return (
    <section className="mt-8">
      <div
        className="flex min-h-120 flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-10 sm:px-12 sm:pb-12"
        data-alt="A model wearing a luxurious, long flowing wig, set against a dark, elegant background."
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.6) 100%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMpo74MN4G8fIBV_CV8Rk0Sqr-JjOT-1r8U54bduL_m_XcXhQluSfYGymF4RTtDzQ-4J8bDQUgmnjb3fUzvyey7RaQgxxzs4weVvl0BfO71igiAOra2lulti9HhjMNF6dUy609loLnv9dcmdBGzcA6Op_TpbkBE2ca1n2azM6j4iER8T1YdvB9A1EcrfzmvXQdGu6EA5mLF7xBDSvPFyrmlog65xtHiJoLD-EJjuHKiAW4Dmbhihr0qd2EQlSMApy5JKKczzKM4wo')",
          backgroundPosition: "50% 10%",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <h1 className="text-white text-[32px] sm:text-6xl lg:text-7xl font-serif font-bold leading-tight">
            Discover Your Ultimate Look
          </h1>
          <h2 className="text-white/90 text-base sm:text-lg font-normal leading-normal">
            Luxury Wigs, Unmatched Quality.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-(--primary) text-(--background-dark) text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Shop The Collection</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
