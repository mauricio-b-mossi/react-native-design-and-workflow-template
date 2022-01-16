import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

interface data {
  name: string;
  id: number
}

const Card = (props: data) => {

  const navigator = useNavigation();

  return (
    <TouchableOpacity
      // onPress={() => navigator.navigate('oneGroup', {key: props.id})}
      style={tw.style(`flex-row justify-center items-center mt-4`, {
        elevation: 3,
      })}
    >
      <View style={tw`flex-1 rounded bg-gray-300 px-4 py-2`}>
        <Text style={tw`font-bold text-lg`}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({});
