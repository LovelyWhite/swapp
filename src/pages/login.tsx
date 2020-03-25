import React from "react";
import { View, StatusBar, Text } from "react-native";
import { Button } from "../components/button";
import Loading from "../components/loading";
import Input from "../components/input";
import AntDesign from "react-native-vector-icons/AntDesign"
interface Props {
    screenProps: any;
    navigation: any;
}
interface States {
    loginBottonDisabled: boolean
}
export default class LoginScreen extends React.Component<Props, States>{
    //用于指示输入框输入内容是否可用
    inputOK: [boolean, boolean];
    Loading: Loading;
    constructor(props: Readonly<Props>) {
        super(props)
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
        let ok = this.inputOK.indexOf(false) == -1
        this.setDisable(!ok)
    }
    //登录按钮点击事件
    async login() {
        this.Loading.startLoading();
        // await new Promise((r,s)=>{
        //     setTimeout(30000,()=>{r("11")})
        // })
        this.Loading.stopLoading();
        this.props.navigation.replace("Main");
    }
    render() {
        return <View style={{marginHorizontal:10 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#00000000" />
            <View style={{height:50,justifyContent:"center"}}>
                <AntDesign name="close" size={24}/>
            </View>
            <View style={{marginBottom:30}}></View>
            <Loading ref={(ref) => { this.Loading = ref }}></Loading>
            <Text style={{fontSize:25,fontWeight:"700",color:"#000"}}>手机号登录</Text>
            <View style={{marginBottom:40}}></View>
            <View>
                <Input leftText="手机号" onChangeText={(text) => { this.onInputChange(text, 0) }} />
                <View style={{ height: 10 }}></View>
                <Input leftText="密码" secureTextEntry={true} onChangeText={(text) => { this.onInputChange(text, 1) }} />
            </View>
            <View style={{marginBottom:40}}></View>
            <Button text="登录" width="100%" disabled={this.state.loginBottonDisabled} onPress={() => { this.login() }} />
        </View>
    }
}
