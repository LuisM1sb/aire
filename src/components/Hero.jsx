export default function Hero() {
  return (
    <section id="inicio" className="bg-blue-600 text-white text-center py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Climatiza tu hogar con expertos</h2>
      <p className="text-lg md:text-xl mb-6">
        Instalación, mantenimiento y reparación de aire acondicionado a domicilio
      </p>
      <a
        href="https://wa.me/56942555908?text=Hola%20Aire%20Acondicionado"
        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
      >
        Solicitar una visita
      </a>
    </section>
  );
}