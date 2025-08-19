import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +56 9 4255 5908
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                info@aireacondicionado.cl
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Santiago, Chile
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>Instalación de aire acondicionado</li>
              <li>Mantenimiento preventivo</li>
              <li>Reparación y servicio técnico</li>
              <li>Limpieza de equipos</li>
              <li>Venta de equipos</li>
            </ul>
          </div>

          {/* Horarios y WhatsApp */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios de atención</h3>
            <div className="space-y-2 mb-6">
              <p>Lunes a Viernes: 8:00 - 18:00</p>
              <p>Sábados: 9:00 - 14:00</p>
              <p>Emergencias: 24/7</p>
            </div>
            
            <a
              href="https://wa.me/56942555908?text=Hola%20Aire%20Acondicionado"
              className="inline-block bg-green-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Aire Acondicionado. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">Política de privacidad</a>
              <a href="#" className="hover:text-blue-400 transition">Términos de servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 