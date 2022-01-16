import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMutation } from "react-query";
import tw from "tailwind-react-native-classnames";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Title from "../../../components/LoggedOut/Title";
import url from "../../../url";

// Build interfaces for members as <undefined | User>

interface GroupCreateInterface {
  name: string;
  member?: number[];
}

const Create = () => {
  const navigator = useNavigation();

  const createGroupFunction = async (group: GroupCreateInterface) => {
    const { data: createdGroup } = await axios.post(url + "group", group);
  };

  const onSuccess = () => {
    setGroupName("");
    setMembers("");
    navigator.navigate("main");
  };

  const { mutate, isError } = useMutation(createGroupFunction, { onSuccess });

  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState("");

  const verify: boolean = groupName.length > 4;

  // One created the group can create events
  return (
    <SafeAreaView style={tw`justify-center items-center flex-1 p-4  bg-white`}>
      <Title label='Create'/>
      <Input
        label="Group Name"
        placeholder="ticketr.com"
        onChangeText={setGroupName}
      />
      <Input label="Members" placeholder="John Doe" onChangeText={setMembers} />

      <Button
        isValid={verify}
        label="Create"
        onPress={() => mutate({ name: groupName })}
      />
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
