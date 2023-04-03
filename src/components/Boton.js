import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Boton() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <View>
      <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.roundButton1}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
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

export default Boton;