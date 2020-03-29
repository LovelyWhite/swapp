import React from "react";
import { Text, View, StatusBar, SafeAreaView, Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  primaryColor,
  disabledTextColor,
  disabledBackgroundColor,
  topBarBackground
} from "../utils";
import TopBar from "../components/topBar";
interface Props {}
interface States {}
export default class MeScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "我",
      tabBarIcon: (
        <Ionicons
          name="md-person"
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
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: topBarBackground, height: "100%" ,paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#00000000" translucent={true} />
        <TopBar title={"我"} />
        <View style={{ flex: 1, backgroundColor: "#fff" }}></View>
      </SafeAreaView>
    );
  }
}
