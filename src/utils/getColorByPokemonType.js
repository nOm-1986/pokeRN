import { POKEMON_TYPE_COLORS } from './constants';

const getColorByPokemonType = (typea) => {
  return POKEMON_TYPE_COLORS[typea.toLowerCase()];
}

export { getColorByPokemonType };