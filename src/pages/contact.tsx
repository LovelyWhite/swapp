import {
  View,
  Text,
  TextInput,
  Platform,
  SafeAreaView,
  StatusBar
} from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-elements";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  backgroundColor,
  getTimeString,
  primaryColor,
  disabledBackgroundColor,
  disabledTextColor,
  topBarBackground
} from "../utils";
import TopBar from "../components/topBar";
import LinkItem from "../components/linkItem";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {}
interface States {}

export default class ContactScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "联系人",
      tabBarIcon: (
        <Ionicons
          name="ios-people"
          size={35}
          color={
            navigation.isFocused() ? primaryColor : disabledBackgroundColor
          }
        />
      )
    };
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: topBarBackground,
          height: "100%",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#00000000"
          translucent={true}
        />
        <TopBar title={"联系人"} />
        <LinkItem
          height={50}
          image={
            <View
              style={{
                margin: 2,
                backgroundColor: "#fb9d44",
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                flex: 1
              }}
            >
              <MaterialIcons name="add" size={23} color="#fff" />
            </View>
          }
          primaryText={"新的朋友"}
          onPress={() => {}}
        />
        <LinkItem
          height={50}
          image={
            <View
              style={{
                margin: 2,
                backgroundColor: primaryColor,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                flex: 1
              }}
            >
              <MaterialIcons name="group" size={23} color="#fff" />
            </View>
          }
          primaryText={"群聊"}
          onPress={() => {}}
        />
        <LinkItem
          height={50}
          image={
            <View
              style={{
                margin: 2,
                backgroundColor: "#2882d5",
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                flex: 1
              }}
            >
              <Foundation name="price-tag" size={23} color="#fff" />
            </View>
          }
          primaryText={"标签"}
          onPress={() => {}}
        />
      </SafeAreaView>
    );
  }
}
