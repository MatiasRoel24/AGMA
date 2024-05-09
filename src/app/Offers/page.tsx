import { HoverEffect } from "../../components/ui/card-hover-effect";
import Image from "next/image";
import fondo2 from "../../../public/fondo2.jpg";

export function CardHoverEffectDemo() {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src={fondo2}
          alt="Fondo 2"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          quality={100}
        />
      </div>

      {/* Contenido del componente */}
      <div className="pt-32 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 pt-10" id="Offers">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nuestros Servicios</h2>
          <p className="mt-2 text-lg leading-8 text-white">Brindamos nuestros servicios de manera personalizada. Nos adaptamos a tus necesidades.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-white pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
      </div>

      {/* Componente HoverEffect */}
      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <HoverEffect items={services} />
      </div>
    </div>
  );
}

export const services = [
  {
    title: "Creación de página web",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Redes sociales",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Marketing",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Anuncios",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
