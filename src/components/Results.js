import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text} from 'react-native-elements';

const Results = ({navigation, title, price, list}) => {
  const filteredList = list.filter(item => item.price === price);

  if (filteredList.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredList}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.restaurantContainer}
              onPress={() => navigation.navigate('Details', {id: item.id})}>
              <Image source={{uri: item.image_url}} style={styles.imageStyle} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  header: {
    marginLeft: 10,
    fontSize: 22,
  },
  restaurantContainer: {
    margin: 10,
  },
  imageStyle: {
    width: 200,
    height: 100,
    borderRadius: 4,
  },
});

export default Results;
