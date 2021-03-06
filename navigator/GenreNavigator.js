import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { GenreScreen } from "../screen/GenreScreen";
import { DetailScreen } from "../screen/DetailScreen";
import TabNavigator from "./TabNavigator";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BackGreenButton } from "../components/BackGreenButton";
import { BackRedButton } from "../components/BackRedButton";

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
          options={({ route, navigation }) => ({
            title: route.params.title,
            headerLeft: (props) => (
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <BackGreenButton />
                </View>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#B00020",
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              height: 100,
            },
            headerTitleStyle: {
              fontWeight: "500",
              fontSize: 40,
            },
            headerTitleAlign: "center",
            headerTintColor: "#B5A90F",
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={({ navigation, route }) => ({
            headerLeft: (props) => (
              <TouchableOpacity onPress={() => navigation.navigate("Genre")}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <BackRedButton />
                </View>
              </TouchableOpacity>
            ),
            title: "",
            headerTransparent: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
