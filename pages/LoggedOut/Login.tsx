import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import {
  LoginUserInterface,
} from "../../dto/loggedOut.dto";
import { useDispatch } from "react-redux";
import url from "../../url";
import axios from "axios";
import { useMutation } from "react-query";
import { setLoggedIn } from "../../slices/loginSlice";
import { setUser } from "../../slices/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/Input";
import LoginButton from "../../components/LoggedOut/Button.loggedout";
import LoginLink from "../../components/LoggedOut/Link.loggedout";
import Title from "../../components/LoggedOut/Title";

const Login = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const loginFunction = async (user: LoginUserInterface): Promise<void> => {
    const { data: returnedUser } = await axios.post(url + "auth/login", user);

    try {
      const storedUser = await JSON.stringify(returnedUser);
      await AsyncStorage.setItem("@user", storedUser);
      await dispatch(setUser({}));
    } catch (error) {
      throw error;
    }
  };

  const onSuccess = async (): Promise<void> => {
    await dispatch(setLoggedIn(true));
  };

  const { isError, mutate } = useMutation(loginFunction, { onSuccess });

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // console.log(username);

  const verify: boolean = username.length > 4 && password.length > 4;

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center p-10`}>
   
      
      <Title label="Login"/>

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
        {isError && `Wrong Username Or Password`}
      </Text>

      <LoginButton
        isValid={verify}
        label="Login"
        onPress={() => mutate({ username, password })}
      />
      <LoginLink label="Sign Up" onPress={() => navigator.navigate("SignUp")} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
