import { UserCircle, Globe, Tag, LifeBuoy } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthDropdown } from '../../ui/AccountButton/AuthDropdown'

export const Header = () => {
  const navLinkStyles = 'relative flex items-center gap-2 pb-10 pt-10 transition-colors font-medium'
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full pt-4 bg-slate-50  md:px-12 flex items-center justify-between">
      {/* Logo - Ajuste o caminho da imagem conforme seu projeto */}
      <div className="flex items-center">
        <div className="bg-blue-900 p-2 rounded-tl-[40px] rounded-br-[40px] h-28 w-28">
          <Link to="/">
            <img src="/logo.svg" alt="Goyta-Bus" className="p-1 h-22.5 w-22.5" />
          </Link>
        </div>
      </div>

      {/* Navegação Central */}
      <nav className="hidden md:flex items-center gap-8 text-gray-600">
        {/* LINK: Viagens */}
        <NavLink
          to="/viagens"
          className={({ isActive }) =>
            `${navLinkStyles} ${isActive ? 'text-blue-900' : 'hover:text-blue-900 text-gray-600 group'}`
          }
        >
          {({ isActive }) => (
            <>
              <Globe size={20} /> Viagens
              <span
                className={`absolute -bottom-1 left-0 w-full h-1 bg-blue-900 rounded-b-full transition-transform duration-300 
              ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'}`}
              />
            </>
          )}
        </NavLink>

        {/* LINK: Ofertas */}
        <NavLink
          to="/ofertas"
          className={({ isActive }) =>
            `${navLinkStyles} ${isActive ? 'text-blue-900' : 'hover:text-blue-900 text-gray-600 group'}`
          }
        >
          {({ isActive }) => (
            <>
              <Tag size={20} /> Ofertas
              <span
                className={`absolute -bottom-1 left-0 w-full h-1 bg-blue-900 rounded-b-full transition-transform duration-300 
              ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'}`}
              />
            </>
          )}
        </NavLink>

        {/* LINK: Ajuda */}
        <NavLink
          to="/ajuda"
          className={({ isActive }) =>
            `${navLinkStyles} ${isActive ? 'text-blue-900' : 'hover:text-blue-900 text-gray-600 group'}`
          }
        >
          {({ isActive }) => (
            <>
              <LifeBuoy size={20} /> Ajuda
              <span
                className={`absolute -bottom-1 left-0 w-full h-1 bg-blue-900 rounded-b-full transition-transform duration-300 
              ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 origin-left'}`}
              />
            </>
          )}
        </NavLink>
      </nav>

      {/* Lado Direito: Login/Registro */}
      <div className="relative flex items-center gap-4">
        {' '}
        {/* Adicionei 'relative' aqui */}
        <button
          className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <UserCircle size={24} />
          <span>Conta</span>
        </button>
        {open && (
          <>
            {/* 1. Este é o Overlay: uma div invisível que cobre a tela toda */}
            <div className="fixed inset-0 z-40 cursor-default" onClick={() => setOpen(false)} />

            {/* 2. O seu Dropdown real com um z-index maior que o overlay */}
            <div className="absolute -top-10 -right-10 mt-2 z-50 w-250">
              <AuthDropdown onClose={() => setOpen(false)} />
            </div>
          </>
        )}
      </div>
    </header>
  )
}
