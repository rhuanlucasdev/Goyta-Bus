import { Search, MapPin, Calendar } from "lucide-react";

export const HeroSearch = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 pt-40">
      {/* 1. Barra de Busca (Topo) */}
      <div className="bg-white shadow-lg border border-gray-100 rounded-full px-4 py-3 flex flex-col md:flex-row items-center gap-2 w-[90%] max-w-5xl">
        {/* Origem */}
        <div className="flex flex-col flex-1 px-6 border-r border-gray-200">
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">
            Origem
          </label>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-600" />
            <input
              type="text"
              placeholder="Buscar local"
              className="outline-none text-sm w-full font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Destino */}
        <div className="flex flex-col flex-1 px-6 border-r border-gray-200">
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">
            Destino
          </label>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-600" />
            <input
              type="text"
              placeholder="Buscar local"
              className="outline-none text-sm w-full font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Data */}
        <div className="flex flex-col flex-1 px-6">
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">
            Ida
          </label>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            <input
              type="text"
              placeholder="##/##/####"
              className="outline-none text-sm w-full font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Botão Busca */}
        <button className="bg-[#0A1128] p-5 rounded-full text-white hover:bg-blue-900 transition-all shrink-0 cursor-pointer  ">
          <Search size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* 2. Banner Azul com Imagem de Fundo */}
      <div className="w-[95%] max-w-450 h-64 rounded-[80px] relative overflow-hidden shadow-lg group mt-20">
        {/* A Imagem de Fundo */}
        <img
          src="../public/fundo-banner1.jpg"
          alt="Background Viagens"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Azul (84% de opacidade) */}
        <div className="absolute inset-0 bg-blue-900/84 flex flex-col items-center justify-center text-white p-6">
          <span className="text-sm font-light opacity-80 mb-2 tracking-wide uppercase">
            Intermunicipais - Interestaduais
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Viagens
          </h1>
        </div>
      </div>
    </section>
  );
};
