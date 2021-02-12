import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LaunchScreen } from "../screen/LaunchScreen";
// import SearchScreen from "../screen/SearchScreen";
import { SearchNavigator } from "./SearchNavigator";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#B5A90F",
        inactiveTintColor: "#FFF",
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          alignItems: "center",
          backgroundColor: "#B00020",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={LaunchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={32} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}
