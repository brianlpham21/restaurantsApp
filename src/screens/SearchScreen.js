import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Header, Text, Button} from 'react-native-elements';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Header
        centerComponent={{text: 'Search', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#7E5C7E',
        }}
      />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Search" />
        <Button title="Submit" style={styles.submitButton} />
        <Button title="Detail" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    color: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    marginBottom: 10,
  },
});

export default SearchScreen;
