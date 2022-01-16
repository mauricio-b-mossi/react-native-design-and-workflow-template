import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { primaryColor } from '../constants';

interface Props {
  label: string;
  isValid: boolean;
  onPress: () => void;
}

const Button = ({ label, isValid, ...props }: Props) => {
    return (
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
    );
}

export default Button
