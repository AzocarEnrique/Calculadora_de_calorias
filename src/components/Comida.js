import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, PixelRatio } from 'react-native';
import { styles } from '../resources/styles';
import { getData } from '../resources/functions';
import { Octicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';



const Comida = () => {
  const [arregloData, setArregloData] = useState(null);
  const navigation = useNavigation()
  
  
  useEffect(() => {
    const obtenerDatos = async () => {
      setArregloData([...await getData("/comidas/simple")]); //[...var] genera una nueva instancia de memoria, se previene asi la duplicidad de llaves más abajo
    };                                      // array.includes() puede ser otra solucion para este problema
    obtenerDatos();
  }, [useRoute().params]);
  
  
  return (
    <View style={{ flex: 1 }}>
      {arregloData && arregloData.length > 0 ? (
      arregloData && arregloData?.map((element) => (
        <TouchableOpacity key={element.nombre} style={[styles.simpleButton, { flexDirection: 'row', justifyContent: 'space-between' }]} 
        onPress={() => {
            navigation.navigate("Editar Alimento", 
            {nombre: element.nombre,
             calorias: element.calorias,
             carbohidratos: element.carbohidratos,
             proteinas: element.proteinas,
             grasas: element.grasas})
          }}>
          <View style={{ paddingLeft: '2%', alignSelf:'flex-start' }}>
            <Text style={{ color: "white", fontSize: PixelRatio.getFontScale()*20 }}>Nombre: {element.nombre}</Text>
            <Text style={{ color: "white" }}>Calorias: {element.calorias}</Text>
          </View>
          <View style={{ alignItems: 'flex-end', paddingRight: '2%' }}>
            <Text style={{ color: "white" }}>Carbohidratos: {element.carbohidratos} <Octicons name="dot-fill" size={PixelRatio.getFontScale()*14} color="orange" /></Text>
            <Text style={{ color: "white" }}>Proteinas: {element.proteinas} <Octicons name="dot-fill" size={PixelRatio.getFontScale()*14} color="crimson" /></Text>
            <Text style={{ color: "white" }}>Grasas: {element.grasas} <Octicons name="dot-fill" size={PixelRatio.getFontScale()*14} color="yellow" /></Text>
          </View>
        </TouchableOpacity>
      ))
      ) : (<Text style={{ color: "white", fontSize: PixelRatio.getFontScale()*36, paddingTop:'25%', textAlign:'center' }}>Cargando...</Text>)
      }
    </View>
  );
};

export default Comida;