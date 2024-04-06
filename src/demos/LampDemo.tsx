"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { ButtonMoving } from "@/demos/ButtonMoving";
import { AnimatedPinDemo } from "./AntimatedPinDemo";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-neutral-900 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
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
        Construimos tu sitio web y manejamos tus redes sociales para que {" "} <br/>
        <Highlight className="text-white dark:text-black">
          tu marca se destaque
        </Highlight>
        <div className="tracking-normal mt-2"> <ButtonMoving /> </div>
        
      </motion.h1>
    </HeroHighlight>
      </motion.h1>

    </LampContainer>
    
  );
}
