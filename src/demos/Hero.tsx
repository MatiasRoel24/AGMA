"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function Hero() {
  return (
    <HeroHighlight showGradient={false} >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white dark:text-black max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Construimos tu sitio web y manejamos tus redes sociales para que {" "}
        <Highlight className="text-white dark:text-black">
          tu marca se destaque
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
