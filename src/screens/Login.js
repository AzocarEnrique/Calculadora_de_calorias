import React, { useState, useEffect } from 'react';
import {  Button, TextInput, View, Text, Alert, BackHandler } from 'react-native';
import { signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './../../firebase-config';
import { styles } from '../resources/styles';

const Login = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')
    useEffect(() => {
      const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        return true; 
      });
  
      return () => backHandler.remove(); 
    }, []);
    const handleLoginAccount = () =>{
      signInWithEmailAndPassword(auth, correo, contraseña).then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          navigation.navigate("Inicio")
      }).catch(error =>{
        Alert.alert('Error', error.message);
      })
  }
    return (
      <View style={styles.container}>
        <Text style={styles.textoLogin}>
            Calculadora de Calorias
        </Text>
        <TextInput
          onChangeText={(correo) => setCorreo(correo.replace(/\s/g, ''))}
          placeholder={'Correo'}
          style={styles.input}
        />
        <TextInput
          onChangeText={(contraseña) => setContraseña(contraseña.replace(/\s/g, ''))}
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
            console.log(correo, contraseña);
        }}
        />
        <Text style={{paddingTop:20, color: '#FFFFFF'}}>
          ¿No tienes cuenta?
        </Text>
        <View style={{paddingBottom:'1%'}}></View>
        <Button
          title={'Registrate'}
          style={styles.input}
          onPress={()=>{
            console.log("va a crear cuenta");
            navigation.navigate("Crear Cuenta")
        }}
        />
      </View>
    );
}

export default Login