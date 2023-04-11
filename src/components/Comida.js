import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const Comida = (lista) => {
  //console.log(lista)
  return (  
    <View>
        <TouchableOpacity style={styles.button} onPress={() => {
            console.log("descripcion comida")
        }}>
            <Text style = {{color: "white"}}>Comida</Text>
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

export default Comida