import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
