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

export const GenreScreen = (props) => {
  const { genreId } = props.route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function asyncGetFilmByGenre() {
      loadingList();
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

  const filmListGenre = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate("Details", { id: item });
      }}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
        }}
        style={styles.img}
      />
      <View style={styles.text}>
        <View style={{ padding: 3 }}>
          <Text style={{ fontWeight: "700" }}> {item.title} </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text> {item.release_date} </Text>
        </View>
        <View style={{ padding: 3 }}>
          <Text> Réalisateur </Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {item.vote_average ? <Text> {item.vote_average} </Text> : null}
      </View>
    </TouchableOpacity>
  );

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
          renderItem={filmListGenre}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
