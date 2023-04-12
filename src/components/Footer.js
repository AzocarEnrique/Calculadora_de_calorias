import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (  
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.button, {borderLeftWidth: 0}]} onPress={() => {
            navigation.navigate("Inicio")
        }}>
            <Text style = {{color: "white"}}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Calculadora")
        }}>
            <Text style = {{color: "white"}}>Calculadora</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Límite")
        }}>
            <Text style = {{color: "white"}}>Límite Calorico</Text>
        </TouchableOpacity>   
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '33.34%',
    backgroundColor: '#313338',
    padding: 10,
    borderLeftColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  }
});

export default Footer