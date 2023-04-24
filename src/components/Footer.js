import React, { useState } from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../resources/styles';

const Footer = () => {
  const navigation = useNavigation();
  const [i, setI] = useState(0);
  return (  
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.buttonFooter, {borderLeftWidth: 0}]} onPress={() => {
            setI(i+1)
            navigation.navigate("Inicio")
        }}>
            <Text style = {{color: "white"}}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => {
            setI(i+1)
            navigation.navigate("Calculadora", {cuenta: i})
        }}>
            <Text style = {{color: "white"}}>Calculadora</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.buttonFooter} onPress={() => {
            setI(i+1)
            navigation.navigate("Límite")
        }}>
            <Text style = {{color: "white"}}>Límite Calorico</Text>
        </TouchableOpacity>   
    </View>
  );
}

export default Footer