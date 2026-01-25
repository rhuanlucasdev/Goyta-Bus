import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface CountdownTimerProps {
  initialTime: string // Ex: "23:59:59"
  colorClass: string
}

export const CountdownTimer = ({ initialTime, colorClass }: CountdownTimerProps) => {
  // Converte "HH:MM:SS" para segundos totais
  const timeToSeconds = (time: string) => {
    const [h, m, s] = time.split(':').map(Number)
    return h * 3600 + m * 60 + s
  }

  // formata segundos de volta para "HH:MM:SS"
  const secondsToTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600)
    const m = Math.floor((totalSeconds % 3600) / 60)
    const s = totalSeconds % 60
    return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(':')
  }

  const [seconds, setSeconds] = useState(timeToSeconds(initialTime))

  useEffect(() => {
    if (seconds <= 0) return

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  return (
    <div
      className={`absolute top-4 left-4 w-15 h-15 flex flex-col items-center justify-center rounded-t-[40px] rounded-b-[18px] backdrop-blur-sm font-bold text-[10px] transition-colors ${colorClass}`}
    >
      <Clock size={18} strokeWidth={1} className={seconds < 3600 ? 'animate-pulse' : ''} />
      <span className="pt-1 text-[12px]">{secondsToTime(seconds)}</span>
    </div>
  )
}
