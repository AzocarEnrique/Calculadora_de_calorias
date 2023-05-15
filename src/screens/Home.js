import React from 'react';
import {ScrollView, Text, TouchableOpacity, Alert, View, PixelRatio } from 'react-native';
import Comidas from '../components/Comidas';
import { auth } from './../../firebase-config';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {

  auth.onAuthStateChanged((user) =>{
    if(!user){
      navigation.navigate("Iniciar Sesión")
    } 
  })
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View></View>
        <View style={{marginTop:PixelRatio.getFontScale()*7, paddingBottom:PixelRatio.getFontScale()*4, paddingLeft:PixelRatio.getFontScale()*50}}>
          <Text style={{color:'white', fontSize: PixelRatio.getFontScale()*26, fontWeight:'bold'}}>Lista de alimentos</Text>
          <Text style={{color:'white', fontSize: PixelRatio.getFontScale()*12, textAlign:'center'}}>(Información nutricional en 100g.)</Text>
        </View>
        <View style={{justifyContent:'center', marginRight:PixelRatio.getFontScale()*10}}>
          <TouchableOpacity style={styles.button} onPress={async () => {
              await AsyncStorage.removeItem('user');
              await AsyncStorage.removeItem('pass');
              auth.signOut().then(() => {
                console.log("se deslogueo");
              }).catch(error =>{
                Alert.alert('Error', error.message);
              });
            }}>
                <Text style = {{color: "white"}}>Logout</Text>
          </TouchableOpacity> 
        </View> 
      </View>
      <ScrollView>
          <Comidas/>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {navigation.navigate("Nueva Comida")}}
        style={styles.roundButton1}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>
      <Footer/>
    </View>   
  );
}

export default Home