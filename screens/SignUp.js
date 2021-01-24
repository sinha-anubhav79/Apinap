import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {AuthContext} from '../navigation/AuthProvider';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {register} = useContext(AuthContext);

  return <View style={styles.mainView}>
      <Image 
        source={require('../assets/logo.png')} 
        style={{ width: 300, height: 150 }} 
      />
      <TextInput 
        labelValue={name}
        style={styles.textInput} 
        placeholder="Full Name" 
        placeholderTextColor="#808080" 
        onChangeText={(userName) => setName(userName)}
      />
      <TextInput 
        labelValue={email}
        style={styles.textInput} 
        placeholder="Email" 
        placeholderTextColor="#808080" 
        onChangeText={(userEmail) => setEmail(userEmail)} 
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
        labelValue={password}
        style={styles.textInput} 
        placeholder="Password" 
        placeholderTextColor="#808080" 
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <Button 
        title="SIGN UP" 
        onPress={() => register(email, password) }
      />
      <Text style={{color: "#fff"}}>
          Already have an accout?
          <TouchableOpacity onPress= {() => navigation.navigate('Login')}>
            <Text style={{color: "#00ffff"}}> Login</Text>
          </TouchableOpacity>
      </Text>
  </View>
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        backgroundColor: '#333033'
    },
    textInput: {
        height: 60, 
        width: "80%", 
        color: "#fff", 
        fontSize: 20,
    }
});

export default SignUp;
