import React from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';


const NuevaComida = ({ navigation }) => {
  return ( 
    <View style={{margin:20, alignItems:'center', paddingTop:"5%" }}>
      <View style={{flexDirection:"row",alignItems: 'center'}}>
        <Text style={styles.texto}> Nombre: </Text>
        <TextInput style={styles.inputTexto}
        placeholder="Nueva comida"
        placeholderTextColor="#fff" />
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <Text style={styles.texto}>
          Calorias:
        </Text>
        <TextInput style={styles.inputTexto}
          secureTextEntry={true}
          placeholder="Kcal"
          placeholderTextColor="#fff"
        />
      </View>
      <View style={{paddingTop: "20%"}}>
        <Text style={styles.texto}>
          Macro-Calorias:
        </Text>
      </View>
      
        <TextInput style={styles.inputTexto}
          secureTextEntry={true}
          placeholder="Proteina"
          placeholderTextColor="#fff"
        />
        <TextInput style={styles.inputTexto}
          secureTextEntry={true}
          placeholder="Carbohidratos"
          placeholderTextColor="#fff"
        />
        <TextInput style={styles.inputTexto}
          secureTextEntry={true}
          placeholder="Grasas"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.boton} onPress={() => {console.log("xd")}}><Text style={{fontSize:16}}> Send <Feather name="send" size={18} color="black" /></Text></TouchableOpacity>
    </View>

  );
};
const styles = StyleSheet.create({
  boton:{
    paddingTop: "1%",
    marginTop:10,
    width: "30%",
    height: "7%",
    borderRadius: 10,
    backgroundColor: 'skyblue',
    alignItems: "center",
    verticalAlign: "center"
  },
  texto: {
    fontSize: 20,
    color: "white",
    textAlign: 'center'
  },
  inputTexto: {
    borderWidth: 2,
    borderColor: "skyblue",
    margin: 20,
    color: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    width: '40%'
  }
});

export default NuevaComida