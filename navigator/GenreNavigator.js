import React from "react";
// import { TextInput, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { LaunchScreen } from "../screen/LaunchScreen";
import { GenreScreen } from "../screen/GenreScreen";
import { DetailScreen } from "../screen/DetailScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
console.log(getFocusedRouteNameFromRoute);
// console.log(props.route.state.routeNames);
// const Stack = createStackNavigator();

export const GenreNavigator = (props) => {
  // const routeName = getFocusedRouteNameFromRoute(props.route) ?? 'Home';

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={LaunchScreen}
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
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
