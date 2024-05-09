import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import Image from "next/image";
import fondo4 from "../../../public/fondo2.jpg";

export default function Projects() {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={fondo4}
          alt="Fondo 4"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
        />
      </div>

      {/* Contenido del componente */}
      <div className="flex flex-col justify-center items-center relative z-10">
        <h1 className="text-5xl xl:text-3xl font-bold tracking-tight text-white sm:text-4xl mt-24 mb-24 lg:mb-12 "> Proyectos </h1>
        <AnimatedPinDemo />
      </div>
    </div>
  );
}
