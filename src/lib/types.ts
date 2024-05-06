export interface PokemonData {
  id: string
  name: string
  image: string
  number: string
  maxCP: number
  classification: string
  fleeRate: number
  attacks: {
    fast: [
      {
        name: string
      }
    ]
    special: [
      {
        name: string
      }
    ]
  }
}
