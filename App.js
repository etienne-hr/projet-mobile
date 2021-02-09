import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import TabNavigator from "./navigator/TabNavigator";
import { GenreNavigator } from "./navigator/GenreNavigator";

export default function App() {
  return <GenreNavigator />;
}
