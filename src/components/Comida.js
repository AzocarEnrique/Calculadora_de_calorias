import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from '../resources/styles';
import { getData } from '../resources/functions';


const Comida = () => {
  const [arregloData, setArregloData] = useState(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      const datos = await getData();
      setArregloData(datos[0]);
    };

    obtenerDatos();
  }, []);
  console.log(arregloData)
  return (
    <View>
      <TouchableOpacity style={styles.simpleButton} onPress={() => console.log("a")}>
        <Text style={{ color: "white" }}>Calorias: {arregloData?.calorias}</Text>
        <Text style={{ color: "white" }}>Carbohidratos: {arregloData?.carbohidratos}</Text>
        <Text style={{ color: "white" }}>Proteinas: {arregloData?.proteinas}</Text>
        <Text style={{ color: "white" }}>Grasas: {arregloData?.grasas}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comida;