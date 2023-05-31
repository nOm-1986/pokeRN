import React, {useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import {getPokemonsApi} from '../api/pokemon';
export default function Pokedex() {
  
  useEffect(() => {
    //Para que se ejecute una funcion asincrona es necesario ejecutar una función auto-ejecutable.
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const respose = await getPokemonsApi();
      console.log(respose);
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