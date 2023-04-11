import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Alert } from 'react-native';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './../../firebase-config';

const SignUp = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    const handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth, correo.correo, contraseña.contraseña).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            navigation.navigate("Inicio")  
        }).catch(error =>{
            Alert.alert('Error', error.message);
        })
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            Crear cuenta
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
          title={'Crear Cuenta'}
          style={styles.input}
          onPress={()=>{
            console.log(typeof correo, correo, typeof contraseña, contraseña)
            handleCreateAccount()
            console.log("se registro");      
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
    backgroundColor: 'orange'
  }
});

export default SignUp