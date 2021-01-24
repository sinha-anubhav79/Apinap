import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {AuthContext} from '../navigation/AuthProvider';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

  return <View style={styles.mainView}>
      <Image 
        source={require('../assets/logo.png')} 
        style={{ width: 300, height: 150 }} 
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
        title="LOGIN" 
        onPress={() => login(email, password) }
      />
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
