import React, { useState, useEffect }  from 'react';
import { TouchableOpacity, Text, ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';
import { arraysAsincronos, getData } from '../resources/functions';

const Calculadora = ({navigation, route}) => {

  const [arregloData, setArregloData] = useState(null);  
  const [arregloTotal, setArregloTotal] = useState(null);  
  const [temp, setTemp] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  //const [calorias, setCalorias] = useState(0)
  //const [proteinas, setProteinas] = useState(0)
  //const [carbohidratos, setCarbohidratos] = useState(0)
  //const [grasas, setGrasas] = useState(0)
  useEffect(() => {
    const obtenerDatos = async () => {
      setArregloData([...await getData("/calculadora/datos")]);
      setArregloTotal([...await getData("/comidas/simple")]); //[...var] genera una nueva instancia de memoria, se previene asi la duplicidad de llaves más abajo
      setIsLoading(false);
    };                                      // array.includes() puede ser otra solucion para este problema
    obtenerDatos();
  }, [route.params.cuenta]);

  useEffect(() => {
    const procesarDatos = async () => {
      if (arregloData && arregloTotal) {
        const resultado = await arraysAsincronos(arregloData, arregloTotal);
        setTemp(resultado);
      }
    };
    procesarDatos();
  }, [arregloData]);
  //console.log("cuenta:"+ route.params.cuenta)
  
  return (  
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{marginTop:'2.5%'}}></View>
        {arregloData && arregloData?.map((element) => (
          <TouchableOpacity key={element.nombre+element.gramos} style={styles.simpleButton} onPress={() => {
              navigation.navigate("Inicio")
          }}>
              <Text style = {{color: "white"}}>{element.nombre}: {element.gramos}</Text>
          </TouchableOpacity>   
          ))
        }  
      </ScrollView>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && temp && temp?.map((element)=>(
        <View key={element.nombre}>
          <Text style = {{color: "white", alignSelf:'center', fontSize: 20, fontWeight:'bold'}}>CALORIAS TOTALES: {element.calorias.toFixed(2)}</Text>
          <Text style = {{color: "white", alignSelf:'center', fontSize: 16}}>Carbohidratos totales: {element.carbohidratos.toFixed(2)}</Text>
          <Text style = {{color: "white", alignSelf:'center', fontSize: 16}}>Proteinas totales: {element.proteinas.toFixed(2)}</Text>
          <Text style = {{color: "white", alignSelf:'center', fontSize: 16}}>Grasas totales: {element.grasas.toFixed(2)}</Text>
        </View>
        ))
      }
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Agregar Alimento")
        }}
        style={styles.roundButton1}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>
      <Footer/> 
    </View>
  );
}

export default Calculadora