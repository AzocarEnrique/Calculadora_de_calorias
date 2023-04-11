import React from 'react';
import {StyleSheet, View } from 'react-native';
import Comida from './Comida';
import { readFile } from '../resources/functions';
const Comidas = () => {
  const lista = readFile('calorias.json');
  console.log(lista)
  return (
      <View style = {{paddingTop: 10}}>
          <Comida {...lista}/>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#313338',
    padding: 10,
  }
});

export default Comidas