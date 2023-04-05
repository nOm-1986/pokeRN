import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator screenOptions={() => ({
        headerTitleAlign: 'center'
    })}>
        <Stack.Screen name='Pokemon' component={PokemonScreen} />
        <Stack.Screen name='Pokedex' component={PokedexScreen} />
    </Stack.Navigator>
  );
}