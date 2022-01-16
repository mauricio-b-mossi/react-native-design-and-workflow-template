import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import { primaryColor } from "../../constants";
import LoggedIn from "../../pages/LoggedIn/LoggedIn";
import TabDummy from "../../pages/LoggedIn/TabDummy";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Tab.Navigator
        screenOptions={{
          headerTitle: () => <Header />,
        }}
      >
        <Tab.Screen
          name="Groups"
          component={LoggedIn}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return (
                  <Ionicons
                    name="people-outline"
                    size={24}
                    color={primaryColor}
                  />
                );

              return <Ionicons name="people-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Tab 2"
          component={TabDummy}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return (
                  <Ionicons
                    name="card-outline"
                    size={24}
                    color={primaryColor}
                  />
                );

              return <Ionicons name="card-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Tab 3"
          component={TabDummy}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return (
                  <Ionicons
                    name="barcode-outline"
                    size={24}
                    color={primaryColor}
                  />
                );

              return (
                <Ionicons name="barcode-outline" size={24} color="black" />
              );
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainTabs;
