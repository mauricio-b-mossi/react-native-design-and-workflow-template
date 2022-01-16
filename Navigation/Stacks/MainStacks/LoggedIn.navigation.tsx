import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "../Main.tabs";
import User from "../../../pages/LoggedIn/User";
import { useSelector } from "react-redux";
import { selectToken } from "../../../slices/userSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice";

const LoggedIn = () => {

  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch()

  const token = useSelector(selectToken);

  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

      useEffect(() => {
        const getData = async (): Promise<void> => {
          try {
            const value = await AsyncStorage.getItem("@user");
            if (value !== null) {
              const user = await JSON.parse(value);
              await dispatch(setUser(user));
            }
          } catch (error) {
            console.log(error);
            return;
          }
        };

        getData();
      }, []);
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoggedIn;
