export interface Trip {
  id: number
  destination: string
  origin: string
  description: string
  price: number
  imageUrl: string
}

//Formato padrao de resposta do PHP
export interface ApiResponse<T> {
  data: T
  status: string
}
