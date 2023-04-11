import React, { useState } from 'react';
import { TouchableOpacity, Button, TextInput, View, StyleSheet, Text, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { InitialApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './../../firebase-config';

const Login = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleLoginAccount = () =>{
      signInWithEmailAndPassword(auth, correo.correo, contraseña.contraseña).then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("Inicio", {'user': user.accessToken})
      }).catch(error =>{
        Alert.alert('Error', error.message);
      })
  }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Calculadora de Calorias
        </Text>
        <TextInput
          onChangeText={(correo) => setCorreo({ correo })}
          placeholder={'Correo'}
          style={styles.input}
        />
        <TextInput
          onChangeText={(contraseña) => setContraseña({ contraseña })}
          placeholder={'Contraseña'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{paddingBottom:10}}></View>
        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>{
            handleLoginAccount();
            console.log("se logueo");
        }}
        />
        <Text style={{paddingTop:20, color: '#FFFFFF', paddingBottom:10}}>
            Inicia sesión tambien con:
        </Text>
        <TouchableOpacity style={styles.google} onPress={() => {
            console.log("lol");
            navigation.navigate("Inicio")
        }}>
            <Text style={{fontSize:16, color:"white", alignItems: 'center'}}> <Entypo name="google-" size={24} color="white" /> Google </Text>
        </TouchableOpacity>
        <View style={{paddingBottom:10}}></View>
        <Button
          title={'Crear Cuenta'}
          style={styles.input}
          onPress={()=>{
            console.log("va a crear cuenta");
            navigation.navigate("Crear Cuenta")
        }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111418',
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
  text:{
    fontSize:28,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingBottom: 30
  },
  google: {
    width: 100,
    height: 44,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'red'
  }
});

export default Login