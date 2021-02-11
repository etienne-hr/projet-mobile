import React from "react";
import { View, Image } from "react-native";

export const BackRedButton = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 4,
    }}
  >
    <Image
      source={require("../assets/back-arrow.png")}
      style={{ width: 35, height: 35 }}
    />
  </View>
);
