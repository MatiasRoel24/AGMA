import { Testimonial } from "@/app/Testimonial/Testimonial";
import { Hero } from "./Hero/Hero";
import Navbar from "@/components/navbar";
import { CardHoverEffectDemo } from "./Offers/Offers";
import { Prices } from "./Prices/Prices";
import Projects from "./Projects/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <CardHoverEffectDemo />
      <Prices />
      <Projects />
      <Testimonial />
      <Footer />
    </div>

  );
}