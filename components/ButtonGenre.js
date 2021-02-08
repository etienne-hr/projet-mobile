import React from "react";
import { View, Button } from "react-native";

const nav = (navigation, id) => {
  // console.log(`id: ${id}`);
  navigation.navigate("Genre", { genreId: id });
};

export const ButtonGenre = (props) => {
  const { navigation, title, id } = props;
  return (
    <View>
      <Button title={title} onPress={() => nav(navigation, id)} />
    </View>
  );
};
