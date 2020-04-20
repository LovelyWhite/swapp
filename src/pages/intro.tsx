import React from "react";
import { View, StatusBar, Image, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { primaryColor, getData } from "../utils";
import { Button } from "../components/button";
import {
  NavigationEvents,
  StackActions,
  NavigationActions,
} from "react-navigation";
import Loading from "../components/loading";
import { setGlobal } from "../global/global";
interface Props {
  navigation: any;
}

export default class IntroScreen extends React.Component<Props> {
  Loading: Loading;
  async componentDidMount() {
    let data = null;
    this.Loading.startLoading("加载中");
    try {
      data = await getData("loginData");
      this.Loading.stopLoading();
      setGlobal("loginData", data);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Main" })],
      });
      this.props.navigation.dispatch(resetAction);
    } catch (e) {
      this.Loading.stopLoading();
    } finally {
    }
  }
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <StatusBar
          backgroundColor="#00000000"
          translucent={true}
          barStyle="light-content"
        />
        <Loading
          ref={(ref) => {
            this.Loading = ref;
          }}
        />
        <NavigationEvents
          onWillFocus={() => {
            StatusBar.setBackgroundColor("#00000000");
            StatusBar.setTranslucent(true);
            StatusBar.setBarStyle("light-content");
          }}
        />
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          resizeMode="stretch"
          source={require("../assets/background.jpg")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 100,
          }}
        >
          <FontAwesome5
            name="bolt"
            color={primaryColor + "BB"}
            size={100}
          ></FontAwesome5>
          <View style={{ width: 10 }}></View>
          <Text style={{ fontSize: 30, color: "#ffffffDD" }}>友信</Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 30,
            paddingVertical: 30,
          }}
        >
          <Button
            text="登录"
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          />
          <Button
            text="注册"
            textColor={primaryColor}
            backColor={"#fff"}
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          />
        </View>
      </View>
    );
  }
}
