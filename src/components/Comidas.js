import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import Comida from './Comida';
import { auth } from './../../firebase-config';
const Comidas = () => {

  const [userActivo, setUserActivo] = useState(false);
  useEffect(() => {
    const obtenerDatos = async () => {
      auth.onAuthStateChanged((user) =>{
        if(!user){
          setUserActivo(false)
        }
        else{
          setUserActivo(true)
        } 
      })
    };
    obtenerDatos();
  }, []);
  if(userActivo == true){
    return (
        <ScrollView>
          <View style = {{paddingTop: 10}}>
            <Comida/>
          </View>
        </ScrollView>    
    );
  }
  
}


export default Comidas