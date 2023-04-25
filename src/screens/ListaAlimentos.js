import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Text, ScrollView, View, TextInput, KeyboardAvoidingView, PixelRatio } from 'react-native';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { guardarCalData, getData } from '../resources/functions';

const ListaAlimentos = ({ navigation }) => {

    const [arregloData, setArregloData] = useState(null);
    const [nombreSelect, setNombreSelect] = useState(null)
    const [cantidad, setCantidad] = useState(0)
    const [modalVisible, setModalVisible] = useState(false);
    let i = 0
    useEffect(() => {
        const obtenerDatos = async () => {
            setArregloData([...await getData("/comidas/simple")]); //[...var] genera una nueva instancia de memoria, se previene asi la duplicidad de llaves más abajo
        };                                      // array.includes() puede ser otra solucion para este problema
        obtenerDatos();
    }, []);
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView>
                <View style={{ marginTop: '2.5%' }}></View>
                {arregloData && arregloData?.map((element) => (
                    <TouchableOpacity key={element.nombre} style={styles.simpleButton} onPress={() => {
                        setNombreSelect(element.nombre)
                        setModalVisible(true)
                    }}
                    >
                        <Text style={{ color: "white" }}>{element.nombre}</Text>
                    </TouchableOpacity>
                ))
                }
            </ScrollView>
            <Modal animationType="fade" visible={modalVisible} >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#57595d' }}>
                    <Text style = {{fontSize:  PixelRatio.getFontScale()* 60, fontWeight:'bold', color:'#fff'}}>{nombreSelect}</Text>
                    <TextInput style={[styles.inputTexto, { alignSelf: 'center', textAlign:'center' }]} keyboardType='numeric' onChangeText={(ev) => {
                        setCantidad(ev)
                    }}
                        placeholder="Peso en gramos"
                        placeholderTextColor="#96979A"
                    />
                    <View style={{flexDirection: 'row', marginTop: '2%'}}>
                        <TouchableOpacity style={[styles.botonLista, {backgroundColor:'crimson', marginRight:'1%', flexDirection:'row', justifyContent:'space-between'}]} onPress={() => {setModalVisible(false)} }>
                            <Text style={{ fontSize:  PixelRatio.getFontScale()* 18, color: "white" }}>Cancelar </Text>
                            <MaterialCommunityIcons name="cancel" size={PixelRatio.getFontScale()*22} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.botonLista, {backgroundColor:'green', marginLeft:'1%', flexDirection:'row', justifyContent:'space-between'}]} onPress={async() => { 
                            await guardarCalData(nombreSelect, cantidad)
                            i+=1
                            navigation.navigate("Calculadora", {cuenta: i})
                            }}>
                            <Text style={{ fontSize:  PixelRatio.getFontScale()* 18, color: "white" }}>Guardar </Text>
                            <Feather name="save" size={PixelRatio.getFontScale()*22} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Footer />
        </KeyboardAvoidingView>
    );
}

export default ListaAlimentos