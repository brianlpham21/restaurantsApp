import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {Header, Text, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import {searchApi} from '../actions/restaurants';

import Results from '../components/Results';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    async function getRestaurants() {
      const businesses = await searchApi('cake');
      stableDispatch({type: 'LOAD_SEARCH_RESTAURANTS', payload: businesses});
    }
    getRestaurants();
  }, [stableDispatch]);

  return (
    <View>
      <Header
        centerComponent={{text: 'Search', style: {color: '#fff'}}}
        containerStyle={{backgroundColor: '#7E5C7E'}}
      />
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
          dispatch({type: 'LOAD_SEARCH_RESTAURANTS', payload: businesses});
        }}
      />
      <Results
        navigation={navigation}
        title="Budget"
        price="$"
        list={state.restaurants.searchList}
      />
      <Results
        navigation={navigation}
        title="Average"
        price="$$"
        list={state.restaurants.searchList}
      />
      <Results
        navigation={navigation}
        title="Big Spender"
        price="$$$"
        list={state.restaurants.searchList}
      />
      <Results
        navigation={navigation}
        title="Baller"
        price="$$$$"
        list={state.restaurants.searchList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    margin: 10,
  },
  submitButton: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default SearchScreen;
