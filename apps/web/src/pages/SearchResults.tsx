import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { TripCard } from '../components/ui/TripCard'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { type Trip } from '../services/types'
import { tripService } from '../services/api'

export const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(true)

  // Pegando os valores da URL
  const origin = searchParams.get('origin') || ''
  const destination = searchParams.get('destination') || ''
  const date = searchParams.get('date') || ''

  // Formatar a data pra ficar bom pra BR
  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const [year, month, day] = dateStr.split('-')
    return `${day}/${month}/${year}`
  }

  useEffect(() => {
    setLoading(true)
    // Chama o servico unificado
    tripService.searchTrips(origin, destination, date).then((response) => {
      setTrips(response.data)
      setLoading(false)
    })
  }, [origin, destination, date])

  if (loading)
    return <div className="p-20 text-center animate-pulse">Buscando as melhores rotas...</div>

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-gray-500 mt-2">
          Exibindo viagens de <span className="font-bold text-blue-600">{origin}</span> para{' '}
          <span className="font-bold text-blue-600">{destination}</span>
          {/* Lógica Condicional: Só renderiza se 'date' não for vazio */}
          {date && (
            <>
              {' '}
              com partida em <span className="font-bold text-blue-600">{formatDate(date)}</span>
            </>
          )}
        </p>
        <h1 className="text-2xl font-bold mb-8 text-blue-900">
          {trips.length} resultados encontrados.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
