import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Header} from 'react-native-elements';

const ExploreScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{text: 'Explore', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#7E5C7E',
        }}
      />
      <Text>Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExploreScreen;
