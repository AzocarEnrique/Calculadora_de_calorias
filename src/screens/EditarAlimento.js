import React, {useState} from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../resources/styles';
import { delData, editData, numero } from '../resources/functions'
let i = 0;

const EditarAlimento = ({ route, navigation }) => {
    const [nombre, setNombre] = useState(route.params.nombre)
    const [calorias, setCalorias] = useState(route.params.calorias)
    const [proteinas, setProteinas] = useState(route.params.proteinas)
    const [carbohidratos, setCarbohidratos] = useState(route.params.carbohidratos)
    const [grasas, setGrasas] = useState(route.params.grasas)
    const aumento = () => {
        i--;
    }
    return (
        <View style={{ flex: 1, paddingTop: '3%' }}>
            <ScrollView>
                <View style={{ margin: 20, alignItems: 'center', paddingTop: "5%" }}>
                    <View style={{ paddingBottom: "5%" }}>
                        <Text style={styles.tituloComida}>
                            Detalles Generales:
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={styles.textoComida}> Nombre: </Text>
                        <TextInput style={styles.inputTexto} onChangeText={(ev) => { 
                            setNombre(ev) 
                            if(ev == ""){setNombre(route.params.nombre)}}}
                            placeholder={route.params.nombre} 
                            placeholderTextColor="#96979A" />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={styles.textoComida}> Calorias: </Text>
                        <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                            setCalorias(numero(ev))
                            if(ev == ""){setCalorias(route.params.calorias)}
                        }}
                            placeholder={String(route.params.calorias)}
                            placeholderTextColor="#96979A"
                        />
                    </View>
                    <View style={{ paddingTop: "10%", paddingBottom: "5%" }}>
                        <Text style={styles.tituloComida}>
                            Macro-Calorias:
                        </Text>
                    </View>
                    <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                        setProteinas(numero(ev))
                        if(ev == ""){setProteinas(route.params.proteinas)}
                    }}
                        placeholder={String(route.params.proteinas)}
                        placeholderTextColor="#96979A"
                    />
                    <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                        setCarbohidratos(numero(ev))
                        if(ev == ""){setCarbohidratos(route.params.carbohidratos)}
                    }}
                        placeholder={String(route.params.carbohidratos)}
                        placeholderTextColor="#96979A"
                    />
                    <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                        setGrasas(numero(ev))
                        if(ev == ""){setGrasas(route.params.grasas)}
                    }}
                        placeholder={String(route.params.grasas)}
                        placeholderTextColor="#96979A"
                    />
                    <View style={{ paddingTop: "7%" }}>
                    </View>
                </View>
            </ScrollView>
            <Button onPress={() => {
                editData(nombre, calorias, carbohidratos, proteinas, grasas)
            }}
                title='Editar' />
            <View style={{paddingBottom:'2%'}}></View>
            <Button onPress={async () => {
                await delData(route.params.nombre)
                aumento()
                navigation.navigate("Inicio", { contador: i })
            }}
                title='Eliminar' />
            <View style={{paddingBottom:'2%'}}></View>
        </View>
    );
};

export default EditarAlimento;