import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => {
            navigation.navigate("Perfil")
        }}>
            <Text>Presiona Aqui</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
});

export default Home