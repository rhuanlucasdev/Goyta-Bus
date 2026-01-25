export const Links = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-30">
      <div className="flex flex-col justify-center items-center bg-blue-50 w-full">
        <h2 className="text-slate-700 text-4xl text-center pb-10 pt-11.25">
          Não achou a viagem que gostaria?
        </h2>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-5xl text-blue-900 leading-12 group pb-1 mb-11.25"
        >
          VER MAIS
          {/* A borda animada */}
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-blue-900 
               scale-x-0 origin-left transition-transform duration-300 ease-out 
               group-hover:scale-x-100 pb-1"
          ></span>
        </a>
      </div>
      <img src="/logo.svg" alt="icone-logo" className="pt-17.5 w-15" />
    </div>
  )
}
