import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import tw from "tailwind-react-native-classnames";
import url from "../../../url";
import { Ionicons } from "@expo/vector-icons";
import Title from "../../../components/LoggedOut/Title";
import { primaryColor, TINTS } from "../../../constants";
import Description from "../../../components/Description";

const One = ({ route }) => {

  // const { height, width } = Dimensions.get('window')

  // const boxSize : number = height;
  

  // console.log(height);
  

  const navigator = useNavigation();
  const queryClient = useQueryClient();

  const { key, name } = route.params;

  // Fetch and display
  const fetchGroupEvents = () => {
    return axios.get(url + "event/" + key);
  };

  const { data, status } = useQuery(`groupEvents:${key}`, fetchGroupEvents);

  const deleteGroupEvent = (itemId: number) => {
    return axios.post(url + "event/" + itemId, {
      groupId: key,
    });
  };

  const { mutate: deleteEvent, status: statusDelete } =
    useMutation(deleteGroupEvent);

  // Route to create new events

  return (
    <SafeAreaView style={tw`items-center flex-1 pt-10  bg-white`}>
      <Description
        label={name}
        description="the measurement from base to top or (of a standing person) from head to foot."
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
        <SafeAreaView style={[styles.purpleContainer]}>
          <FlatList
            data={data?.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={tw.style(`w-full justify-center items-center mt-4 `, {
                  elevation: 3,
                })}
              >
                <View
                  style={tw` w-full flex-row flex-1 rounded bg-gray-300 px-4 py-2 justify-between items-center`}
                >
                  <Text style={tw`font-bold text-lg pr-4`}>{item.name}</Text>
                  <Ionicons
                    name="trash-outline"
                    size={24}
                    color="black"
                    onPress={() =>
                      deleteEvent(item.id, {
                        onSuccess: () =>
                          queryClient.invalidateQueries(`groupEvents:${key}`),
                      })
                    }
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default One;

const styles = StyleSheet.create({
  purpleContainer: {
    flex: 1,
    backgroundColor: TINTS.SEVEN,
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  }
});
