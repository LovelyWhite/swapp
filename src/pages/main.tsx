import React from "react";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ChatsScreen from "./chats";
import ContactScreen from "./contact";
import MeScreen from "./me";
import {createAppContainer } from "react-navigation";
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
  const TabContainer = createAppContainer(TabNavigator)
interface Props {
}
interface States {
}
export default class MainScreen extends React.Component<Props, States>{
    render() {
        return <TabContainer />
    }
}