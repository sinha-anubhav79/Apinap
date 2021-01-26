import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Loading = ({ navigation }) => {
  return (
      <View style={styles.mainView}>
          <Image 
            source={require('../assets/Loading.png')} 
            style={{
                width: "90%", 
                height: 350
                }}  
            />
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

export default Loading;
