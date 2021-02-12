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
  Image,
} from "react-native";
import { getGenre } from "../services/movie";
import { ButtonGenre } from "../components/ButtonGenre";

const numColumns = 2;
export const LaunchScreen = ({ navigation }) => {
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

  const renderItem = ({ item }) => (
    <ButtonGenre title={item.name} navigation={navigation} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.circle}>
          <Image
            style={styles.stretch}
            source={require("../assets/logo.png")}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <View>
            <ActivityIndicator size="large" color={"#ff0000"} />
          </View>
        ) : (
          <FlatList
            data={genre}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.75,
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  categoryContainer: {
    justifyContent: "center",
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
  },
});
