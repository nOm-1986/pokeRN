import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator   screenOptions = {({ route }) =>({
            tabBarActiveTintColor: '#FF5349',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
            tabBarStyle: [
            {
                backgroundColor: 'white',
                display: "flex",
                position: 'absolute', 
                bottom: 10,
                height: 60,
                borderRadius: 10,
                shadowColor:'#000',
                shadowOpacity: 0.06,
                marginHorizontal: 10,
            },
            null
            ]
        })}
    >
        <Tab.Screen 
            name="Favoritos t" 
            component={ FavoriteNavigation }
            options={{ tabBarLabel: "Favoritos", tabBarIcon: ({color, size}) => (
                    <Icon name='heart' color={color} size={size}/>
                )
            }}
        />
        <Tab.Screen 
            name="Pokedex t" 
            component={ PokedexNavigation } 
            options={{tabBarLabel: "",
                tabBarIcon: () => renderPokeball()
            }}
        />
        <Tab.Screen 
            name='Account t' 
            component={ AccountNavigation }
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
            style={{width: 75, height: 75, top: -25}}
        />
    )
}