export interface Trip {
  id: number
  destination: string
  origin: string
  description: string
  price: number
  imageUrl: string
  timer?: string //vai vir tipo: "23:59:59"
  timerColor?: 'green' | 'yellow' | 'red'
  date: string // "2026-01-24"
  popular?: boolean
}

//Formato padrao de resposta do PHP
export interface ApiResponse<T> {
  data: T
  status: string
}
