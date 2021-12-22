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

const SignUp = () => {
  const navigator = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupFunction = (
    user: CreateUserInterface
  ): Promise<ReturnUserInterface> => {
    return axios.post(url + "signup", user);
  };

  const onSuccess = () => {
    navigator.navigate('Login')
  }

  const {isError, mutate} = useMutation(signupFunction, {onSuccess})

  // Add valdiation to check wether input is valid
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center p-10`}>
      <TextInput
        style={tw`h-10 w-full m-4 border rounded p-2`}
        placeholder="Username"
        onChangeText={setUsername}
      ></TextInput>
      <TextInput
        style={tw`h-10 w-full m-4 border rounded p-2`}
        placeholder="Password"
        onChangeText={setPassword}
      ></TextInput>
      <Text>{ isError && `Username already in use` }</Text>
      <View style={tw`w-full px-8 m-4`}>
        <TouchableOpacity
          style={tw`h-10 w-full  bg-black rounded justify-center items-center`}
          onPress={() => mutate({username, password})}
        >
          <Text style={tw`font-black text-white`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigator.navigate("Login")}>
        <Text style={tw`text-blue-600`}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
