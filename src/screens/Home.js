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
      <ScrollView>
          <Button
            title={'Logout'}
            style={styles.input}
            onPress={()=>{
              auth.signOut().then(() => {
                console.log("se deslogueo");
              }).catch(error =>{
                Alert.alert('Error', error.message);
              });
            }}
          />
          <Comidas/>
          <TouchableOpacity
            onPress={() => {navigation.navigate("Nueva Comida")}}
            style={styles.roundButton1}>
            <Text style={styles.texto}>+</Text>
          </TouchableOpacity>
          <Footer/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  roundButton1: {
      marginTop: '84%',
      marginLeft: '75%',
      width: 75,
      height: 75,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'tomato',
      marginBottom:'10%'
  },
  texto: {
    fontSize: 35,
    color: "white"
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
});
export default Home