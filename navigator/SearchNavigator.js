import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screen/SearchScreen";
import { DetailScreen } from "../screen/DetailScreen";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BackRedButton } from "../components/BackRedButton";

const Stack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
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
  );
};
