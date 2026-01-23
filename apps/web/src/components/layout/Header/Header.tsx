import { UserCircle, Globe, Tag, LifeBuoy } from 'lucide-react'

export const Header = () => {
  return (
    <header className="w-full pt-4 bg-white  md:px-12 flex items-center justify-between">
      {/* Logo - Ajuste o caminho da imagem conforme seu projeto */}
      <div className="flex items-center">
        <div className="bg-blue-900 p-2 rounded-tl-[40px] rounded-br-[40px] h-28 w-28">
          <img src="../public/logo.svg" alt="Goyta-Bus" className="h-22.5 w-22.5" />
        </div>
      </div>

      {/* Navegação Central */}
      <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        {/* LINK ATIVO: Borda fixa para indicar onde o usuário está */}
        <a href="#" className="relative flex items-center gap-2 text-blue-900 pb-10 pt-10">
          <Globe size={20} /> Viagens
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-900 rounded-b-full"></span>
        </a>

        {/* LINK COM HOVER ANIMADO: Ofertas */}
        <a
          href="#"
          className="relative group flex items-center gap-2 hover:text-blue-900 transition-colors pb-10 pt-10"
        >
          <Tag size={20} /> Ofertas
          <span
            className="absolute -bottom-1 left-0 w-full h-1 bg-blue-900 
                   scale-x-0 origin-left transition-transform duration-300 
                   group-hover:scale-x-100 rounded-b-full"
          ></span>
        </a>

        {/* LINK COM HOVER ANIMADO: Ajuda */}
        <a
          href="#"
          className="relative group flex items-center gap-2 hover:text-blue-900 transition-colors pb-10 pt-10 "
        >
          <LifeBuoy size={20} /> Ajuda
          <span
            className="absolute -bottom-1 left-0 w-full h-1 bg-blue-900 
                   scale-x-0 origin-left transition-transform duration-300 
                   group-hover:scale-x-100 rounded-b-full"
          ></span>
        </a>
      </nav>

      {/* Lado Direito: Login/Registro */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
          <UserCircle size={24} />
          <span>Entrar</span>
        </button>
        <div className="h-6 w-[px] bg-gray-300 mx-1"></div>
        <button className="text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
          Registrar-se
        </button>
      </div>
    </header>
  )
}
