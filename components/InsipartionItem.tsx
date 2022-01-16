import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { textInputBackground, textInputText, TINTS } from "../constants";

interface Props {
  label: string;
  id: number;
  //   index: number;
  onPress: () => void;
}

const InsipartionItem = ({ label, id, ...props }: Props) => {
  const { width } = Dimensions.get("window");
  return (
    <TouchableOpacity {...props}>
      <SafeAreaView
        style={{
          flex: 1,
          width: width * 0.7,
          minWidth: 350,
          elevation: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: textInputBackground,
          marginTop: 16,
          borderRadius: 10,
          maxHeight: 80,
        }}
      >
        <View
          style={{
            height: "100%",
            paddingRight: 16,
            backgroundColor: TINTS.FIVE,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            position: "absolute",
            left: 0,
          }}
        />

      
          <Image
            style={{ height: 40, width: 40, margin: 16, marginLeft: 32 }}
            source={require("../assets/ether.png")}
        />
        
        <View
          style={{
            // height: "100%",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "500",
              fontSize: 14,
            }}
          >
            {label}
          </Text>
          <Text style={{ color: textInputText, fontSize: 12 }}>
            1026 6th Ave
          </Text>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default InsipartionItem;

const styles = StyleSheet.create({});
