import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Keyboard } from 'react-native'

export default function LoginForm() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <TextInput 
          placeholder='Nombre de usuario'
          style={styles.input}
          autoCapitalize='none'
        />
        <TextInput
          placeholder='Contraseña' 
          style={styles.input}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Button title='Entrar' onPress={() => console.log('Entrando...')} />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: '100%'
  },
  
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '70%'
  }
});