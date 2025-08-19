export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Waywen Climatización</h1>
        <nav className="space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}