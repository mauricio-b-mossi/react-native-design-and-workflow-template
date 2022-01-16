import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { TINTS, TONES } from "../constants";

interface Props {
  label: string;
  id: number;
  index: number;
  onPress: () => void;
}

//Need a way to programmatically update the colors
// Modulus 8 as the max value that can remain is 7

const height: number = 24;

const Item = ({ label, id, index, ...props }: Props) => {
  const [color, setColor] = useState<TINTS>(TINTS.ONE);

  const TINT = index % 7;

  useEffect(() => {
    switch (TINT) {
      case 0:
        setColor(TINTS.ONE);
        break;
      case 1:
        setColor(TINTS.TWO);
        break;
      case 2:
        setColor(TINTS.THREE);
        break;
      case 3:
        setColor(TINTS.FOUR);
        break;
      case 4:
        setColor(TINTS.FIVE);
        break;
      case 5:
        setColor(TINTS.SIX);
        break;
      case 6:
        setColor(TINTS.SEVEN);
        break;

      default:
        setColor(TINTS.ONE);
        break;
    }
  }, []);

  // onTap pass the color

  return (
    <TouchableOpacity
      style={{
        elevation: 3,
        minWidth: 350,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
      {...props}
    >
      <View
        style={[
          styles.colorBar,
          {
            backgroundColor: `${color}`,
          },
        ]}
      ></View>
      <View style={styles.bodyContainer}>
        {Platform.OS == "ios" ? (
          <></>
        ) : (
          <FontAwesome
            style={styles.icon}
            name="group"
            size={24}
            color="black"
          />
        )}
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Text
            style={tw.style("font-bold", {
              width: "100%",
              textAlign: "center",
              fontSize: 16,
            })}
          >
            {label}
          </Text>
          {/* Icons */}
          <View></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorBar: {
    minWidth: 350,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: height,
  },
  bodyContainer: {
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    minHeight: height * 3,
    backgroundColor: "white",
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 0,
    transform: [
      {
        translateY: -(height / 2 + 4),
      },
    ],
    backgroundColor: "white",
    padding: 4,
    borderRadius: 20,
  },
});

export default Item;
