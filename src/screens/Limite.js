import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Text, ScrollView, View, TextInput, PixelRatio } from 'react-native';
import { Card } from 'react-native-elements'
import Footer from '../components/Footer';
import { styles } from '../resources/styles';
import { AntDesign,  Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import { getData, guardarLimite } from '../resources/functions';

const Limite = ({ navigation }) => {
  const [arregloData, setArregloData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [colorBoton, setColorBoton] = useState(0);
  const [numeroCal, setNumeroCal] = useState(0);

  useEffect(() => {
    const obtenerDatos = async () => {
      setArregloData([...await getData("/calculadora/limite")]);
    };
    obtenerDatos();
  }, [modalVisible]);


  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {arregloData && arregloData.length > 0 ? (
          <View style={{ paddingTop: '35%' }}>
            <Card containerStyle={{ backgroundColor: '#2b2d31', padding: 0, width: '75%', borderColor: 'black', alignSelf: 'center', borderWidth: 4 }}>
              <Text style={{ color: "white", fontSize:  PixelRatio.getFontScale()* 26, textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold' }}>
                {"Tu meta calorica es " + arregloData[0].tipo + " a:"}
              </Text>
              <Text style={{ color: "green", fontSize:  PixelRatio.getFontScale()* 32, textAlign: 'center', paddingBottom: '5%', fontWeight: 'bold' }}>
                {arregloData[0].limite}
              </Text>
              <TouchableOpacity style={[styles.botonLista, { marginBottom: 4, marginTop: 4, backgroundColor: 'skyblue' }]}
                onPress={() => { setModalVisible(true) }}>
                <Text style={{ color: "white" }}>Editar <AntDesign name="edit" size={16} color="white" /></Text>
              </TouchableOpacity>
            </Card>
          </View>
        ) : (
          <View>
            <Text style={{ color: "white", alignSelf: 'center', fontSize:  PixelRatio.getFontScale()* 20, paddingTop: '25%' }}>
              Sin datos hasta el momento...
            </Text>
          </View>
        )
        }
      </ScrollView>
      <Modal animationType="fade" visible={modalVisible} >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#57595d' }}>
          <Text style={{ fontSize:  PixelRatio.getFontScale()* 60, fontWeight: 'bold', color: '#fff', marginBottom:'10%' }}>Tu nuevo limite es:</Text>
          <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginBottom: '5%'}}>
            <TouchableOpacity style={[styles.botonLimite, { backgroundColor: colorBoton === 1 ? '#007AFF' : '#2b2d31', marginRight:'1%'}]} 
              onPress={() => {
                setColorBoton(1)
              }}>
                <Text style={{ fontSize:  PixelRatio.getFontScale()* 16, color: "white" }}>Menor que</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botonLimite, { backgroundColor: colorBoton === 2 ? '#007AFF' : '#2b2d31', marginLeft: '1%'}]} 
              onPress={() => {
                setColorBoton(2)
              }}>
                <Text style={{ fontSize:  PixelRatio.getFontScale()* 16, color: "white" }}>Mayor que</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={[styles.inputTexto, { borderWidth:1, alignSelf: 'center', textAlign: 'center' , marginBottom:'10%', fontSize:  PixelRatio.getFontScale()* 22, padding:PixelRatio.getFontScale()*5}]} 
          keyboardType='numeric' onChangeText={(ev) => {
            setNumeroCal(ev)
          }}
            placeholder="Kcal a alcanzar"
            placeholderTextColor="#96979A"
          />
          <View style={{ flexDirection: 'row', marginTop: '1%' }}>
            <TouchableOpacity style={[styles.botonLista, { backgroundColor: 'crimson', marginRight: '1%', flexDirection:'row', justifyContent:'space-between' }]} 
              onPress={() => { setModalVisible(false) }}>
              <Text style={{ fontSize:  PixelRatio.getFontScale()* 18, color: "white" }}>Cancelar </Text>
              <MaterialCommunityIcons name="cancel" size={PixelRatio.getFontScale()*22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botonLista, { backgroundColor: 'green', marginLeft: '1%', flexDirection:'row', justifyContent:'space-between' }]}
              onPress={async () => {
              const tipo = colorBoton === 1 ? 'menor' : 'mayor';
              await guardarLimite(numeroCal, tipo)
              setModalVisible(false)
            }}>
              <Text style={{ fontSize:  PixelRatio.getFontScale()* 18, color: "white" }}>Guardar </Text>
              <Feather name="save" size={PixelRatio.getFontScale()*22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Footer />
    </View>
  );
}

export default Limite