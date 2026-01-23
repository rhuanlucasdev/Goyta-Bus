import type { Trip } from '../../services/types'
import { useEffect, useState } from 'react'
import { TripCard } from './TripCard'
import { tripService } from '../../services/api'

interface listagemProps {
    title: string
}

export const Listagem:React.FC<listagemProps> = ({title}) => {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    tripService.getPopularTrips().then((response) => {
      setTrips(response.data)
      setLoading(false)
    })
  }, [])
  return (
    <section className="max-w-7xl mx-auto px-6 mt-24 mb-12">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl"></span>
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
      </div>
      {loading ? (
        <div className="flex justify-center py-10">
          <p className="text-gray-500 animate-pulse">Carregando viagens...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </section>
  )
}
