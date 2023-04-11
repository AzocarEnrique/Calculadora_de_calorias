import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import NuevaComida from "../src/screens/NuevaComida";
import Login from "../src/screens/Login";
import SignUp from "../src/screens/SignUp";

const Stack = createNativeStackNavigator()

const navTheme = DefaultTheme;
navTheme.colors.background = '#57595d';
navTheme.colors.card = '#2b2d31';
navTheme.colors.text = '#fffff4';

const MainStack = () => {
    return (
        <NavigationContainer theme={navTheme}>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Inicio"
                    component={ Home }
                />
                <Stack.Screen 
                    name="Iniciar Sesión"
                    component={ Login }
                />
                <Stack.Screen 
                    name="Crear Cuenta"
                    component={ SignUp }
                />
                <Stack.Screen 
                    name="Nueva Comida"
                    component={ NuevaComida }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack