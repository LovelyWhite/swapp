import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ChatsScreen from "./chats";
import ContactScreen from "./contact";
import MeScreen from "./me";
import { primaryColor } from "../utils";
const TabNavigator = createBottomTabNavigator(
  {
    Chats: {
      screen: ChatsScreen
    },
    Contacts: {
      screen: ContactScreen
    },
    Me: {
      screen: MeScreen
    }
  },
  {
    tabBarOptions: {
      activeTintColor: primaryColor,
      style:{borderTopColor:"#ffffffee"}
    }
  }
);
export default TabNavigator;
