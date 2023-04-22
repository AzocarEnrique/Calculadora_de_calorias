import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../resources/styles';

const Footer = () => {
  const navigation = useNavigation();
  return (  
    <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={[styles.buttonFooter, {borderLeftWidth: 0}]} onPress={() => {
            navigation.navigate("Inicio")
        }}>
            <Text style = {{color: "white"}}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFooter} onPress={() => {
            navigation.navigate("Calculadora", {cuenta: -1})
        }}>
            <Text style = {{color: "white"}}>Calculadora</Text>
        </TouchableOpacity>      
        <TouchableOpacity style={styles.buttonFooter} onPress={() => {
            navigation.navigate("Límite")
        }}>
            <Text style = {{color: "white"}}>Límite Calorico</Text>
        </TouchableOpacity>   
    </View>
  );
}

export default Footer