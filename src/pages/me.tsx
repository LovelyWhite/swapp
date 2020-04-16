import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  primaryColor,
  disabledTextColor,
  disabledBackgroundColor,
  topBarBackground,
  secondaryTextColor,
  secondaryFontSize,
  primaryFontSize,
} from "../utils";
import { getGlobal, LoginData } from "../global/global";
import LinkItem from "../components/linkItem";
import { NavigationEvents } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
interface Props {
  navigation: any;
}
interface States {
  loginData: LoginData;
}
export default class MeScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "我",
      tabBarIcon: (
        <MaterialIcons
          name="person"
          size={25}
          color={
            navigation.isFocused() ? primaryColor : disabledBackgroundColor
          }
        />
      ),
    };
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      loginData: null,
    };
    this.toUserDetail = this.toUserDetail.bind(this);
  }
  toUserDetail() {
    this.props.navigation.navigate("UserDetail");
  }
  componentDidMount() {
    this.setState({
      loginData: getGlobal<LoginData>("loginData"),
    });
  }
  render() {
    const { loginData } = this.state;
    console.log(loginData);
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
            StatusBar.setBackgroundColor("#fff");
          }}
        />
        <TouchableWithoutFeedback
          onPress={this.toUserDetail}
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            paddingHorizontal: 30,
            height: 110,
            alignItems: "center",
          }}
        >
          <Image
            width={50}
            height={50}
            style={{ borderRadius: 5 }}
            source={{ uri: loginData && loginData.minPortrait }}
          ></Image>

          <View
            style={{
              height: 50,
              marginHorizontal: 20,
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#000", fontWeight: "700", fontSize: 18 }}>
              {loginData && loginData.userName}
            </Text>
            <Text style={{ color: secondaryTextColor, fontSize: 14 }}>
              手机号:{loginData && loginData.phone}
            </Text>
          </View>
          <View style={{ height: 50, justifyContent: "flex-end" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="qrcode" size={15} />
              <View style={{ marginLeft: 5 }}></View>
              <AntDesign name="right" size={13}></AntDesign>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{ marginTop: 7 }}></View>
        <LinkItem
          showIcon={true}
          showArrow={true}
          height={50}
          image={
            <View
              style={{
                backgroundColor: "#00000000",
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <AntDesign name="pay-circle-o1" size={20} color={primaryColor} />
            </View>
          }
          primaryText={"支付"}
          onPress={() => {}}
        />
        <View style={{ marginTop: 7 }}></View>
        <LinkItem
          showIcon={true}
          showArrow={true}
          height={50}
          image={
            <View
              style={{
                backgroundColor: "#00000000",
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <AntDesign name="setting" size={20} color="blue" />
            </View>
          }
          primaryText={"设置"}
          onPress={() => {}}
        />
        <View style={{ flex: 1, backgroundColor: topBarBackground }}></View>
      </SafeAreaView>
    );
  }
}
