import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return <View style={styles.mainView}>
      <Text style={styles.text}>Home Screen</Text>
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
