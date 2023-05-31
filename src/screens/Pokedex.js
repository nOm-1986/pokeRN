import React, {useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import {getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
export default function Pokedex() {
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    //Para que se ejecute una funcion asincrona es necesario ejecutar una función auto-ejecutable.
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const resposeApi = await getPokemonsApi();
      //Obtener información para cada uno de los pokemons utilizando un for asincrono.
      const pokemonsArray = [];

      for await(const pokemon of resposeApi.result){
        
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen: pokemonDetails.sprites.other['official-artwork']
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{}</Text>
    </SafeAreaView>
  )
}