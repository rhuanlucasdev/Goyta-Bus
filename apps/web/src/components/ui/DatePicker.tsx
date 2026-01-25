import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

interface CustomDatePickerProps {
  selectedDate: Date | undefined
  onSelect: (date: Date | undefined) => void
  onClose: () => void
}

export const CustomDatePicker = ({ selectedDate, onSelect, onClose }: CustomDatePickerProps) => {
  const [month, setMonth] = useState<Date>(selectedDate || new Date())

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-full mt-4 bg-white shadow-2xl rounded-[2.5rem] p-6 border border-gray-100 z-50 min-w-87.5"
    >
      <style>{`
        /* Esconde a navegação nativa para não duplicar setas */
        .rdp-nav { display: none; }
        
        /* Garante que o container do topo não tenha margens estranhas */
        .rdp-month_caption { margin: 0; padding: 0; }

        .rdp-day_button {
          width: 44px !important;
          height: 44px !important;
          border-radius: 9999px !important;
          margin: 2px !important;
        }
        .rdp-day_button:hover {
            background: #e2e8f0;
        }
        .rdp-selected .rdp-day_button {
          border: none;
          background-color: #1c398e;
          color: white !important;
        }
        .rdp-month_grid {
            border-radius: 8px;
            background: #f8fafc;
        }
      `}</style>

      <DayPicker
        mode="single"
        locale={ptBR}
        selected={selectedDate}
        onSelect={(date) => {
          onSelect(date)
          if (date) onClose()
        }}
        month={month}
        onMonthChange={setMonth}
        components={{
          MonthCaption: () => (
            <div className="flex items-center justify-between w-full mb-6 px-1">
              {/* Seta Esquerda */}
              <button
                type="button"
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1))}
                className="p-2 hover:bg-blue-900 hover:text-white rounded-full transition-all border border-slate-100 text-blue-900 cursor-pointer flex items-center justify-center"
              >
                <ChevronLeft size={20} strokeWidth={2.5} />
              </button>

              {/* Mês/Ano Centralizado */}
              <span className="text-blue-900 font-extrabold text-lg capitalize select-none">
                {format(month, 'MMMM yyyy', { locale: ptBR })}
              </span>

              {/* Seta Direita */}
              <button
                type="button"
                onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1))}
                className="p-2 hover:bg-blue-900 hover:text-white rounded-full transition-all border border-slate-100 text-blue-900 cursor-pointer flex items-center justify-center"
              >
                <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>
          ),
        }}
      />
    </div>
  )
}
