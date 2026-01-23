import { Header } from '../components/layout/Header'
import { Banner } from '../components/ui/Banner'
import { HeroSearch } from '../components/ui/HeroSearch'
import { Links } from '../components/ui/Links'
import { Listagem } from '../components/ui/Listagem'

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Componente de Layout */}
      <Header />
      <main>
        {/* Banner Azul e Barra de busca */}
        <HeroSearch />
        <Banner
          backgroundImage="/fundo-banner1.jpg"
          subtitle="Intermunicipais - Interestaduais"
          title="Viagens"
        />
        {/* Secao de listagem */}
        <Listagem title="Populares" />
        <Links />
        {/* Banner Azul*/}
        <Banner
          backgroundImage="/fundo-banner2.jpg"
          subtitle="20% - 40% - 60% de desconto "
          title="Ofertas"
        />
        <Listagem title="Ofertas" />
      </main>
    </div>
  )
}
