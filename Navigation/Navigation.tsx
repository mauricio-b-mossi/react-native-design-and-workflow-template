import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoggedIn from "./Stacks/LoggedIn.navigation";
import LoggedOut from "./Stacks/LoggedOut.navigation";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../slices/loginSlice";

const Navigation = () => {
  const isUserLoggedIn = useSelector(selectLoggedIn);

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
