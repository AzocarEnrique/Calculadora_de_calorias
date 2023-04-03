import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Perfil from "../src/screens/Perfil";

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={ Home }
                />
                <Stack.Screen 
                    name="Perfil"
                    component={ Perfil }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack