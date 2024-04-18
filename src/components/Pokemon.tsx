import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { PokemonData } from '@/lib/types'

export function Pokemon({ pokemon }: PokemonData) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{pokemon.name}</CardTitle>
        <CardDescription>
          <div className="pokemon__meta">
            <span>{pokemon.maxHP}</span>
            <span>{pokemon.maxCP}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src={pokemon.image} alt={pokemon.name} />
      </CardContent>
      <CardFooter>
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <Badge variant="secondary" key={attack.name + pokemon.name}>
            {attack.name}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
