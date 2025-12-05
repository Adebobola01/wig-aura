import BestSellers from "@/components/BestSellers";
import FeatureCollections from "@/components/FeatureCollections";
import Hero from "@/components/Hero";
import LearnMoreCard from "@/components/LearnMoreCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureCollections />
      <BestSellers />
      <LearnMoreCard />
      <Testimonials />
    </div>
  );
}
