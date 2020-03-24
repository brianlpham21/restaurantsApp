import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Header} from 'react-native-elements';

const AccountScreen = () => {
  return (
    <View>
      <Header
        centerComponent={{text: 'My Account', style: {color: '#fff'}}}
        containerStyle={{
          backgroundColor: '#7E5C7E',
        }}
      />
      <View style={styles.container}>
        <Text>John Smith</Text>
        <Text>150 Friends</Text>
        <Text>350 Reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default AccountScreen;
