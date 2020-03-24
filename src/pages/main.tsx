import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChatsScreen from "./chats";
import ContactScreen from "./contact";
import MeScreen from "./me";
const TabNavigator = createBottomTabNavigator({
    Chats:{
        screen:ChatsScreen,
    },
    Contacts:{
        screen:ContactScreen,
    },
    Me:{
        screen:MeScreen,
    }
  });
export default TabNavigator;