import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../resources/styles';
import { getData } from '../resources/functions';
import { Octicons } from '@expo/vector-icons'; 



const Comida = () => {
  const [arregloData, setArregloData] = useState(null);
  //const [arregloDataCol, setArregloDataCol] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getData();
      setArregloData(datos);
    };
    obtenerDatos();
  }, []);

  return (
    <View style={{flex:1}}>
      { arregloData && arregloData.map((element) => (
        <TouchableOpacity key={element.id} style={[styles.simpleButton, {flexDirection: 'row', justifyContent:'space-between'}]} onPress={() => console.log(element.nombre)}>
          <View style={{ paddingLeft: '10%', position:'relative', bottom:'2.5%' }}>
          <Text style={{ color: "white", fontSize: 20 }}>Nombre: {element.nombre}</Text>
          <Text style={{ color: "white" }}>Calorias: {element.calorias}</Text>
          </View>
          <View style={{ alignItems:'flex-end', paddingRight: '5%'}}>
          <Text style={{ color: "white" }}>Carbohidratos: {element.carbohidratos} <Octicons name="dot-fill" size={14} color="orange" /></Text>
          <Text style={{ color: "white" }}>Proteinas: {element.proteinas} <Octicons name="dot-fill" size={14} color="crimson" /></Text>
          <Text style={{ color: "white" }}>Grasas: {element.grasas} <Octicons name="dot-fill" size={14} color="yellow" /></Text>
          </View>
        </TouchableOpacity>
      ))
      }
    </View>
  );
};

export default Comida;