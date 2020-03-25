import React, {useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const stableDispatch = useCallback(dispatch, []);
  Icon.loadFont();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      stableDispatch({type: 'CLEAR_LOGIN_INFORMATION'});
    });

    return unsubscribe;
  }, [navigation, stableDispatch]);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require('../../images/yelp.png')}
            style={styles.imageLogo}
          />
          <Text h2 style={styles.title}>
            Yulp
          </Text>
        </View>
        <Text style={styles.subTitle}>
          A fresh new look for searching for restaurants
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={state.auth.email}
          onChangeText={text => {
            dispatch({type: 'EDIT_LOGIN_INFORMATION', payload: {email: text}});
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={state.auth.password}
          onChangeText={text => {
            dispatch({
              type: 'EDIT_LOGIN_INFORMATION',
              payload: {password: text},
            });
          }}
        />
        <Button
          title="Sign Up"
          style={styles.signUpButton}
          disabled={state.auth.email === '' || state.auth.password === ''}
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
        <TouchableOpacity
          style={styles.socialIconButton}
          onPress={() => {
            dispatch({type: 'LOG_IN'});
          }}>
          <Icon name="facebook-official" size={25} color="#4267B2" />
          <Text style={styles.socialIconText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.socialIconButton}
          onPress={() => {
            dispatch({type: 'LOG_IN'});
          }}>
          <Icon name="google" size={25} color="#DB4437" />
          <Text style={styles.socialIconText}>Google</Text>
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
  titleContainer: {
    flexDirection: 'row',
  },
  imageLogo: {
    height: 55,
    width: 55,
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
    width: 120,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIconText: {
    marginLeft: 8,
  },
});

export default SignUpScreen;
