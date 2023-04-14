import React from 'react';
import { ScrollView, View } from 'react-native';
import Comida from './Comida';
import { auth } from './../../firebase-config';
const Comidas = () => {

  console.log(auth.currentUser)
  if(auth.currentUser !== null){
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