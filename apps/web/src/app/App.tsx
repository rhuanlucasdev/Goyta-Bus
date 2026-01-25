import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { Viagens } from '../pages/Viagens'
import { Ofertas } from '../pages/Ofertas'
import { Ajuda } from '../pages/Ajuda'
import '../styles/global.css'
import { SearchResults } from '../pages/SearchResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal */}
        <Route path="/" element={<Home />} />
        {/* Rotas do navbar */}
        <Route path="/viagens" element={<Viagens />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/ajuda" element={<Ajuda />} />
        {/* Rota de resultados de pesquisa */}
        <Route path="/pesquisa" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
