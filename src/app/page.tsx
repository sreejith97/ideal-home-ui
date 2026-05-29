import Approach from "@/components/layout/Approach";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Solution from "@/components/layout/Solution";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solution />
      <Approach />
      <Footer />
    </main>
  );
}
