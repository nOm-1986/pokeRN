import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/Favorite';

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator screenOptions={ () =>({
        headerTitleAlign: 'center'
    })} >
        <Stack.Screen 
          name='FavoritoFavorites' 
          component={FavoriteScreen} 
          options={{ title: "Favoritos" }}
        />
    </Stack.Navigator>
  )
}