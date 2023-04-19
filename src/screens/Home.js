import React from 'react';
import {ScrollView, Text, TouchableOpacity, Alert, View } from 'react-native';
import Comidas from '../components/Comidas';
import { auth } from './../../firebase-config';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';


const Home = ({ navigation, route }) => {

  auth.onAuthStateChanged((user) =>{
    if(!user){
      navigation.navigate("Iniciar Sesión")
    } 
  })
  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <View style={{paddingLeft:'22%', marginTop:7, paddingBottom:4}}>
          <Text style={{color:'white', fontSize:26, fontWeight:'bold'}}>Lista de alimentos</Text>
          <Text style={{color:'white', fontSize:12, textAlign:'center'}}>(Información nutricional en 100g.)</Text>
        </View>
        
        <TouchableOpacity style={[styles.button, {marginBottom:4, marginTop:4}]} onPress={() => {
              auth.signOut().then(() => {
                console.log("se deslogueo");
              }).catch(error =>{
                Alert.alert('Error', error.message);
              });
          }}>
              <Text style = {{color: "white"}}>Logout</Text>
        </TouchableOpacity>  
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