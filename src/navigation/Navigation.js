import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../screens/Favorite';
import Account from '../screens/Account';
import Pokedex from '../screens/Pokedex';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
            name="Favoritos" 
            component={Favorite} 
            options={{tabBarLabel: "Favoritos", tabBarIcon: ({color, size}) => (
                    <Icon name='heart' color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen 
            name="Pokedex" 
            component={Pokedex} 
            options={{tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }}
        />
        <Tab.Screen 
            name='Account' 
            component={Account}
            options={{tabBarLabel: "Account", tabBarIcon: ({color, size}) => (
                <Icon name='user' color={color} size={size}/>
            )
            }}
            style={{ width: 100, height: 100, marginTop: 200 }}
        />
    </Tab.Navigator>
  );
}

function renderPokeball() {
    return (
        <Image
            source={require('../assets/pokeball.png')}
            style={{width: 75, height: 75, top: -17}}
        />
    )
}