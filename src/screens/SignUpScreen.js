import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.mainContainer}>
        <Text h2 style={styles.title}>
          Yulp
        </Text>
        <Text style={styles.subTitle}>
          A fresh new look for searching for restaurants
        </Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <Button
          title="Sign Up"
          style={styles.signUpButton}
          onPress={() => {
            dispatch({type: 'LOG_IN'});
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signIn}>Already a user? Sign in here.</Text>
        </TouchableOpacity>
        <Text style={styles.altSignUp}>or you can sign up with</Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.socialIconButton}>
          <Text>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIconButton}>
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#7E5C7E',
    padding: 20,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    flex: 8,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    color: 'white',
    padding: 10,
    fontSize: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButton: {
    marginBottom: 10,
  },
  signIn: {
    color: 'white',
    alignSelf: 'center',
  },
  altSignUp: {
    color: 'white',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconButton: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginLeft: 5,
    width: 90,
    alignItems: 'center',
  },
});

export default SignUpScreen;
