import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, Alert } from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './../../firebase-config';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const AgregarUsuario = async (db, user_id) =>{
  try {
    const Usuarios = collection(db, user_id);
    await Promise.all([
      addDoc(collection(Usuarios, 'comidas', 'Pera'), {
          calorias: 58,
          proteinas: 0.38,
          carbohidratos: 15.46,
          grasas: 0.12
      }),
      addDoc(collection(Usuarios, 'comidas', 'Tomate'), {
          calorias: 18,
          proteinas: 0.88,
          carbohidratos: 3.92,
          grasas: 0.2
      }),
      addDoc(collection(Usuarios, 'comidas', 'Manzana'), {
          calorias: 52,
          proteinas: 0.26,
          carbohidratos: 13.81,
          grasas: 0.17
      }),
      //addDoc(collection(Usuarios, 'calculadora', 'registro'), {
      //name: 'Legion of Honor',
      //    type: 'museum'
      //}),
    ]);
    console.log("Documento escrito con ID: ", Usuarios.id);
  } catch (e) {
    console.error("Error agregando el documento: ", e);
  }
} 

const SignUp = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = getFirestore(app);


    const  handleCreateAccount = () =>{
        createUserWithEmailAndPassword(auth, correo.correo, contraseña.contraseña).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            AgregarUsuario(db, user.uid)
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