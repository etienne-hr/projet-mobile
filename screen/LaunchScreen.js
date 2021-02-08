import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Button,
} from "react-native";
import { getGenre } from "../services/movie";
import { ButtonGenre } from "../components/ButtonGenre";

export const LaunchScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function asyncGenre() {
      getGenre().then((data) => {
        setIsLoading(false);
        setGenre(data.genres);
      });
    }
    asyncGenre();
  }, []);

  const displayGenderList = (props) => {
    props.navigation.navigate("Genre");
  };

  const renderItem = ({ item }) => (
    <ButtonGenre
      title={item.name}
      displayGenderList={() => {
        displayGenderList;
      }}
    />
  );

  return (
    <SafeAreaView>
      <View>
        {isLoading ? (
          <View>
            <ActivityIndicator size="large" color={"#ff0000"} />
          </View>
        ) : (
          <FlatList
            data={genre}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
