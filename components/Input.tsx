import React, { Dispatch, SetStateAction } from "react";
import { Text, View, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";
import { textInputBackground, textInputText } from "../constants";

interface Props {
  label: string;
  placeholder?: string;
  onChangeText: Dispatch<SetStateAction<string>>;
}

const Input = ({label, ...props} : Props) => {
  return (
    <View
      style={{
        backgroundColor: textInputBackground,
          borderRadius: 12,
        maxWidth: 350,
        paddingHorizontal: 16,
        paddingVertical: 8, 
        width: '100%',
          margin: 16
        
      }}
    >
      <Text
        style={{
          color: textInputText,
          marginBottom: 4,
        }}
      >
        {label}
      </Text>
      <View>
        <TextInput
          style={{
            fontSize: 12,
          }}
          placeholderTextColor={textInputText}
          {...props}
        ></TextInput>
      </View>
    </View>
  );
};

export default Input;

