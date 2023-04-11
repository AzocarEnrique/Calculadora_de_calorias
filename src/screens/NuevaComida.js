import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {writeFile, readFile} from './../resources/functions'

const NuevaComida = ({ navigation }) => {
  const [nombre, setNombre] = useState('')
  const [calorias, setCalorias] = useState(0)
  const [proteinas, setProteinas] = useState(0)
  const [carbohidratos, setCarbohidratos] = useState(0)
  const [grasas, setGrasas] = useState(0)

  const guardarComida = () =>{
    if(!nombre || !calorias || !proteinas || !carbohidratos || !grasas){
      Alert.alert('Datos vacios', 'Faltan casillas por rellenar', [
        {text: 'OK'},
      ]);
    }
    if(typeof calorias != 'number' || typeof proteinas != 'number' || typeof carbohidratos != 'number' || typeof grasas != 'number'){
      Alert.alert('Datos erroneos', 'Existen casillas con datos que no corresponden', [
        {text: 'OK'},
      ]);
    }
    else{
      const comidaJSON = {
      "nombre": nombre,
      "calorias": calorias,
      "carbohidratos": carbohidratos,
      "proteinas": proteinas,
      "grasas": grasas
      }
      const data = JSON.stringify(comidaJSON)

      writeFile('calorias.json', data)
      navigation.navigate("Inicio")
      }
    }

  return ( 
    <View style={{margin:20, alignItems:'center', paddingTop:"5%" }}>
      <View style={{paddingBottom:"5%"}}>
        <Text style={styles.titulo}>
          Detalles Generales:
        </Text>
      </View>
      <View style={{flexDirection:"row",alignItems: 'center'}}>
        <Text style={styles.texto}> Nombre: </Text>
        <TextInput style={styles.inputTexto}
        onChangeText={(ev)=> {setNombre(ev)}}
        placeholder="Nueva comida"
        placeholderTextColor="#fff" />
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <Text style={styles.texto}> Calorias: </Text>
        <TextInput style={styles.inputTexto}
          keyboardType='numeric'
          onChangeText={(ev)=> {
            if(!isNaN(ev)){
              setCalorias(parseInt(ev))
            };
            }}
          placeholder="Kcal"
          placeholderTextColor="#fff"
          />
      </View>
      <View style={{paddingTop: "10%", paddingBottom: "5%"}}>
        <Text style={styles.titulo}>
          Macro-Calorias:
        </Text>
      </View>
      <TextInput style={styles.inputTexto}    
        keyboardType='numeric'
        onChangeText={(ev)=> {
          if(!isNaN(ev)){
          setProteinas(parseInt(ev))
        };
        }}        
        placeholder="Gramos de Proteinas"
        placeholderTextColor="#fff"
      />
      <TextInput style={styles.inputTexto}
        keyboardType='numeric'
        onChangeText={(ev)=> {
          if(!isNaN(ev)){
          setCarbohidratos(parseInt(ev))
        };
        }}
        placeholder="Gramos de Carbohidratos"
        placeholderTextColor="#fff"
      />
      <TextInput style={styles.inputTexto}
        keyboardType='numeric'
        onChangeText={(ev)=> {
          if(!isNaN(ev)){
          setGrasas(parseInt(ev))
        };
        }}
        placeholder="Gramos de Grasas"
        placeholderTextColor="#fff"
      />
      <View style={{paddingTop: "7%"}}>
      </View>
      <TouchableOpacity style={styles.boton} onPress={() => {guardarComida()}}>
        <Text style={{fontSize:16, color:"white"}}> Guardar <Feather name="save" size={18} color="white" /></Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  boton:{
    paddingTop: "3%",
    width: "35%",
    height: "8%",
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
  titulo: {
    fontSize: 26,
    color: "white",
    textAlign: 'center'
  },
  inputTexto: {
    borderWidth: 2,
    borderColor: "skyblue",
    margin: 15,
    color: "#fff",
    borderRadius: 10,
    paddingLeft: 10,
    width: '50%'
  }
});

export default NuevaComida