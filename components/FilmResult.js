import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const FilmResult = (props) => {
  const { film, goToDetail } = props;
  return (
    <TouchableOpacity style={styles.main_container} onPress={goToDetail}>
      <View style={styles.main_information_container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${film.poster_path}`,
          }}
          style={styles.image}
        />
        <View style={styles.content_container}>
          <View>
            <Text style={styles.title_text}>{film.title}</Text>
          </View>
          <View>
            <Text>{film.release_date}</Text>
          </View>
        </View>
        {film.vote_average > 7 && (
          <View style={{ justifyContent: "center" }}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main_container: {
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content_container: {
    flex: 1,
    margin: 5,
    justifyContent: "center",
  },
  main_information_container: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 120,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 16,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  picto: {
    width: 30,
    height: 30,
  },
});
