import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Comidas from '../components/Comidas';

const Home = ({ navigation }) => {
  return (
      <View>
          <Comidas/>
          <TouchableOpacity
            onPress={() => {navigation.navigate("Nueva Comida")}}
            style={styles.roundButton1}>
            <Text style={styles.texto}>+</Text>
          </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  roundButton1: {
      marginTop: 455,
      marginLeft: 310,
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'tomato',
  },
  texto: {
    fontSize: 35,
    color: "white"
  },
});
export default Home