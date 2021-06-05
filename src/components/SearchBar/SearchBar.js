import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.styles';

const SearchBar = () => {
  return (
    <TextInput style={styles.search} onChange={() => {}} placeholder="Ara..." />
  );
};

export default SearchBar;
