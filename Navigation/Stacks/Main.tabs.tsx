import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tickets from "../../pages/LoggedIn/Tickets";
import Events from "../../pages/LoggedIn/Events/Events";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import GroupStack from "./Group.stack";
import { primaryColor } from "../../constants";

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
          component={GroupStack}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return (
                  <Ionicons name="people-outline" size={24} color={primaryColor} />
                );

              return <Ionicons name="people-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return <Ionicons name="card-outline" size={24} color={primaryColor} />;

              return <Ionicons name="card-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{
            headerShown: true,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return (
                  <Ionicons name="barcode-outline" size={24} color={primaryColor} />
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
