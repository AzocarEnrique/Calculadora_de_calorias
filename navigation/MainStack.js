import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../src/screens/Home";
import Perfil from "../src/screens/Perfil";

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