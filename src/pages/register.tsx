import React from "react";
import { View, StatusBar, Text, Platform, Keyboard, Alert } from "react-native";
import { Button } from "../components/button";
import Loading from "../components/loading";
import Input from "../components/input";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  primaryColor,
  primaryFontSize,
  fetchData,
  requestURL,
  disabledTextColor,
} from "../utils";
import { NavigationEvents } from "react-navigation";
interface Props {
  screenProps: any;
  navigation: any;
}
interface States {
  loginBottonDisabled: boolean;
  nickName: string; //服务器端对应 userName
  phone: string;
  password: string;
  code: string;
  codeCold: boolean; //验证码是否正在冷却
  codeColdTime: number; //冷却时间
}
export default class RegisterScreen extends React.Component<Props, States> {
  //用于指示输入框输入内容是否可用
  inputOK: boolean[];
  Loading: Loading;
  constructor(props: Readonly<Props>) {
    super(props);
    this.inputOK = [false, false, false, false];
    this.state = {
      nickName: "",
      phone: "",
      password: "",
      code: "",
      loginBottonDisabled: true,
      codeCold: false,
      codeColdTime: 60,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.register = this.register.bind(this);
    this.getCode = this.getCode.bind(this);
  }
  // 获取验证码
  async getCode() {
    let interval = null;
    const { phone } = this.state;
    if (phone != "") {
      this.Loading.startLoading("正在获取验证码");
      let result = await fetchData(requestURL + "/userInfo/getCode", "post", {
        data: {
          phone,
        },
      });
      this.Loading.stopLoading();
      let isOK = result.code === "200" && result.success;
      if (isOK) {
        this.setState({
          codeCold: true,
        });
        interval = setInterval(() => {
          this.setState(
            {
              codeColdTime: this.state.codeColdTime - 1,
            },
            () => {
              if (this.state.codeColdTime === 0) {
                this.setState(
                  {
                    codeCold: false,
                    codeColdTime: 60,
                  },
                  () => {
                    clearInterval(interval);
                  }
                );
              }
            }
          );
        }, 1000);
      }
      Alert.alert(isOK ? "提示" : "错误", result.msg, [
        {
          text: "知道了",
          onPress: () => {
            isOK ? this.props.navigation.goBack() : () => {};
          },
        },
      ]);
    } else {
      Alert.alert("提示", "请输入手机号");
    }
  }
  //设置按钮是否可点击
  setDisable(value: boolean) {
    this.setState({
      loginBottonDisabled: value,
    });
  }
  //按钮改变 index是表示具体一个输入框 0 代表手机号 1 代表密码 > inputOK
  onInputChange(text: string, index: number) {
    switch (index) {
      case 0:
        this.setState({
          phone: text,
        });
        break;
      case 1:
        this.setState({
          password: text,
        });
        break;
      case 2:
        this.setState({
          code: text,
        });
        break;
      case 3:
        this.setState({
          nickName: text,
        });
        break;
    }
    this.inputOK[index] = text != "";
    // 设置按钮 ok=true 代表可以点击
    let ok = this.inputOK.indexOf(false) == -1;
    this.setDisable(!ok);
  }
  //登录按钮点击事件
  async register() {
    Keyboard.dismiss();

    this.Loading.startLoading("注册中");
    let result = await fetchData(requestURL + "/userInfo/register", "post", {
      data: {
        phone: this.state.phone,
        code: this.state.code,
        password: this.state.password,
        userName: this.state.nickName,
      },
    });
    this.Loading.stopLoading();
    let isOK = result.code === "200" && result.success;
    Alert.alert(isOK ? "提示" : "错误", result.msg, [
      {
        text: "知道了",
        onPress: () => {
          isOK ? this.props.navigation.goBack() : () => {};
        },
      },
    ]);
  }
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <NavigationEvents
          onWillFocus={() => {
            StatusBar.setBarStyle("dark-content");
            StatusBar.setBackgroundColor("#00000000");
          }}
        />
        <Loading
          ref={(ref) => {
            this.Loading = ref;
          }}
        ></Loading>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <AntDesign name="close" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 30 }}></View>
        <Text style={{ fontSize: 22, fontWeight: "600", color: "#000" }}>
          手机号注册
        </Text>
        <View style={{ marginBottom: 40 }}></View>
        <View>
          <Input
            leftText="昵称"
            onChangeText={(text) => {
              this.onInputChange(text, 3);
            }}
          />
          <View style={{ height: 10 }}></View>
          <Input
            leftText="手机号"
            onChangeText={(text) => {
              this.onInputChange(text, 0);
            }}
          />
          <View style={{ height: 10 }}></View>
          <Input
            leftText="密码"
            secureTextEntry={true}
            onChangeText={(text) => {
              this.onInputChange(text, 1);
            }}
          />
          <View style={{ height: 10 }}></View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Input
              containerStyle={{ flex: 1, marginRight: 20 }}
              leftText="验证码"
              maxLength={4}
              onChangeText={(text) => {
                this.onInputChange(text, 2);
              }}
            />
            <TouchableOpacity
              disabled={this.state.codeCold}
              onPress={this.getCode}
            >
              {this.state.codeCold ? (
                <Text
                  style={{
                    color: disabledTextColor,
                    fontSize: primaryFontSize,
                  }}
                >
                  {this.state.codeColdTime + "秒后重试"}
                </Text>
              ) : (
                <Text
                  style={{ color: primaryColor, fontSize: primaryFontSize }}
                >
                  获取验证码
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 40 }}></View>
        <Button
          text="注册"
          width="100%"
          disabled={this.state.loginBottonDisabled}
          onPress={this.register}
        />
      </View>
    );
  }
}
