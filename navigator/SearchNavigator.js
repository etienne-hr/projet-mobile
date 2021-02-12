import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screen/SearchScreen";
import { DetailScreen } from "../screen/DetailScreen";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};
