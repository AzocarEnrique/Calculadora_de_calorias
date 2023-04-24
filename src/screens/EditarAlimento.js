import React, {useState} from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native';
import { styles } from '../resources/styles';
import { delData, editData, numero } from '../resources/functions'
let i = 0;

const EditarAlimento = ({ route, navigation }) => {
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
                <View style={{ margin: 20, alignItems: 'center' }}>
                    <View style={{ paddingBottom: "2%" }}>
                        <Text style={[styles.tituloComida,{fontWeight: 'bold'}]}>
                            {(route.params.nombre).toUpperCase()}
                        </Text>
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
                    <View style={{ paddingTop: "5%", paddingBottom: "5%" }}></View>
                    <Text style={styles.textoComida}> Proteinas </Text>
                    <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                        setProteinas(numero(ev))
                        if(ev == ""){setProteinas(route.params.proteinas)}
                    }}
                        placeholder={String(route.params.proteinas)}
                        placeholderTextColor="#96979A"
                    />
                    <Text style={styles.textoComida}> Carbohidratos </Text>
                    <TextInput style={styles.inputTexto} keyboardType='numeric' onChangeText={(ev) => {
                        setCarbohidratos(numero(ev))
                        if(ev == ""){setCarbohidratos(route.params.carbohidratos)}
                    }}
                        placeholder={String(route.params.carbohidratos)}
                        placeholderTextColor="#96979A"
                    />
                    <Text style={styles.textoComida}> Grasas </Text>
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
            <Button onPress={async () => {
                await editData(route.params.nombre, calorias, carbohidratos, proteinas, grasas)
                aumento()
                navigation.navigate("Inicio", { contador: i })
            }}
                title='Editar' />
            <View style={{paddingBottom:'2%'}}></View>
            <Button onPress={async () => {
                await delData(route.params.nombre, 'comidas', 'simple')
                aumento()
                navigation.navigate("Inicio", { contador: i })
            }}
                title='Eliminar' />
            <View style={{paddingBottom:'2%'}}></View>
        </View>
    );
};

export default EditarAlimento;