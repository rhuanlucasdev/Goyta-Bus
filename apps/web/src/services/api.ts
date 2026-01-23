import type { Trip, ApiResponse } from './types'

// Mockup pra conseguir estilizar (ate api entregar)
const MOCK_TRIPS: Trip[] = [
  {
    id: 1,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },
  {
    id: 2,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },
  {
    id: 3,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },
  {
    id: 4,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },{
    id: 5,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },{
    id: 6,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },{
    id: 7,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },{
    id: 8,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description:
      'Cristo Redentor e Corcovado: Uma das 7 maravilhas do mundo moderno, com vistas panorâmicas.',
    price: 64.0,
    imageUrl: '../public/foto_card.jpg',
  },
]

export const tripService = {
  /**
   * Busca todas as viagens populares.
   * Quando o backend estiver pronto, vamo dar o retorno pelo fetch/axios
   */
  async getPopularTrips(): Promise<ApiResponse<Trip[]>> {
    // simulando latencia de 800ms pra testar loading states
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: MOCK_TRIPS,
          status: 'success',
        })
      }, 800)
    })
  },
}

/**
 * O Fetch vai ser assim (imagino eu)
 * async getAllReal(): Promise<ApiResponse<Trip[]>> {
 *  const response = await fetc(`${import.meta.env.API_URL}/trips.php`);
 *  return await response.json()
 * }
 */
