import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { Search } from "../components/Search";
import { FilmResult } from "../components/FilmResult";
import { searchMovie } from "../services/movie";

export default class SearchScreen extends React.Component {
  state = {
    searchText: "",
    filmsState: [],
    isLoading: false,
  };
  page;
  totalPages;

  constructor(props) {
    super(props);
    this.page = 0;
    this.totalPages = 0;
  }

  _searchFilms = () => {
    //Permet de réinitialiser le state entre deux recherches différentes
    this.page = 0;
    this.totalPages = 0;
    this.setState({ filmsState: [] });

    this._loadFilms();
  };

  handleSearchText = (text) => {
    this.setState({ searchText: text });
  };

  _loadFilms = () => {
    this.setState({ isLoading: true });
    searchMovie(this.state.searchText, this.page + 1).then((data) => {
      this.page = data.page;
      this.totalPages = data.total_pages;
      this.setState({
        filmsState: [...this.state.filmsState, ...data.results],
        isLoading: false,
      });
    });
  };
  _renderResult = () => {
    if (this.state.filmsState.length > 0) {
      return (
        <View>
          <FlatList
            data={this.state.filmsState}
            renderItem={({ item }) => (
              <FilmResult
                film={item}
                goToDetail={() =>
                  this.props.navigation.navigate("Details", {
                    id: item.id,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.page < this.totalPages) {
                this._loadFilms();
              }
            }}
          />
        </View>
      );
    }

    return (
      <View style={styles.no_found_container}>
        <Image
          source={require("../assets/bad.png")}
          style={{ height: 100, width: 100 }}
        ></Image>
        <Text style={styles.text_no_result}>Aucune recherche effectuée.</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.main_container}>
        <View style={styles.logoContainer}>
          <View style={styles.circle}>
            <Image
              style={styles.stretch}
              source={require("../assets/logo.png")}
            />
          </View>
        </View>
        <Search
          handleSearch={this.handleSearchText}
          handleClickButton={this._searchFilms}
        />
        {this._renderResult()}
        {this.state.isLoading ? (
          <View style={styles.loading_container}>
            <ActivityIndicator size="large" color={"#000"} />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  result_container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center'
  },
  text_no_result: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B5A90F",
  },
  no_found_container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loading_container: {
    bottom: 300,
  },
  logoContainer: {
    alignItems: "center",
  },
  stretch: {
    width: 170,
    height: 170,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100 / 0.5,
    borderWidth: 10,
    backgroundColor: "white",
    borderColor: "#b00020",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
});
