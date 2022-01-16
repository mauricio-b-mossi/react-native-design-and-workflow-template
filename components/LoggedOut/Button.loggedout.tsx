import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { primaryColor } from "../../constants";
import { LoginUserInterface } from "../../dto/loggedOut.dto";

interface Props {
  label: string;
  isValid: boolean;
  onPress: () => void;
}

const LoginButton = ({ label, isValid, ...props }: Props) => {
  return (
    <View style={tw`w-full justify-center items-center px-8 m-4`}>
      <TouchableOpacity
        style={tw.style(
          `w-full px-4 py-2 
          rounded
          justify-center items-center`,
          isValid ? { backgroundColor: primaryColor } : "bg-gray-500",
          { maxWidth: 200 }
        )}
        disabled={!isValid}
        {...props}
      >
        <Text style={tw`font-black text-white`}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
