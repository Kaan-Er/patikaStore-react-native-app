/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import data from './Data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.title_text}>PATIKASTORE</Text>
      </View>
      <View style={styles.search_section}>
        <SearchBar />
      </View>
      <View style={styles.items}>
        <FlatList
          contentContainerStyle={styles.item}
          data={data}
          renderItem={({item}) => (
            <Card item={item} keyExtractor={item => item.id} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {padding: 10},
  title_text: {
    color: '#860D86',
    fontSize: 26,
    fontWeight: 'bold',
  },
  search_section: {
    flex: 1,
    paddingVertical: 5,
  },
  items: {
    flex: 11,
  },
  item: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
