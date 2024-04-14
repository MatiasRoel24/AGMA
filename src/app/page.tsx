import { Testimonial } from "@/app/Testimonial/Testimonial";
import { Hero } from "./Hero/Hero";
import Navbar from "@/components/Navbar";
import { Barra } from "@/components/Barra";
import { CardHoverEffectDemo } from "./Offers/Offers";
import { Prices } from "./Prices/Prices";


export default function Home() {
  return (
    <div className="bg-slate-950">
      <Barra />
      <Navbar />
      <Hero />
      <Testimonial />
      <CardHoverEffectDemo />
      <Prices />
    </div>

  );
}