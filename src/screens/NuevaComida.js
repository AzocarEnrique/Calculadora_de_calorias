import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../resources/styles';
import { guardarComida } from '../resources/functions';

const NuevaComida = ({ navigation }) => {
  const [nombre, setNombre] = useState('')
  const [calorias, setCalorias] = useState(0)
  const [proteinas, setProteinas] = useState(0)
  const [carbohidratos, setCarbohidratos] = useState(0)
  const [grasas, setGrasas] = useState(0)

  return ( 
    <View style={{margin:20, alignItems:'center', paddingTop:"5%" }}>
      <View style={{paddingBottom:"5%"}}>
        <Text style={styles.tituloComida}>
          Detalles Generales:
        </Text>
      </View>
      <View style={{flexDirection:"row",alignItems: 'center'}}>
        <Text style={styles.textoComida}> Nombre: </Text>
        <TextInput style={styles.inputTexto}
        onChangeText={(ev)=> {setNombre(ev)}}
        placeholder="Nueva comida"
        placeholderTextColor="#fff" />
      </View>
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <Text style={styles.textoComida}> Calorias: </Text>
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
        <Text style={styles.tituloComida}>
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
      <TouchableOpacity style={styles.botonComida} onPress={() => {
        guardarComida(nombre, calorias, proteinas, carbohidratos, grasas);
        navigation.navigate("Inicio");
        }}>
        <Text style={{fontSize:16, color:"white"}}> Guardar <Feather name="save" size={18} color="white" /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default NuevaComida