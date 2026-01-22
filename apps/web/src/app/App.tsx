import {useEffect, useState} from 'react'
import { Header } from '../components/layout/Header'
import { HeroSearch } from '../components/ui/HeroSearch'
import { TripCard } from '../components/ui/TripCard'
import { tripService } from '../services/api'
import type { Trip } from '../services/types'
import '../styles/global.css'

function App() {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    tripService.getPopularTrips().then((response) => {
      setTrips(response.data)
      setLoading(false)
    })
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* Componente de Layout */}
      <Header />
      <main>
        {/* Banner Azul e Barra de busca */}
        <HeroSearch />

        {/* Secao de listagem */}
        <section className="max-w-7xl mx-auto px-6 mt-24 mb-12">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl"></span>
            <h2 className="text-2xl font-bold text-slate-800">Populares</h2>
          </div>
          {loading ? (
            <div className="flex justify-center py-10">
              <p className="text-gray-500 animate-pulse">Carregando viagens...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {trips.map((trip) => (
                <TripCard key={trip.id} trip = {trip}/>
               ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
