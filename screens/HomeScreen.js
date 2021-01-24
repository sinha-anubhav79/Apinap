import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {AuthContext} from '../navigation/AuthProvider';

const HomeScreen = ({ navigation }) => {
    const {logout} = useContext(AuthContext);

  return <View style={styles.mainView}>
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="LOGOUT" 
        onPress={() => logout() }
      />
  </View>
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: '#000000',
        backgroundColor: '#333033'
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
    }
});

export default HomeScreen;
