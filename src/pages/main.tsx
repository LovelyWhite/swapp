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
      tabStyle:{marginVertical:5},
      activeTintColor: primaryColor,
      labelStyle:{fontWeight:"700"},
      style:{borderTopColor:"#e2e2e2",backgroundColor:"#f7f7f7",height:55}
    }
  }
);
export default TabNavigator;
