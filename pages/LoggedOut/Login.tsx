import React, { useState, useEffect } from "react";
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
import {
  LoginUserInterface,
  ReturnUserInterface,
} from "../../dto/loggedOut.dto";
import { useDispatch } from "react-redux";
import url from "../../url";
import axios from "axios";
import { useMutation } from "react-query";
import { setLoggedIn } from "../../slices/loginSlice";

const Login = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const loginFunction = (
    user: LoginUserInterface
  ): Promise<ReturnUserInterface> => {
    return axios.post(url + "login", user);
  };

  const onSuccess = async (): Promise<void> => {
    await dispatch(setLoggedIn(true));
  };

  const { isError, mutate } = useMutation(loginFunction, { onSuccess });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const verify: boolean = (username.length > 4 && password.length > 4)

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center p-10`}>
      <TextInput
        onChangeText={setUsername}
        style={tw`h-10 w-full m-4 border rounded p-2`}
        placeholder="Username"
      ></TextInput>
      <TextInput
        onChangeText={setPassword}
        style={tw`h-10 w-full m-4 border rounded p-2`}
        placeholder="Password"
      ></TextInput>
      <Text style={tw`text-red-600`}>{ isError && `Wrong Username Or Password`  }</Text>
      <View style={tw`w-full px-8 m-4`}>
        <TouchableOpacity
          style={tw.style([
            "h-10",
            "w-full",
            "rounded",
            "justify-center",
            "items-center",
            (verify ? 'bg-black' : 'bg-gray-500'),
          ])}
          onPress={() => mutate({ username, password })}
          disabled = {!verify}
        >
          <Text style={tw`font-black text-white`}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigator.navigate("SignUp")}>
        <Text style={tw`text-blue-600`}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
