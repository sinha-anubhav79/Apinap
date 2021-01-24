import 'react-native-gesture-handler';
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import AppNavigator from './AppNavigator'
import Login from "../screens/Login";
import SignUp from '../screens/SignUp';
import {AuthContext} from './AuthProvider';

const Stack = createStackNavigator();

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <NavigationContainer>
            {user ? AppStack() : AuthStack() }
        </NavigationContainer>
    );
};

const AppStack = () => {
    return (
        <AppNavigator />
    );
  }
  
  const AuthStack = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    );
  }

export default Routes;