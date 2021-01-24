import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/Profile';
import AboutUs from "../screens/About";
import Loading from "../screens/Loading";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (   
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Loading..." component={Loading} />
      </Drawer.Navigator>
    );
  }

export default DrawerNavigator;