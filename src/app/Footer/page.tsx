import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white py-7 flex flex-col mt-24 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-40 ">
          {/* Columna izquierda: Formulario de contacto */}
          <div className="lg:w-full text-lg ">
            <h2 className="font-bold mb-4">Contáctanos</h2>
            <form className="max-w-sm">
              <div className="mb-3">
                <label className="block text-sm font-medium">Nombre</label>
                <input type="text" className="w-full rounded border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Correo electrónico</label>
                <input type="email" className="w-full rounded border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 text-sm" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium">Mensaje</label>
                <textarea className="w-full rounded border-gray-300 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 text-sm"></textarea>
              </div>
              <button type="submit" className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 text-sm">Enviar</button>
            </form>
          </div>

          {/* Columna del medio: Redes sociales */}
          <div className="lg:w-full flex flex-col items-center justify-center">
            <h2 className="font-bold mb-4">Síguenos en redes sociales</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-3xl text-white hover:text-gray-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl text-white hover:text-gray-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-3xl text-white hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Columna derecha: Menú de navegación */}
          <div className="lg:w-full text-sm">
            <h2 className="font-bold mb-4">Menú de navegación</h2>
            <ul>
              <li className="mb-2"><a href="#Home" className="text-white hover:text-gray-300">Inicio</a></li>
              <li className="mb-2"><a href="#Offers" className="text-white hover:text-gray-300">Servicios</a></li>
              <li className="mb-2"><a href="#Projects" className="text-white hover:text-gray-300">Proyectos</a></li>
              <li className="mb-2"><a href="#Price" className="text-white hover:text-gray-300">Precios</a></li>
              <li className="mb-2"><a href="#Testimonials" className="text-white hover:text-gray-300">Testimonios</a></li>
              <li className="mb-2"><a href="#Contact" className="text-white hover:text-gray-300">Contacto</a></li>
            </ul>
        </div>

        </div>
      </div>

      {/* Información adicional (ejemplo) */}
      <div className="mt-12 text-center text-sm">
        <p>&copy; 2024 SDS. Todos los derechos reservados.</p>
        <p>Términos de servicio | Política de privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
