/// interface doque o componente vai receber
interface BannerProps {
  backgroundImage: string
  subtitle: string
  title: string
}

export const Banner: React.FC<BannerProps> = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="w-[95%] max-w-450 h-64 rounded-[80px] relative overflow-hidden shadow-lg group mt-20 ml-12.5">
      {/* A Imagem de Fundo */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Azul (84% de opacidade) */}
      <div className="absolute inset-0 bg-blue-900/84 flex flex-col items-center justify-center text-white p-6">
        <span className="text-sm font-light opacity-80 mb-2 tracking-wide uppercase">
          {subtitle}
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{title}</h1>
      </div>
    </div>
  )
}
