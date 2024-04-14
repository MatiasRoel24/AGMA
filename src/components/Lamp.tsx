"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Lamp() {
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
        className="bg-neutral-900 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <HeroHighlight showGradient={false}>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -10, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="md:text-4xl lg:text-5xl font-bold text-white dark:text-black max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Construimos tu sitio web y manejamos tus redes sociales para que {" "} <br />
            <Highlight className="text-white dark:text-black px-10">
              tu marca se destaque
            </Highlight>
            <button className="px-10 py-2 mx-52 rounded-md bg-cyan-500 text-white font-bold transition duration-200 hover:bg-cyan-800 hover:text-white border-2 border-transparent hover:border-cyan-800 md:text-2xl">
              Agenda gratis 🚀
            </button>
          </motion.h1>
        </HeroHighlight>
      </motion.h1>
    </LampContainer>
  );
}
