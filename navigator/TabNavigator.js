import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LaunchScreen } from "../screen/LaunchScreen";
import SearchScreen from "../screen/SearchScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LaunchScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}
