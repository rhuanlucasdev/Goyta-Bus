import { UserCircle, Globe, Tag, LifeBuoy } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-gray-100">
      {/* Logo - Ajuste o caminho da imagem conforme seu projeto */}
      <div className="flex items-center">
        <div className="bg-blue-900 p-2 rounded-tl-[40px] rounded-br-[40px] h-28 w-28">
          <img
            src="../public/logo.svg"
            alt="Goyta-Bus"
            className="h-22.5 w-22.5"
          />
        </div>
      </div>

      {/* Navegação Central */}
      <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <a
          href="#"
          className="flex items-center gap-2 text-blue-700 border-b-2 border-blue-700 pb-1"
        >
          <Globe size={20} /> Viagens
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <Tag size={20} /> Ofertas
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-700 transition-colors"
        >
          <LifeBuoy size={20} /> Ajuda
        </a>
      </nav>

      {/* Lado Direito: Login/Registro */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium">
          <UserCircle size={24} />
          <span>Entrar</span>
        </button>
        <div className="h-6 w-[px] bg-gray-300 mx-1"></div>
        <button className="text-gray-700 hover:text-blue-700 font-medium">
          Registrar-se
        </button>
      </div>
    </header>
  );
};
