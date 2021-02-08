import React from "react";
// import { TextInput, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { LaunchScreen } from "../screen/LaunchScreen";
import { GenreScreen } from "../screen/GenreScreen";

const Stack = createStackNavigator();

export const GenreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={LaunchScreen}
      />
      <Stack.Screen name="Genre" component={GenreScreen} />
    </Stack.Navigator>
  );
};
