import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {Header, Text, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

import {searchApi} from '../actions/restaurants';

import Results from '../components/Results';

const ExploreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const stableDispatch = useCallback(dispatch, []);

  useEffect(() => {
    async function getRestaurants() {
      const businesses = await searchApi('pizza');
      stableDispatch({type: 'LOAD_EXPLORE_RESTAURANTS', payload: businesses});
    }
    getRestaurants();
  }, [stableDispatch]);

  return (
    <View>
      <Header
        centerComponent={{text: 'Explore', style: {color: '#fff'}}}
        containerStyle={{backgroundColor: '#7E5C7E'}}
      />
      <Results
        navigation={navigation}
        title="Budget"
        price="$"
        list={state.restaurants.exploreList}
      />
      <Results
        navigation={navigation}
        title="Average"
        price="$$"
        list={state.restaurants.exploreList}
      />
      <Results
        navigation={navigation}
        title="Big Spender"
        price="$$$"
        list={state.restaurants.exploreList}
      />
      <Results
        navigation={navigation}
        title="Baller"
        price="$$$$"
        list={state.restaurants.exploreList}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExploreScreen;
