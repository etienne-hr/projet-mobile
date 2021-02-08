import React from "react";
import { View, Button } from "react-native";

export const ButtonGenre = ({ title, displayGenderList }) => (
  <View>
    <Button title={title} onPress={displayGenderList()} />
  </View>
);
