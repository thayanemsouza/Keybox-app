import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home"; 
import SavedPasswords from "../screens/SavedPasswords";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: "Gerador de Senhas" }} />
      <Stack.Screen
        name="SavedPasswords"
        component={SavedPasswords}
        options={{ title: "Senhas Salvas" }}
      />
    </Stack.Navigator>
  );
}
