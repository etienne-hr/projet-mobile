import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export const FilmListGenre = (props) => {
  const { film, goToDetail } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={goToDetail}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${film.poster_path}`,
        }}
        style={styles.img}
      />
      <View style={styles.text}>
        <View style={{ padding: 3 }}>
          <Text style={{ fontWeight: "700", color: "#B5A90F" }}>
            {film.title}
          </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text style={{ color: "#B5A90F" }}> {film.release_date} </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text style={{ color: "#B5A90F" }}> Réalisateur </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {film.vote_average ? (
          <Text style={{ color: "#B00020" }}> {film.vote_average} </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 110,
    marginHorizontal: 10,
    margin: 3,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#B00020",
  },
  text: {
    flex: 3,
    paddingLeft: 22,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  img: {
    flex: 1,
    width: 100,
  },
});
