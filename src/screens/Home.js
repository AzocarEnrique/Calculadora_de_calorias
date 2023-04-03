import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Boton from '../components/Boton';
import Comidas from '../components/Comidas';

const Home = ({ navigation }) => {
  return (
      <View>
          <Comidas/>
          <Boton/>
      </View>
  );
}

export default Home