import React, { useState } from 'react';
import { TouchableOpacity, Button, TextInput, View, Text, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './../../firebase-config';
import { styles } from '../resources/styles';

const Login = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')

    const handleLoginAccount = () =>{
      signInWithEmailAndPassword(auth, correo.correo, contraseña.contraseña).then((userCredential)=>{
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

export default Login