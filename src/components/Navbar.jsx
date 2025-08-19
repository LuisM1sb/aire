import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Waywen Climatización</h1>
        
        {/* Menú hamburguesa para móviles */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Menú de navegación - oculto en móviles, visible en desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-200`}>
        <nav className="flex flex-col space-y-4 px-4 py-6">
          <a 
            href="#inicio" 
            className="text-gray-700 hover:text-blue-600 transition py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#servicios" 
            className="text-gray-700 hover:text-blue-600 transition py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </a>
          <a 
            href="#contacto" 
            className="text-gray-700 hover:text-blue-600 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}