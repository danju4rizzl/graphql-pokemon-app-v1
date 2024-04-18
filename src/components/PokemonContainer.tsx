import React from 'react'
import { useQuery } from '@apollo/client'
import { Pokemon } from '../components/Pokemon'
import { GET_POKEMONS } from '../graphql/get-pokemons'

interface PokemonContainerProps {}

const PokemonContainer: React.FC<PokemonContainerProps> = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 5 }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const pokemons = data?.pokemons || []

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {pokemons &&
        pokemons.map((pokemon: any) => (
          // TODO: Deejay fix the types here REMOVE anyy"
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  )
}

export default PokemonContainer
