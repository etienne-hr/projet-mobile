import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { LaunchScreen } from "../screen/LaunchScreen";
import { GenreNavigator } from "./GenreNavigator";
import SearchScreen from "../screen/SearchScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={GenreNavigator} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
