export interface PokemonData {
  pokemon: {
    name: string
    maxHP: number
    maxCP: number
    image: string
    attacks: {
      special: {
        name: string
        damage: number
      }[]
    }
  }
}
