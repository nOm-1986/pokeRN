import React, {useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import {getPokemonsApi} from '../api/pokemon';
export default function Pokedex() {
  
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
    return
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