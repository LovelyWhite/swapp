import React from "react";
import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { primaryColor, textBoxBackground, secondaryTextColor } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LoginButton } from "../components/loginButton";
import Loading from "../components/loading";
import {NavigationScreenProp } from "react-navigation";
interface Props {
    screenProps:any;
    navigation:any;
}
interface States {
    loginBottonDisabled: boolean
}
export default class LoginScreen extends React.Component<Props, States>{
    static navigationOptions = {
        headerShown: false,
    }
    //用于指示输入框输入内容是否可用
    inputOK: [boolean, boolean];
    Loading: Loading;
    constructor(props: Readonly<Props>) {
        super(props)
        console.log(props)
        this.inputOK = [false, false]
        this.state = {
            loginBottonDisabled: true
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.login = this.login.bind(this);
    }
    //设置按钮是否可点击
    setDisable(value: boolean) {
        this.setState({
            loginBottonDisabled: value
        })
    }
    //按钮改变 index是表示具体一个输入框 0 代表手机号 1 代表密码 > inputOK
    onInputChange(text: string, index: number) {
        this.inputOK[index] = (text != "")
        // 设置按钮 ok=true 代表可以点击
        let ok = this.inputOK.indexOf(false) ==-1
        this.setDisable(!ok)
    }
    //登录按钮点击事件
    login()
    {
        this.Loading.startLoading();
        this.props.navigation.navigate("Main");
    }
    render() {
        return <View style={{ height: "100%", backgroundColor: "#fff" }}>
            <Loading ref={(ref)=>{this.Loading = ref}}></Loading>
            <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5 name="bolt" color={primaryColor} size={50}></FontAwesome5>
                <View style={{ width: 10 }}></View>
                <Text style={{ fontSize: 35 }}>友信</Text>
            </View>
            <View style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}>
                <TextInput
                    placeholderTextColor={secondaryTextColor}
                    placeholder="手机号"
                    maxLength={18}
                    keyboardType="phone-pad"
                    style={styles.keyBorad}
                    onChangeText={(text) => {
                        this.onInputChange(text, 0)
                    }}
                />
                <View style={{ height: 10 }}></View>
                <TextInput
                    placeholderTextColor={secondaryTextColor}
                    maxLength={18}
                    autoCorrect={false}
                    returnKeyType="join"
                    secureTextEntry={true}
                    clearTextOnFocus={true}
                    placeholder="输入密码"
                    style={styles.keyBorad}
                    onChangeText={(text) => {
                        this.onInputChange(text, 1)
                    }}
                />
                <LoginButton disabled={this.state.loginBottonDisabled} onPress={() => { this.login()}} />
            </View>
            <View style={{ flex: 4, flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", marginBottom: 30 }}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ color: "#000", fontWeight: "700" }} >忘记密码</Text>
                </TouchableOpacity>
                <Text>|</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={{ color: "#000", fontWeight: "700" }} >用户注册</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}
const styles = StyleSheet.create({
    keyBorad: {

        textAlign: "center",
        height: 50,
        width: "80%",
        color: "#000",
        fontSize: 16,
        fontWeight: "400",
        backgroundColor: textBoxBackground,
        marginRight: 7,
        borderRadius: 30,
        paddingHorizontal: 20,
    }
})