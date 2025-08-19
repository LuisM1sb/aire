export default function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contáctanos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario - Columna izquierda */}
          <div>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label className="block text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto y mapa - Columna derecha */}
          <div className="space-y-8">
            {/* Información de contacto */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <p className="text-gray-600">+56 9 4255 5908</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">📧</span>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@aireacondicionado.cl</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800">Dirección</p>
                    <p className="text-gray-600">Santiago, Chile</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 text-xl mr-3">🕒</span>
                  <div>
                    <p className="font-semibold text-gray-800">Horarios</p>
                    <p className="text-gray-600">Lun-Vie: 8:00 - 18:00</p>
                    <p className="text-gray-600">Sáb: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href="https://wa.me/56942555908?text=Hola%20Aire%20Acondicionado"
                  className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-700 transition"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ubicación</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.5!2d-70.6483!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI2JzU2LjAiUyA3MMKwMzgnNTQuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación en Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}