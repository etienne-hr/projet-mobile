import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { GenreScreen } from "../screen/GenreScreen";
import { DetailScreen } from "../screen/DetailScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export const GenreNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TabNavigator}
        />
        <Stack.Screen
          name="Genre"
          component={GenreScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: "#B00020",
            },
            headerTintColor: "#B5A90F",
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            title: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
