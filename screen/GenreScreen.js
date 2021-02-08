import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getFilmByGenre } from "../services/movie";

export const GenreScreen = (props) => {
  const { genreId } = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function asyncGetFilmByGenre() {
      getFilmByGenre(genreId).then((response) => {
        setIsLoading(false);
        setMovies(response.results);
      });
    }
    asyncGetFilmByGenre();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text> {item.original_title} </Text>
    </View>
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
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
