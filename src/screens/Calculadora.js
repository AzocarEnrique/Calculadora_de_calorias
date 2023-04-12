import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const Calculadora = ({navigation}) => {
  return (  
    <View>
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Inicio")
        }}>
            <Text style = {{color: "white"}}>Inicio</Text>
        </TouchableOpacity>      
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

export default Calculadora