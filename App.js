import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigation/AppNavigator'
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import SignUp from './screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="root" component={Root} options={{ title: 'Apinap' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Root() {
  return (
      <AppNavigator />
  );
}

export default App;