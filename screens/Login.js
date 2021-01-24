import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  return <View style={styles.mainView}>
      <Image source={require('../assets/logo.png')} style={{ width: 300, height: 150 }} />
      <TextInput style={styles.textInput} placeholder="Username" placeholderTextColor="#fff" />
      <TextInput style={styles.textInput} placeholder="Password" placeholderTextColor="#fff" />
      <Button title="LOGIN" onPress={() => navigation.navigate('root') }/>
      <Text style={{color: "#fff"}}>
          Don't have an accout? 
          <TouchableOpacity onPress= {() => navigation.navigate('SignUp')}>
            <Text style={{color: "#00ffff"}}> SignUp</Text>
          </TouchableOpacity>
      </Text>
      
  </View>
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        color: '#fff',
        backgroundColor: '#333033'
    },
    textInput: {
        height: 60, 
        width: "80%", 
        color: "#fff", 
        fontSize: 20
    }
});

export default Login;
