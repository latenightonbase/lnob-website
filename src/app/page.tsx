import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Episodes from "@/components/Episodes";
import About from "@/components/About";
import Guests from "@/components/Guests";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Episodes />
        <About />
        <Guests />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}
