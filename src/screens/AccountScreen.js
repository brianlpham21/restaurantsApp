import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Header, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const AccountScreen = () => {
  const dispatch = useDispatch();
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
        <Button
          title="Log Out"
          onPress={() => {
            dispatch({type: 'LOG_OUT'});
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
});

export default AccountScreen;
