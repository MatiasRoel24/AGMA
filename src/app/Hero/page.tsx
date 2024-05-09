import Fondo from "../../../public/fondofp2.jpg";
import Image from "next/image";
import Programador from "../../../public/programmer-removebg-preview.png";

export const Hero = () => {
  return (
    <div id="Home" className="relative h-screen w-full flex justify-around items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={Fondo}
          alt="Mountains"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
        />
      </div>

      {/* Contenido */}
      <div className="z-10">
        <div className="flex flex-col">
          <h1 className="text-8xl text-white font-bold mb-2">SkyWard</h1>
          <h2 className="text-7xl text-cyan-900 font-bold mb-5">Digital Solutions</h2>
          <h3 className="text-2xl text-white mb-12">Llevamos tu marca hacia lo más lejos</h3>
        </div>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Agendar cita
        </button>
      </div>

      {/* Imagen del programador */}
      <div className="z-10">
        <Image src={Programador} alt="programmer" />
      </div>

    </div>
  );
};
