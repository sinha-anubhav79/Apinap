import React from "react";
import { Text, StyleSheet, View } from "react-native";

const About = ({ navigation }) => {
  return (
      <View style={styles.mainView}>
          <Text style={styles.text}>About us</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#333033'
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
    }
});

export default About;
