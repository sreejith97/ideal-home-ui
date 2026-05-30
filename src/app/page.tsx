import Approach from "@/components/layout/Approach";
import Contact from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/layout/Gallery";
import Hero from "@/components/layout/Hero";
import HowItWorks from "@/components/layout/HowItWorks";
import Navbar from "@/components/layout/Navbar";
import Solution from "@/components/layout/Solution";
import Testimonials from "@/components/layout/Testimonials";
import WhyChoose from "@/components/layout/WhyChoose";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solution />
      <Approach />
      <HowItWorks />
      <Gallery />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
