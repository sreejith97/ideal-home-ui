import dynamic from "next/dynamic";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";

const Solution = dynamic(() => import("@/components/layout/Solution"));
const Approach = dynamic(() => import("@/components/layout/Approach"));
const HowItWorks = dynamic(() => import("@/components/layout/HowItWorks"));
const Gallery = dynamic(() => import("@/components/layout/Gallery"));
const WhyChoose = dynamic(() => import("@/components/layout/WhyChoose"));
const Testimonials = dynamic(() => import("@/components/layout/Testimonials"));
const Contact = dynamic(() => import("@/components/layout/ContactUs"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

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
