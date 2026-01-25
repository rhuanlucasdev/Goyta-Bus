import { Globe, LifeBuoy, Tag } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-50  mt-40">
      {/* Container Principal: Logo (Esq), Nav (Centro), Espaço Vazio (Dir) */}
      <div className="max-w-360 gap-100 px-6 md:px-12 flex items-center justify-between">
        {/* LADO ESQUERDO: Logo (Largura fixa para não empurrar o centro) */}
        <div className="flex-1 flex items-center justify-start h-32">
          <div className="flex items-center gap-4">
            <div className="bg-blue-900 p-4 rounded-tl-[40px] rounded-br-[40px] h-28 w-28 flex items-center justify-center">
              <img src="/logo.svg" alt="Goyta-Bus" className="w-[88px]" />
            </div>
            <span className="w-1 h-30.5 bg-blue-900 rounded-br-sm rounded-tl-sm"></span>
            <div className="flex flex-col pb-10">
              <h3 className="text-xl text-blue-900 font-bold leading-none">Goyta</h3>
              <span className="text-lg text-blue-900 font-extralight">Bus</span>
            </div>
          </div>
        </div>

        {/* CENTRO: Navegação (Sua lógica de hover mantida intacta) */}
        <nav className="hidden px-20 md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="relative flex items-center gap-2 text-blue-900 pb-10 pt-10">
            <Globe size={20} /> Viagens
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-900 rounded-b-full"></span>
          </a>

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

          <a
            href="#"
            className="relative group flex items-center gap-2 hover:text-blue-900 transition-colors pb-10 pt-10"
          >
            <LifeBuoy size={20} /> Ajuda
            <span
              className="absolute -bottom-1 left-0 w-full h-1 bg-blue-900 
                     scale-x-0 origin-left transition-transform duration-300 
                     group-hover:scale-x-100 rounded-b-full"
            ></span>
          </a>
        </nav>

        {/* LADO DIREITO: Espaçador para garantir a centralização real do nav */}
        <div className="flex-1 hidden md:block"></div>
      </div>

      {/* LINHA INFERIOR: Créditos e Políticas */}
      <div className=" mx-2 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-200 text-sm text-gray-400">
        <p>©2026 GoytaBus. CNPJ 00.000.000/0001-00</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Termos de Serviço
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
