import { Testimonial } from "@/app/Testimonial/page";
import { Hero } from "./Hero/page";
import Navbar from "@/components/navbar";
import { CardHoverEffectDemo } from "./Offers/page";
import Projects from "./Projects/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <CardHoverEffectDemo />
      <Projects />
      <Testimonial />
      <Footer />
    </div>

  );
}