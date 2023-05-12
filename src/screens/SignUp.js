import React, { useState } from 'react';
import { Button, TextInput, View,  Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from './../../firebase-config';
import { styles } from '../resources/styles';
import { AgregarUsuario} from '../resources/functions';

const SignUp = ({ navigation }) => {
    const [correo, setCorreo] = useState('')
    const [contraseña, setContraseña] = useState('')

    const handleCreateAccount = (correo, contraseña) => {
        createUserWithEmailAndPassword(auth, correo, contraseña).then(async (userCredential) => {
            const user = userCredential.user;
            await AgregarUsuario(db, user.uid)
            navigation.navigate("Inicio",  {contador: -1})
        }).catch(error => {
            Alert.alert('Error', error.message);
        })
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textoLogin}>
            Crear cuenta
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
          title={'Crear Cuenta'}
          style={styles.input}
          onPress={()=>{
            handleCreateAccount(correo, contraseña);
            console.log("se registro");      
        }}
        />
      </View>
    );
}


export default SignUp