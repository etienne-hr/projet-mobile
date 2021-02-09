import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const nav = (navigation, id, name) => {
  // console.log(`id: ${id}`);
  navigation.navigate("Genre", { genreId: id, title: name });
};

export const ButtonGenre = (props) => {
  const { navigation, title, id } = props;
  return (
    <View tyle={styles.TouchableOpacityContainer}>
      <TouchableOpacity
        style={styles.TouchableOpacityContainer}
        onPress={() => nav(navigation, id, title)}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "#B00020",
    fontWeight: "700",
    fontSize: 16,
  },
  TouchableOpacityContainer: {
    margin: 10,
    width: 150,
    height: 65,
    justifyContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#B00020",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2.5,

    elevation: 6,
  },
});
