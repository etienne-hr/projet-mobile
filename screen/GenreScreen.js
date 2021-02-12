import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { getFilmByGenre } from "../services/movie";
import { FilmListGenre } from "../components/FilmListGenre";

export const GenreScreen = (props) => {
  const { genreId } = props.route.params;
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function asyncGetFilmByGenre() {
      await loadingList();
    }
    asyncGetFilmByGenre();
  }, []);

  const loadingList = () => {
    setIsLoading(true);
    getFilmByGenre(genreId, page + 1).then((response) => {
      setPage(response.page);
      setTotalPage(response.total_pages);
      setMovies([...movies, ...response.results]);
      setIsLoading(false);
    });
  };

  return (
    <SafeAreaView>
      <View style={{ paddingTop: 50 }}>
        {isLoading ? (
          <View>
            <ActivityIndicator size="large" color={"#ff0000"} />
          </View>
        ) : null}
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <FilmListGenre
              film={item}
              goToDetail={() =>
                navigation.navigate("Details", {
                  id: item.id,
                })
              }
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (page < totalPage) {
              loadingList();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};
