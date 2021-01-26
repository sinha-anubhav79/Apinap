import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';
import AboutUs from "../screens/About";
import Loading from "../screens/Loading";

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();
const LoadStack = createStackNavigator();


function DrawerNavigator() {
    return (   
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="About Us" component={AboutStackScreen} />
        <Drawer.Screen name="Loading..." component={LoadStackScreen} />
      </Drawer.Navigator>
    );
  }

  const HomeStackScreen = ({navigation}) => {
    return <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <HomeStack.Screen 
        name="Home" component={HomeScreen} 
        options={{
          title: 'Home', 
          headerLeft: () => (
            <Icon.Button 
              name="menu" 
              size={25} 
              backgroundColor="#009387" 
              onPress={() => {navigation.openDrawer()}} 
            />
          )
        }}
      />
    </HomeStack.Navigator>
  }

  const ProfileStackScreen = ({navigation}) => {
    return <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <ProfileStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          title: 'Profile',
          headerLeft: () => (
            <Icon.Button 
              name="menu" 
              size={25} 
              backgroundColor="#009387" 
              onPress={() => {navigation.openDrawer()}} 
            />
          )
        }}
      />
    </ProfileStack.Navigator>
  }

  const AboutStackScreen = ({navigation}) => {
    return <AboutStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <AboutStack.Screen 
        name="About Us" 
        component={AboutUs} 
        options={{
          title: 'About Us',
          headerLeft: () => (
            <Icon.Button 
              name="menu" 
              size={25} 
              backgroundColor="#009387" 
              onPress={() => {navigation.openDrawer()}} 
            />
          )
        }}
      />
    </AboutStack.Navigator>
  }

  const LoadStackScreen = ({navigation}) => {
    return <LoadStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <LoadStack.Screen 
        name="Loading" 
        component={Loading} 
        options={{
          title: 'Loading...',
          headerLeft: () => (
            <Icon.Button 
              name="menu" 
              size={25} 
              backgroundColor="#009387" 
              onPress={() => {navigation.openDrawer()}} 
            />
          )
        }}
      />
    </LoadStack.Navigator>
  }

export default DrawerNavigator;