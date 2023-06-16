import React, {useState, useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import { PokemonList } from '../components/PokemonList';


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

      for await (const pokemon of resposeApi.results){
        
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);

    } catch (error) {
      throw error;
    }
  }


  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingBottom: Platform.OS === "android" ? 80 : 0,
  },
});