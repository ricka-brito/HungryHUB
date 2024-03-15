import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

const Login = ({navigation}) => {
  return (
    <View>  
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Text>Clique</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
