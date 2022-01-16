import React from "react";
import { View, Text, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { selectUsername } from "../../slices/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLoggedIn } from "../../slices/loginSlice";

const User = () => {

  const dispatch = useDispatch()

  const signOut = async () : Promise<void> => {
    try {
      await AsyncStorage.removeItem("@user");
      await dispatch(setLoggedIn(false))
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const user = useSelector(selectUsername);
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <Ionicons name="person-circle-outline" size={50} color="black" />
      <Text>{user}</Text>
      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaView>
  );
};

export default User;
