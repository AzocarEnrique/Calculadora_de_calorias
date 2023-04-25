import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, ScrollView, View, PixelRatio  } from 'react-native';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';
import { arraysAsincronos, getData, sumArrays, delData } from '../resources/functions';
import { Entypo } from '@expo/vector-icons';

const Calculadora = ({ navigation, route }) => {

  const [arregloData, setArregloData] = useState(null);
  const [arregloTotal, setArregloTotal] = useState(null);
  const [limite, setLimite] = useState(null);
  const [temp, setTemp] = useState(null)
  const [delContador, setDelContador] = useState(0)

  useEffect(() => {
    const obtenerDatos = async () => {
      setArregloData([...await getData("/calculadora/datos")]);
      setArregloTotal(await getData("/comidas/simple"));
      setLimite(await getData("/calculadora/limite"));
    };
    obtenerDatos();
  }, [route.params, delContador]);

  useEffect(() => {
    const procesarDatos = async () => {
      if (arregloData && arregloTotal) {
        setTemp(sumArrays(await arraysAsincronos(arregloData, arregloTotal)));
      }
    };
    procesarDatos();
  }, [arregloTotal]);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: '2.5%' }}></View>
        {arregloData && arregloData.length > 0 ? (
        arregloData && arregloData?.map((element, index) => (
          <View key={element.nombre + element.gramos} style={[styles.simpleButton, {flexDirection: 'row', justifyContent: 'space-between'}]}>
            <Text style={{ color: "white"}}>{(index+1)+")"}</Text>
            <Text style={{ color: "white"}}>{element.nombre}: {element.gramos}</Text>
            <TouchableOpacity onPress={async() => { 
              await delData(element.nombre, 'calculadora', 'datos') 
              setDelContador(delContador+1)
              }}>
              <Entypo name="trash" size={16} color="red" />
            </TouchableOpacity>
          </View>
        ))
        ):(  <Text style={{ color: "white", fontSize:  PixelRatio.getFontScale()*24, textAlign:'center', paddingTop:'25%', fontWeight:'bold' }}> Sin datos hasta el momento... </Text>)
        }
      </ScrollView>
      { limite && temp && arregloData.length > 0 ? (
        limite[0].tipo == "mayor" ? (
          <View>
            <Text style={{ color: parseInt(limite[0].limite) < parseInt(temp.calorias) ? "#90ee90" : "#ffcccb", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*20, fontWeight: 'bold' }}>CALORIAS TOTALES: {temp.calorias?.toFixed(2)}</Text>
            <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Carbohidratos totales: {temp.carbohidratos?.toFixed(2)}</Text>
            <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Proteinas totales: {temp.proteinas?.toFixed(2)}</Text>
            <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Grasas totales: {temp.grasas?.toFixed(2)}</Text>
          </View>
          ): (
              <View>
                <Text style={{ color: parseInt(limite[0].limite) > parseInt(temp.calorias) ? "#90ee90" : "#ffcccb", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*20, fontWeight: 'bold' }}>CALORIAS TOTALES: {temp.calorias?.toFixed(2)}</Text>
                <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Carbohidratos totales: {temp.carbohidratos?.toFixed(2)}</Text>
                <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Proteinas totales: {temp.proteinas?.toFixed(2)}</Text>
                <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16 }}>Grasas totales: {temp.grasas?.toFixed(2)}</Text>
              </View>
              )
          ) : (
            <View>
              <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()*16, paddingBottom:'10%' }}>
                Agregue datos pulsando el botón circular rojo
              </Text>
            </View>
          )
      }
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Agregar Alimento")
        }}
        style={styles.roundButton1}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
}

export default Calculadora