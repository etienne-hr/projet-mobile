import React from "react";
// import { TextInput, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { LaunchScreen } from "../screen/LaunchScreen";
import { GenreScreen } from "../screen/GenreScreen";

const Stack = createStackNavigator();

export const GenreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LaunchScreen} />
      <Stack.Screen name="Search" component={GenreScreen} />
    </Stack.Navigator>
  );
};
