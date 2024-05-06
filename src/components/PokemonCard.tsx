'use client'

import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { PokemonData } from '@/lib/types'
import { Badge } from './ui/badge'

type Props = {
  pokemon: PokemonData
}

/*
 * Pokemon card component
 */
export function PokemonCard({ pokemon }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-slate-900  border-white/[0.2]  w-auto sm:w-[25rem] h-auto rounded-xl p-6 border transition-all">
        <div className="flex justify-between">
          <CardItem
            translateZ="55"
            className="text-3xl font-bold mb-4 text-neutral-100"
          >
            {pokemon.name}
          </CardItem>
          <CardItem
            translateZ="55"
            className="text-xl text-neutral-100 font-mono"
          >
            #{pokemon.number}
          </CardItem>
        </div>
        <CardItem translateZ="80" className="w-full">
          <img
            src={pokemon.image}
            height="500"
            width="500"
            className="h-96 w-full object-fill rounded-xl group-hover:shadow-xl shadow-xl"
            alt={pokemon.name}
          />
        </CardItem>
        <div className=" my-5 space-y-3">
          <CardItem translateZ={20}>
            <p className="text-neutral-400">Fast Attacks</p>
            {pokemon.attacks.fast.map(({ name }) => (
              <Badge variant="secondary" className="mx-0.5">
                {name}
              </Badge>
            ))}
          </CardItem>
          <CardItem translateZ={20}>
            <p className="text-neutral-400">Special Attacks</p>
            {pokemon.attacks.special.map(({ name }) => (
              <Badge variant="secondary" className="mx-0.5 my-1">
                {name}
              </Badge>
            ))}
          </CardItem>
        </div>
        <div className="text-neutral-200 my-5 text-xl flex justify-between">
          <CardItem translateZ={50}>🔥 {pokemon.maxCP}</CardItem>
          <CardItem translateZ={50}>🌀 {pokemon.classification}</CardItem>
          <CardItem translateZ={50}>🔰 {pokemon.fleeRate}</CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
