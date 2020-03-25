import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {Header, Text, Button} from 'react-native-elements';
import {searchApi} from '../actions/restaurants';
import {useSelector, useDispatch} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    async function getRestaurants() {
      const businesses = await searchApi('cake');
      stableDispatch({type: 'LOAD_RESTAURANTS', payload: businesses});
    }
    getRestaurants();
  }, [stableDispatch]);

  return (
    <View>
      <Header
        centerComponent={{text: 'Search', style: {color: '#fff'}}}
        containerStyle={{backgroundColor: '#7E5C7E'}}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={state.restaurants.searchTerm}
          placeholder="Search"
          onChangeText={searchTerm => {
            dispatch({type: 'SET_SEARCH_TERM', payload: searchTerm});
          }}
        />
        <Button
          title="Submit"
          style={styles.submitButton}
          onPress={async () => {
            const businesses = await searchApi(state.restaurants.searchTerm);
            dispatch({type: 'LOAD_RESTAURANTS', payload: businesses});
          }}
        />
        <Button title="Detail" onPress={() => navigation.navigate('Details')} />
        <FlatList
          data={state.restaurants.list}
          keyExtractor={restaurant => restaurant.id}
          renderItem={({item}) => {
            return <Text>{item.name}</Text>;
          }}
        />
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
