import {
  View,
  Platform,
  SafeAreaView,
  StatusBar
} from "react-native";
import React from "react";
import Foundation from "react-native-vector-icons/Foundation"
import {
  primaryColor,
  disabledBackgroundColor,
  topBarBackground
} from "../utils";
import TopBar from "../components/topBar";
import LinkItem from "../components/linkItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface Props {}
interface States {}

export default class ContactScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "联系人",
      tabBarIcon: (
        <MaterialIcons
          name="people"
          size={25}
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
                margin:2,
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
