import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { set } from "immer/dist/internal";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { useQuery } from "react-query";
import tw from "tailwind-react-native-classnames";
import url from "../../../url";
import { useNavigation } from "@react-navigation/native";
import Description from "../../../components/Description";
import InsipartionItem from "../../../components/InsipartionItem";

const Groups = () => {
  const navigator = useNavigation();
  const [usersGroups, setUserGroups] = useState(null);
  const [hasGroup, setHasGroup] = useState(false);

  const getGroups = () => {
    return axios.get(url + "group");
  };

  const { data, status } = useQuery("userGroups", getGroups);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        paddingTop: 40,
      }}
    >
      {/* <SafeAreaView style={tw`flex-1 items-center w-full bg-white`}> */}
      <Description
        label="Groups"
        description="All your groups."
        style={{ paddingBottom: 16, marginTop: Platform.OS == "ios" ? 40 : 0 }}
      />

      {status == "loading" && (
        <SafeAreaView style={tw`flex-1 justify-center items-center`}>
          <Text>Loading</Text>
        </SafeAreaView>
      )}

      {status == "error" && (
        <SafeAreaView style={tw`flex-1 justify-center items-center`}>
          <Text>Error</Text>
        </SafeAreaView>
      )}

      {status == "success" && (
        <SafeAreaView
          style={tw`flex-1 justify-center items-center w-full px-4`}
        >
          <FlatList
            data={data?.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <InsipartionItem
                label={item.name}
                id={item.id}
                onPress={() =>
                  navigator.navigate("oneGroup", {
                    key: item.id,
                    name: item.name,
                  })
                }
              />
            )}
          />
        </SafeAreaView>
      )}

      <TouchableOpacity
        onPress={() => navigator.navigate("createGroup")}
        style={tw`absolute bottom-4 right-4`}
        //OnPress should go to a create group stack
      >
        <Ionicons name="md-add-circle-outline" size={45} color="black" />
      </TouchableOpacity>
      {/*  */}
    </SafeAreaView>
  );
};

export default Groups;

const styles = StyleSheet.create({});
