import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import { PokemonCard } from './PokemonCard'
import { PokemonData } from '@/lib/types'
import Feedback from './Feedback'

/*
 * This component is responsible for fetching the pokemons and displaying them in a responsive grid
 */
const PokemonContainer = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 9 }
  })

  const pokemons = (data?.pokemons as PokemonData[]) || []

  return (
    <div className="container py-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-200 text-center">
        🎮 GraphQL Demo
      </h1>
      <Feedback loading={loading} error={error} />
      <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 ">
        {pokemons.length &&
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  )
}

export default PokemonContainer
