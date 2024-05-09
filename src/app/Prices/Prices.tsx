import { CardsPrices } from "@/components/CardsPrices";
import Image from "next/image";
import fondo3 from "../../../public/fondo3.jpg";

export const Prices = () => {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={fondo3}
          alt="Fondo 3"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
        />
      </div>

      {/* Contenido del componente */}
      <div className="h-screen py-10" id="Price">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Planes</h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
          </div>
          
          {/* Componente CardsPrices */}
          <CardsPrices />
        </div>
      </div>
    </div>
  );
};
