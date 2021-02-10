import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getMovie } from "../services/movie";

export const DetailScreen = (props) => {
  const { route } = props;

  console.log(Image.getSize);
  const [id, setId] = useState("");
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    route.params.id.id ? setId(route.params.id.id) : setId("");
    async function asyncLoadingDetails() {
      loadingDetails();
    }
    asyncLoadingDetails();
  }, []);

  const loadingDetails = () => {
    getMovie(id).then((response) => {
      setMovieDetails(response);
    });
  };

  // console.log("movieDetails");

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
        }}
        style={styles.poster}
      ></Image>
      <Text>yoyiyoyoyooy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    // flex: 1,
    width: 900,
    height: 900,
    // resizeMode: "contain",
  },
});
