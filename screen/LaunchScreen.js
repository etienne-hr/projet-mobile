import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { getGenre } from "../services/movie";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

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

  const renderItem = ({ item }) => <Item title={item.name} />;
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
