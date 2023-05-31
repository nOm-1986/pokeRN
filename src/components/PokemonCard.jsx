import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const PokemonCard = (props) => {
  
    const { pokemon } = props;

    const goToPokemon = () => {
        console.log(`Vamos al pokemons: ${pokemon.name}`)
    };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={Style.PokemonCard}>
            <View style={Style.spacing}>
                <View style={Style.bgStyle}>
                    <Text style={Style.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={Style.name} >{pokemon.name}</Text>
                    <Image source={{uri: pokemon.image}} style={Style.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const Style = StyleSheet.create({
    PokemonCard: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyle: {
        backgroundColor: "grey"
    },
    name: {
        fontWeight: 'bold',
        color: "#fff"
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    },
    number: {
        position:'absolute',
        right:10,
        top: 10,
        color: '#fff',
        fontSize: 12
    }
});


export { PokemonCard };