import { type Trip } from '../../services/types'
import { CountdownTimer } from './CountdownTimer'

interface TripCardProps {
  trip: Trip
  showBadge?: boolean //Prop para controlar exibicao
}

export const TripCard = ({ trip, showBadge = false }: TripCardProps) => {
  // Mapeamento de cores para o badge conforme a imagem
  const colorMap = {
    green: 'bg-green-200/75 text-green-900',
    yellow: 'bg-yellow-200/75 text-yellow-900',
    red: 'bg-red-200/75 text-red-900',
  }
  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full group">
      {/* Container da Imagem com Badge */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={trip.imageUrl}
          alt={trip.destination}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badge do Cronômetro */}
        {showBadge && trip.timer && (
          <CountdownTimer
            initialTime={trip.timer}
            colorClass={colorMap[trip.timerColor || 'green']}
          />
        )}
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-blue-900 font-bold text-xl mb-2">
          {trip.origin} - {trip.destination}
        </h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
          {trip.description}
        </p>

        <div className="mt-auto flex justify-between items-end">
          <div>
            <span className="text-gray-400 text-sm block mb-1">A partir de</span>
            <div className="flex items-baseline gap-1">
              <span className="text-blue-900 font-bold text-sm">R$</span>
              <span className="text-blue-900 font-black text-3xl">
                {trip.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          <button className="text-blue-700 font-bold text-base hover:underline cursor-pointer transition-all">
            Ver mais
          </button>
        </div>
      </div>
    </div>
  )
}
