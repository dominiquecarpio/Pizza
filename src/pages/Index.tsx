import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import SectionIndex from "@/components/SectionIndex";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SectionIndex />
      <HeroSection />
      <VideoSection />
      <MenuSection />
      <AboutSection />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
