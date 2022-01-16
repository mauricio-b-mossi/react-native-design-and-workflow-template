import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectUsername } from "../slices/userSlice";
import { useNavigation } from "@react-navigation/native";
import { primaryColor } from "../constants";

const Header = ({ }) => {
  
  const username = useSelector(selectUsername)
  const navigator = useNavigation()

  return (
    <SafeAreaView
      style={
        {
          flexDirection: "row",
          elevation: 5,
          height: '100%',
          width: '100%',
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginHorizontal: 0
        }
      }
    >
      <Text>Hi {username && <Text style={tw.style({color: primaryColor}, `font-bold`)}>{ username }</Text>}</Text>

      <Ionicons
        style={tw`ml-2`}
        name="person-circle-outline"
        size={32}
        color="black"
        onPress={()=>navigator.navigate('User')}
      />
    </SafeAreaView>
  );
};

export default Header;
