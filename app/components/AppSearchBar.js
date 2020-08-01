import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

function AppSearchBar({
  data,
  filteredOn,
  id,
  placeholder = "Search",
  renderItem,
  ...otherProps
}) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (text) => {
    setSearchText(text);
    searchFilterFunction({ data, text });
  };

  const [filteredData, setFilteredListings] = useState(data);
  const searchFilterFunction = ({ data, text }) => {
    const newData = data.filter((item) => {
      const itemData = item[filteredOn].toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredListings(newData);
  };
  return (
    <>
      <SearchBar
        onChangeText={searchFilterFunction}
        containerStyle={{ borderRadius: 25, marginBottom: 10 }}
        onChangeText={(text) => handleChange(text)}
        placeholder={placeholder}
        platform="android"
        value={searchText}
        {...otherProps}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item[id].toString()}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppSearchBar;
