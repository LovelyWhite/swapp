import React from "react";
import { NavigationEvents } from "react-navigation";
import { StatusBar, View, SafeAreaView, Platform } from "react-native";
import { topBarBackground } from "../utils";
import { SearchBar } from "react-native-elements";
interface Props {
  navigation: any;
}
interface States {
  search: string;
}
export default class SearchScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {};
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = { search: "" };
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
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
        <SearchBar
          containerStyle={{
            borderBottomWidth: 0,
            borderTopWidth: 0,
            paddingHorizontal: 5,
            paddingVertical: 0,
            minHeight: 0,
            height: 40,
            backgroundColor: topBarBackground,
            justifyContent: "center",
          }}
          inputContainerStyle={{
            borderRadius: 6,
            minWidth: 0,
            height: 30,
            marginHorizontal: 5,
            marginVertical: 10,
            backgroundColor: "#fff",
            alignContent: "center",
          }}
          inputStyle={{
            fontSize: 12,
            minHeight: 0,
            height: 40,
          }}
          placeholder="搜索"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
      </SafeAreaView>
    );
  }
}
