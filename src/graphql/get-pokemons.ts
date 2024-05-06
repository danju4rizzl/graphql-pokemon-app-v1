// gql is used to create queries and mutations
import { gql } from '@apollo/client'

// GET_POKEMONS is a query that gets pokemon data from the pokemon api
export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      maxCP
      image
      classification
      fleeRate
      resistant
      types
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
    }
  }
`
