import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Profile = ({ navigation }) => {
  return (
      <View style={styles.mainView}>
          <Text style={styles.text}>Profile</Text>
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

export default Profile;
