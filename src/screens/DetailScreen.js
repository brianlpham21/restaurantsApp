import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Text} from 'react-native-elements';

const DetailScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{text: '', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#7E5C7E',
        }}
      />
      <Text>Detail Screen</Text>
      <Text>h</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailScreen;
