import { WrenchIcon, CogIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: "Instalación",
    description: "Equipos split, multisplit y sistemas inverter adaptados a tu hogar.",
    icon: CheckCircleIcon,
  },
  {
    title: "Mantenimiento",
    description: "Limpieza, revisión y prevención para maximizar la vida útil del equipo.",
    icon: CogIcon,
  },
  {
    title: "Reparación",
    description: "Diagnóstico y arreglo de fallas con atención rápida y profesional.",
    icon: WrenchIcon,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
              <Icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}