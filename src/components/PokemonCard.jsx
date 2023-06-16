import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { getColorByPokemonType } from '../utils/getColorByPokemonType';

const PokemonCard = (props) => {
  
    const { pokemon } = props;

    const goToPokemon = () => {
        console.log(`Vamos al pokemons: ${pokemon.name}`)
    };

    const pokemonColor =  getColorByPokemonType(pokemon.type);

    const bgStyle = { backgroundColor: pokemonColor, ...Style.bgStyles }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={Style.card}>
            <View style={Style.spacing}>
                <View style={bgStyle}>
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
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position:'absolute',
        right:10,
        top: 10,
        color: '#fff',
        fontSize: 11
    },
    name: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
        textTransform: 'capitalize'
    },
    image: {
        position: "absolute",
        bottom: 7,
        right: 5,
        width: 90,
        height: 90
    },
    
});


export { PokemonCard };