import React from 'react';
import { TouchableOpacity, Text, ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import { styles } from '../resources/styles';

const Calculadora = ({navigation}) => {
  return (  
    <View style={{flex: 1}}>
      <ScrollView>
          <TouchableOpacity style={styles.simpleButton} onPress={() => {
              navigation.navigate("Inicio")
          }}>
              <Text style = {{color: "white"}}>Inicio</Text>
          </TouchableOpacity>     
      </ScrollView>
      <Footer/> 
    </View>
  );
}

export default Calculadora