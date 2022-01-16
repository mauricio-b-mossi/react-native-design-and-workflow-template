import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import url from "../../url";
import { useDispatch } from "react-redux";
import { CreateUserInterface, ReturnUserInterface } from "../../dto/loggedOut.dto";
import { useMutation } from "react-query";
import Title from "../../components/LoggedOut/Title";
import Input from "../../components/Input";
import LoginButton from "../../components/LoggedOut/Button.loggedout";
import LoginLink from "../../components/LoggedOut/Link.loggedout";

const SignUp = () => {
  const navigator = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupFunction = (
    user: CreateUserInterface
  ): Promise<ReturnUserInterface> => {
    return axios.post(url + "auth/signup", user);
  };

  const onSuccess = () => {
    navigator.navigate('Login')
  }

  const { isError, mutate } = useMutation(signupFunction, { onSuccess })
  
  
  const verify: boolean = username.length > 4 && password.length > 4;

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center p-10`}>
      <Title label="Sign Up" />
      <Input
        label="Usename"
        placeholder="John Doe"
        onChangeText={setUsername}
      />
      <Input
        label="Password"
        placeholder="*******"
        onChangeText={setPassword}
      />
      <Text style={tw`text-red-600`}>
        {isError && `Username already in use`}
      </Text>

      <LoginButton
        isValid={verify}
        label="Sign Up"
        onPress={() => mutate({ username, password })}
      />
      <LoginLink label='Login' onPress={() => navigator.navigate("Login")} />
      
      {/* <View style={tw`w-full px-8 m-4`}>
        <TouchableOpacity
          style={tw`h-10 w-full  bg-black rounded justify-center items-center`}
          onPress={() => mutate({ username, password })}
        >
          <Text style={tw`font-black text-white`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigator.navigate("Login")}>
        <Text style={tw`text-blue-600`}>Login</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
