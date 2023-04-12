import React from 'react';
import {ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, View } from 'react-native';
import Comidas from '../components/Comidas';
import {getAuth} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import Footer from '../components/Footer';

const Home = ({ navigation }) => {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  

  auth.onAuthStateChanged((user) =>{
    if(!user){
      navigation.navigate("Iniciar Sesión")
    } 
  })

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
        <Text style={{color:'white', fontSize:26, fontWeight:'bold', paddingLeft:'23%', marginTop:7}}>Lista de alimentos</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
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
          <TouchableOpacity
            onPress={() => {navigation.navigate("Nueva Comida")}}
            style={styles.roundButton1}>
            <Text style={styles.texto}>+</Text>
          </TouchableOpacity>
      </ScrollView>
      <Footer/>
    </View>   
  );
}

const styles = StyleSheet.create({
  roundButton1: {
      marginTop: '90%',
      marginLeft: '78%',
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
  button: {
    marginTop:5,
    marginRight:5,
    backgroundColor: '#6D6D6C',
    borderColor:'#313833',
    padding: 10,
    borderRadius: 5,
    borderWidth:1,
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  }
});
export default Home