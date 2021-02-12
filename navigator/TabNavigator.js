import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LaunchScreen } from "../screen/LaunchScreen";
// import SearchScreen from "../screen/SearchScreen";
import { SearchNavigator } from "./SearchNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LaunchScreen} />
      <Tab.Screen name="Search" component={SearchNavigator} />
    </Tab.Navigator>
  );
}
