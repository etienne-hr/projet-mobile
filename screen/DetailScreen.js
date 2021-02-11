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
  const { route } = props;

  // const [id, setId] = useState();
  const [movieDetails, setMovieDetails] = useState([]);
  const [time, setTime] = useState();
  let rest = 0;

  useEffect(() => {
    async function asyncLoadingDetails() {
      // await loadingDetails();
      console.log(route.params.id.id);
      getMovie(route.params.id.id).then((response) => {
        setMovieDetails(response);
        console.log(movieDetails);
        setTime(movieDetails.runtime);
      });
    }
    asyncLoadingDetails();
  }, []);

  // const loadingDetails = () => {
  // };

  const duration = (time, rest) => {
    rest = time % 60;
    time = Math.floor(time / 60) + "h" + rest;
    return time;
  };
  // console.log(movieDetails);
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ flex: 1 }}> */}
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`,
        }}
        style={styles.poster}
      ></Image>
      {/* </View> */}
      <View style={{ flex: 1 }}>
        <View>
          <Text>{movieDetails.title}</Text>
          {/* <Text>{movieDetails.genres[0].name}</Text> */}
          <Text>{duration(time, rest)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    height: screen.height / 2.5,
    resizeMode: "cover",
    width: screen.width,
  },
});
