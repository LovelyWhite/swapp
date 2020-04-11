import React from "react";
import { NavigationEvents } from "react-navigation";
import { StatusBar, View, SafeAreaView, Platform } from "react-native";
import { topBarBackground } from "../utils";

interface Props {
  navigation: any;
}
interface States {}
export default class UserDetailScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {};
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: topBarBackground,
          height: "100%",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <NavigationEvents
          onWillFocus={() => {
            StatusBar.setBackgroundColor(topBarBackground);
          }}
        />
      </SafeAreaView>
    );
  }
}
