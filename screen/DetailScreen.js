import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getMovie } from "../services/movie";

const screen = Dimensions.get("screen");

export const DetailScreen = (props) => {
  console.log(props);
  const { route } = props;
  const { id } = route.params;
  const [movieDetails, setMovieDetails] = useState([]);
  const [time, setTime] = useState(0);
  const [genre, setGenre] = useState("");
  let rest = 0;

  useEffect(() => {
    async function asyncLoadingDetails() {
      await getMovie(id).then((response) => {
        setMovieDetails(response);
        setTime(response.runtime);
        setGenre(response.genres[0].name);
      });
    }
    asyncLoadingDetails();
  }, []);

  const duration = (time, rest) => {
    rest = time % 60;
    time = Math.floor(time / 60) + "h" + rest;
    return time;
  };
  // console.log(movieDetails);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ height: screen.height / 2.5, width: screen.width }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
          }}
          style={styles.background_poster}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.main_info}>
          <View style={styles.poster_container}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`,
              }}
              style={styles.poster}
            ></Image>
          </View>
          <View style={styles.basic_info}>
            <Text style={{ fontWeight: "700", fontSize: 16, color: "#B5A90F" }}>
              {movieDetails.title}
            </Text>
            <Text style={{ color: "#B5A90F" }}>{genre}</Text>
            <Text style={{ color: "#B5A90F" }}>{duration(time, rest)}</Text>
          </View>
          <View style={{ width: 50, height: 50 }}>
            <Image
              style={{ flex: 1, width: "100%" }}
              source={require("../assets/play.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.synopsis}>
          <Text style={styles.synopsis_title}>Synopsis</Text>
          <Text style={{ fontSize: 16, color: "#B5A90F" }}>
            {movieDetails.overview}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background_poster: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  poster_container: {
    width: 90,
    height: 120,
    borderWidth: 10,
    borderColor: "#FFFFFF",
    borderRadius: 10,
  },
  poster: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
  main_info: {
    bottom: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  basic_info: {
    padding: 5,
    backgroundColor: "#FFFFFF",
    width: 150,
    borderRadius: 10,
  },
  synopsis: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  synopsis_title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#B5A90F",
    marginBottom: 50,
  },
});
