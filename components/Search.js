import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, Image } from "react-native";

export const Search = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const onChangeText = (text) => {
    setIsDisabled(text === "");
    props.handleSearch(text);
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.input_container}>
        <Image source={require("../assets/loupe.png")} style={styles.picto} />
        <TextInput
          style={styles.textinput}
          placeholder="Titre film"
          onChangeText={onChangeText}
        />
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <View style={{ width: "50%" }}>
          <Button
            disabled={isDisabled}
            title="Recherche"
            color="#B5A90F"
            onPress={() => props.handleClickButton()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    padding: 35,
    paddingTop: 25,
    paddingBottom: 20,
    backgroundColor: "#B00020",
    borderRadius: 20,
  },
  input_container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingLeft: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  picto: {
    width: 25,
    height: 25,
  },
  textinput: {
    height: 50,
    paddingLeft: 10,
    color: "#B00020",
  },
});
