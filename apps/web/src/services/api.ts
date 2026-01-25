import type { Trip, ApiResponse } from './types'

// Mockup pra conseguir estilizar (ate api entregar)
const MOCK_TRIPS: Trip[] = [
  // --- 8 POPULARES (Apenas flag popular, sem timer) ---
  {
    id: 1,
    origin: 'São Paulo',
    destination: 'Rio de Janeiro',
    description: 'Visite o Cristo Redentor e as praias mais famosas do Brasil.',
    price: 64.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    popular: true,
  },
  {
    id: 2,
    origin: 'Rio de Janeiro',
    destination: 'Búzios',
    description: 'A charmosa Orla Bardot e praias de águas cristalinas.',
    price: 45.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-25',
    popular: true,
  },
  {
    id: 3,
    origin: 'Belo Horizonte',
    destination: 'Ouro Preto',
    description: 'História, arte barroca e ladeiras inesquecíveis.',
    price: 35.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    popular: true,
  },
  {
    id: 4,
    origin: 'São Paulo',
    destination: 'Santos',
    description: 'O maior jardim de orla do mundo e o Museu do Café.',
    price: 29.9,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-26',
    popular: true,
  },
  {
    id: 5,
    origin: 'Porto Alegre',
    destination: 'Gramado',
    description: 'Chocolate artesanal, clima serrano e arquitetura europeia.',
    price: 75.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-28',
    popular: true,
  },
  {
    id: 6,
    origin: 'Salvador',
    destination: 'Porto Seguro',
    description: 'Berço do Brasil com festas e praias históricas.',
    price: 120.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-27',
    popular: true,
  },
  {
    id: 7,
    origin: 'Fortaleza',
    destination: 'Jericoacoara',
    description: 'Dunas, lagoas e o pôr do sol na Pedra Furada.',
    price: 150.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-30',
    popular: true,
  },
  {
    id: 8,
    origin: 'Manaus',
    destination: 'Presidente Figueiredo',
    description: 'Cachoeiras e grutas no coração da selva amazônica.',
    price: 95.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    popular: true,
  },

  // --- 8 OFERTAS (Com timer, sem flag popular) ---
  {
    id: 9,
    origin: 'Curitiba',
    destination: 'Florianópolis',
    description: 'Aproveite a Ilha da Magia com desconto exclusivo.',
    price: 89.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '02:15:00',
    timerColor: 'red',
  },
  {
    id: 10,
    origin: 'São Paulo',
    destination: 'Ubatuba',
    description: 'Oferta relâmpago para o litoral norte paulista.',
    price: 55.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '12:40:10',
    timerColor: 'yellow',
  },
  {
    id: 11,
    origin: 'Brasília',
    destination: 'Goiânia',
    description: 'Passagens baratas para o final de semana.',
    price: 40.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '05:00:00',
    timerColor: 'yellow',
  },
  {
    id: 12,
    origin: 'Recife',
    destination: 'Porto de Galinhas',
    description: 'Relaxe nas piscinas naturais com preço reduzido.',
    price: 50.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '48:00:00',
    timerColor: 'green',
  },
  {
    id: 13,
    origin: 'Rio de Janeiro',
    destination: 'Angra dos Reis',
    description: 'Últimas vagas para o passeio de lancha em Angra.',
    price: 70.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '00:45:30',
    timerColor: 'red',
  },
  {
    id: 14,
    origin: 'Cuiabá',
    destination: 'Chapada dos Guimarães',
    description: 'Eco-turismo com desconto por tempo limitado.',
    price: 38.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '10:30:00',
    timerColor: 'green',
  },
  {
    id: 15,
    origin: 'Natal',
    destination: 'Pipa',
    description: 'Sol, golfinhos e economia na sua viagem.',
    price: 42.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '03:00:00',
    timerColor: 'red',
  },
  {
    id: 16,
    origin: 'Vitória',
    destination: 'Guarapari',
    description: 'As melhores praias capixabas em oferta.',
    price: 32.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
    timer: '08:15:00',
    timerColor: 'yellow',
  },

  // --- 26 VIAGENS GERAIS (Simulação de banco de dados cheio) ---
  {
    id: 17,
    origin: 'São Paulo',
    destination: 'Campos do Jordão',
    description: 'O charme da montanha.',
    price: 48.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 18,
    origin: 'São Paulo',
    destination: 'Paraty',
    description: 'História e mar.',
    price: 68.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 19,
    origin: 'Campinas',
    destination: 'Holambra',
    description: 'Cidade das flores.',
    price: 25.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 20,
    origin: 'Maceió',
    destination: 'Maragogi',
    description: 'Caribe brasileiro.',
    price: 110.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 21,
    origin: 'João Pessoa',
    destination: 'Campina Grande',
    description: 'Maior São João do mundo.',
    price: 30.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 22,
    origin: 'Aracaju',
    destination: 'Canindé',
    description: 'Cânions do São Francisco.',
    price: 90.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 23,
    origin: 'Belém',
    destination: 'Ilha de Marajó',
    description: 'Natureza rústica.',
    price: 130.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 24,
    origin: 'São Luís',
    destination: 'Barreirinhas',
    description: 'Lençóis Maranhenses.',
    price: 180.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 25,
    origin: 'Campo Grande',
    destination: 'Bonito',
    description: 'Mergulho em rios translúcidos.',
    price: 250.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 26,
    origin: 'Teresina',
    destination: 'Parnaíba',
    description: 'Delta do Parnaíba.',
    price: 85.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 27,
    origin: 'Palmas',
    destination: 'Jalapão',
    description: 'Fervedouros e dunas.',
    price: 300.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 28,
    origin: 'Londrina',
    destination: 'Foz do Iguaçu',
    description: 'Cataratas do Iguaçu.',
    price: 95.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 29,
    origin: 'São Paulo',
    destination: 'Ilhabela',
    description: 'Vela e praias.',
    price: 60.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 30,
    origin: 'Rio de Janeiro',
    destination: 'Petrópolis',
    description: 'Cidade Imperial.',
    price: 40.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 31,
    origin: 'Belo Horizonte',
    destination: 'Diamantina',
    description: 'História e música.',
    price: 55.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 32,
    origin: 'Cabo Frio',
    destination: 'Arraial do Cabo',
    description: 'Caribe Fluminense.',
    price: 20.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 33,
    origin: 'São Paulo',
    destination: 'Águas de Lindóia',
    description: 'Circuito das águas.',
    price: 35.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 34,
    origin: 'Florianópolis',
    destination: 'Bombinhas',
    description: 'Mergulho ecológico.',
    price: 45.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 35,
    origin: 'Porto Alegre',
    destination: 'Canela',
    description: 'Catedral de pedra.',
    price: 70.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 36,
    origin: 'Salvador',
    destination: 'Morro de São Paulo',
    description: 'Paraíso sem carros.',
    price: 110.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 37,
    origin: 'Recife',
    destination: 'Olinda',
    description: 'Carnaval e história.',
    price: 15.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 38,
    origin: 'João Pessoa',
    destination: 'Ponta do Seixas',
    description: 'Extremo oriental.',
    price: 25.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 39,
    origin: 'Natal',
    destination: 'Genipabu',
    description: 'Emoção nas dunas.',
    price: 50.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 40,
    origin: 'Fortaleza',
    destination: 'Canoa Quebrada',
    description: 'Símbolo da lua e estrela.',
    price: 65.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 41,
    origin: 'São José dos Campos',
    destination: 'São Francisco Xavier',
    description: 'Refúgio na serra.',
    price: 45.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
  {
    id: 42,
    origin: 'Uberlândia',
    destination: 'Caldas Novas',
    description: 'Águas termais.',
    price: 80.0,
    imageUrl: '/foto_card.jpg',
    date: '2026-01-24',
  },
]

export const tripService = {
  /**
   * Simular a busca filtrada
   */
  async searchTrips(
    origin?: string,
    destination?: string,
    date?: string
  ): Promise<ApiResponse<Trip[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = MOCK_TRIPS.filter((trip) => {
          const searchOrigin = (origin ?? '').toLowerCase()
          const searchDest = (destination ?? '').toLowerCase()

          const matchOrigin = trip.origin.toLowerCase().includes(searchOrigin)
          const matchDest = trip.destination.toLowerCase().includes(searchDest)

          // Filtro de Data: Se o usuário não enviou data, ignoramos o filtro (retorna true)
          // Se enviou, comparamos a string da data
          const matchDate = date ? trip.date === date : true

          return matchOrigin && matchDest && matchDate
        })

        resolve({ data: filtered, status: 'success' })
      }, 600)
    })
  },

  /**
   * Filtro para a pagina de ofertas, filtra apenas as viagens que tem o timer
   */
  async getOffers(): Promise<ApiResponse<Trip[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // FIltra so as viagens com timer
        const offers = MOCK_TRIPS.filter((trip) => trip.timer !== undefined)

        resolve({
          data: offers,
          status: 'success',
        })
      }, 800)
    })
  },

  /**
   * Retorna as viagens populares (apenas as que NÃO possuem timer para não repetir as ofertas)
   */
  async getPopularTrips(): Promise<ApiResponse<Trip[]>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filtra pelo campo popular do JSON
        const popular = MOCK_TRIPS.filter((trip) => trip.popular === true)
        resolve({ data: popular, status: 'success' })
      }, 500)
    })
  },
}

/**
 * O Fetch vai ser assim (imagino eu)
 * async getAllReal(): Promise<ApiResponse<Trip[]>> {
 * const response = await fetc(`${import.meta.env.API_URL}/trips.php`);
 * return await response.json()
 * }
 */
