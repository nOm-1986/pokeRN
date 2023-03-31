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
      <Tab.Navigator  screenOptions = {({ route }) =>({
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: [
            {
                backgroundColor: 'blue',
                display: "flex",
                position: 'absolute', 
                bottom: 20,
                height: 80,
                borderRadius: 10,
                shadowColor:'#000',
                shadowOpacity: 0.06,
                marginHorizontal: 20
            },
            null
            ]
        })}
      >
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
            options={{tabBarLabel: "Mi cuenta", tabBarIcon: ({color, size}) => (
                <Icon name='user' color={color} size={size}/>
            )
            }}
            style={{ width: 100, height: 100, margin: 200 }}
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