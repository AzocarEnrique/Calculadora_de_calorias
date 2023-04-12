import React from 'react';
import {StyleSheet, TouchableOpacity, Text, ScrollView, View} from 'react-native';
import Footer from '../components/Footer';

const Limite = ({navigation}) => {
  return (  
    <View style={{flex: 1}}>
      <ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate("Inicio")
          }}>
              <Text style = {{color: "white"}}>Inicio</Text>
          </TouchableOpacity>     
      </ScrollView>
      <Footer/> 
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

export default Limite