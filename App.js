import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector, useDispatch} from 'react-redux';

import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import AccountScreen from './src/screens/AccountScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function detailFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search', headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{title: 'Details', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  const state = useSelector(state => state);
  const loggedIn = state.auth.loggedIn;

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#7E5C7E',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen
            name="Search"
            component={detailFlow}
            options={{title: 'Search'}}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{title: 'Explore'}}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{title: 'My Account'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: 'Sign Up', headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{title: 'Sign In', headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
