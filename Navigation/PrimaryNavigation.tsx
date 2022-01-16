import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import LoggedIn from "./Stacks/Main.navigation";
import LoggedIn from "./Stacks/MainStacks/LoggedIn.navigation";
import LoggedOut from "./Stacks/MainStacks/LoggedOut.navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn, setLoggedIn } from "../slices/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { selectToken, setUser } from "../slices/userSlice";
import tw from "tailwind-react-native-classnames";

const Navigation = () => {
  const isUserLoggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const value = await AsyncStorage.getItem("@user");
        if (value !== null) {
          const user = await JSON.parse(value);
          await dispatch(setUser(user));
          await dispatch(setLoggedIn(true));
        }
      } catch (error) {
        console.log(error);
        return;
      }
    };

    getData();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          {/* Conditionally rendering each stack */}
          {isUserLoggedIn ? <LoggedIn /> : <LoggedOut />}
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
