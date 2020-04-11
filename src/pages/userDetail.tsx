import React from "react";
import { NavigationEvents } from "react-navigation";
import {
  StatusBar,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import {
  topBarBackground,
  disabledBackgroundColor,
  primaryFontSize,
  thirdTextColor,
} from "../utils";
import ReturnBar from "../components/returnBar";
import LinkItem from "../components/linkItem";
import AntDesign from "react-native-vector-icons/AntDesign";
import { LoginData, getGlobal } from "../global/global";

interface Props {
  navigation: any;
}
interface States {
  loginData: LoginData;
}
export default class UserDetailScreen extends React.Component<Props, States> {
  //   static navigationOptions = ({ navigation }) => {
  //     // return {};
  //   };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      loginData: null,
    };
  }
  componentDidMount() {
    this.setState({
      loginData: getGlobal<LoginData>("loginData"),
    });
  }
  render() {
    const { loginData } = this.state;
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
        <ReturnBar navigation={this.props.navigation} text="个人信息" />
        <LinkItem
          style={{
            borderBottomWidth: 0.333,
            borderBottomColor: disabledBackgroundColor,
          }}
          primaryText="头像"
          showIcon={false}
          showArrow={true}
          rightView={
            <View style={{ justifyContent: "center", paddingRight: 5 }}>
              <Image
                width={40}
                height={40}
                style={{ borderRadius: 5 }}
                source={{ uri: loginData && loginData.minPortrait }}
              ></Image>
            </View>
          }
          leftTextContainerStyle={{ marginLeft: 20 }}
        />
        <LinkItem
          style={{
            borderBottomWidth: 0.333,
            borderBottomColor: disabledBackgroundColor,
          }}
          primaryText="昵称"
          thirdText={loginData && loginData.userName}
          thirdTextStyle={{
            alignSelf: "center",
            fontSize: primaryFontSize,
            paddingRight: 5,
          }}
          showIcon={false}
          showArrow={true}
          leftTextContainerStyle={{ marginLeft: 20 }}
        />
        <LinkItem
          style={{
            borderBottomWidth: 0.333,
            borderBottomColor: disabledBackgroundColor,
          }}
          primaryText="手机号"
          thirdText={loginData && loginData.phone}
          thirdTextStyle={{
            alignSelf: "center",
            fontSize: primaryFontSize,
            paddingRight: 5,
          }}
          showIcon={false}
          showArrow={true}
          leftTextContainerStyle={{ marginLeft: 20 }}
        />
        <LinkItem
          style={{
            borderBottomWidth: 0.333,
            borderBottomColor: disabledBackgroundColor,
          }}
          primaryText="二维码名片"
          showIcon={false}
          showArrow={true}
          rightView={
            <View style={{ justifyContent: "center", paddingRight: 5 }}>
              <AntDesign name="qrcode" size={20} color={thirdTextColor} />
            </View>
          }
          leftTextContainerStyle={{ marginLeft: 20 }}
        />
        <LinkItem
          primaryText="更多"
          showIcon={false}
          showArrow={true}
          leftTextContainerStyle={{ marginLeft: 20 }}
        />
        <View style={{ flex: 1 }}></View>
      </SafeAreaView>
    );
  }
}
