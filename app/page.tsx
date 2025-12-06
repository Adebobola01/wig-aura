import BestSellers from "@/components/BestSellers";
import FeatureCollections from "@/components/FeatureCollections";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LearnMoreCard from "@/components/LearnMoreCard";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="px-6 sm:px-10 xl:px-30 relative pb-10 md:pb-20">
      <Navbar />
      <div>
        <Hero />
        <FeatureCollections />
        <BestSellers />
        <LearnMoreCard />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
