import { Search, MapPin, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { CustomDatePicker } from './DatePicker'
import { format } from 'date-fns'

export const HeroSearch = () => {
  const navigate = useNavigate()

  //Estados pra controlar os inputs
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [isPickerOpen, setIsPickerOpen] = useState(false)

  const handleSearch = () => {
    // Validamos se os campos basicos foram preenchidos
    if (!origin || !destination) {
      alert('Por favor, preencha origem e destino.')
      return
    }

    const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''
    // Criamos a query string, o URLSearchParams ajuda a formatar direito
    const params = new URLSearchParams({
      origin: origin,
      destination: destination,
      date: formattedDate,
    })

    // Redireciona para /pesquisa?origin=...&destination=...
    navigate(`/pesquisa?${params.toString()}`)
  }

  useEffect(() => {
    const handleOutsideClick = () => setIsPickerOpen(false)

    if (isPickerOpen) {
      window.addEventListener('click', handleOutsideClick)
    }

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [isPickerOpen])

  return (
    <section className="w-full flex flex-col items-center gap-6 pt-40">
      {/* 1. Barra de Busca (Topo) */}
      <div className="bg-white shadow-lg border border-gray-100 rounded-full px-4 py-3 flex flex-col md:flex-row items-center gap-2 w-[90%] max-w-5xl">
        {/* Origem */}
        <div className="flex flex-col flex-1 px-6 border-r border-gray-200">
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">Origem</label>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-600" />
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Buscar local"
              className="outline-none text-sm w-full font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Destino */}
        <div className="flex flex-col flex-1 px-6 border-r border-gray-200">
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">Destino</label>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-blue-600" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Buscar local"
              className="outline-none text-sm w-full font-medium text-gray-700"
            />
          </div>
        </div>

        {/* Data Customizada */}
        <div
          className="flex flex-col flex-1 px-6 relative cursor-pointer"
          onClick={(e) => {
            e.stopPropagation() // Evita problemas se houver cliques aninhados
            setIsPickerOpen(true) // Sempre força abrir ao clicar no campo
          }}
        >
          <label className="text-[10px] uppercase text-gray-400 font-bold mb-1">Ida</label>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-blue-600" />
            <span
              className={`text-sm font-medium ${selectedDate ? 'text-gray-700' : 'text-gray-400'}`}
            >
              {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '##/##/####'}
            </span>
          </div>

          {/* O Modal do Calendário */}
          {isPickerOpen && (
            <CustomDatePicker
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
              onClose={() => setIsPickerOpen(false)}
            />
          )}
        </div>

        {/* Botão Busca */}
        <button
          onClick={handleSearch}
          className="bg-[#0A1128] p-5 rounded-full text-white hover:bg-blue-900 transition-all shrink-0 cursor-pointer  "
        >
          <Search size={22} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  )
}
