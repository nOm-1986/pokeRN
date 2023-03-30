import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function ModernoNavigation() {
  return (
      <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'favorite') {
                    iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                } else if (route.name === 'pokedex') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                } else if (route.name === 'account') {
                    iconName = focused ? 'ios-person' : 'ios-person';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: '#22C2AC',
            tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="favorite" component={Favorite} />
        <Tab.Screen name="pokedex" component={Pokedex} />
        <Tab.Screen name='account' component={Account}/>
    </Tab.Navigator>
  );
}