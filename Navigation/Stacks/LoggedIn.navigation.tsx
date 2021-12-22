import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tickets from "../../pages/LoggedIn/Tickets";
import Groups from "../../pages/LoggedIn/Groups";
import Events from "../../pages/LoggedIn/Events";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

const Tab = createBottomTabNavigator();

const LoggedInNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Groups"
          component={Groups}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return <Ionicons name="people-outline" size={24} color="blue" />;

              return <Ionicons name="people-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return <Ionicons name="card-outline" size={24} color="blue" />;

              return <Ionicons name="card-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              if (focused == true)
                return <Ionicons name="barcode-outline" size={24} color="blue" />;

              return <Ionicons name="barcode-outline" size={24} color="black" />;
            },
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default LoggedInNavigator;
