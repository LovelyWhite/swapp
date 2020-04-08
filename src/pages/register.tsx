import React from "react";
import { View, StatusBar, Text, Platform, Keyboard } from "react-native";
import { Button } from "../components/button";
import Loading from "../components/loading";
import Input from "../components/input";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions, StackActions } from "react-navigation";
import { primaryColor, primaryFontSize } from "../utils";
interface Props {
	screenProps: any;
	navigation: any;
}
interface States {
	loginBottonDisabled: boolean;
}
export default class RegisterScreen extends React.Component<Props, States> {
	//用于指示输入框输入内容是否可用
	inputOK: [boolean, boolean, boolean];
	Loading: Loading;
	constructor(props: Readonly<Props>) {
		super(props);
		this.inputOK = [false, false, false];
		this.state = {
			loginBottonDisabled: true
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.register = this.register.bind(this);
	}
	// 获取验证码
	getCode(){

	}
	//设置按钮是否可点击
	setDisable(value: boolean) {
		this.setState({
			loginBottonDisabled: value
		});
	}
	//按钮改变 index是表示具体一个输入框 0 代表手机号 1 代表密码 > inputOK
	onInputChange(text: string, index: number) {
		this.inputOK[index] = text != "";
		// 设置按钮 ok=true 代表可以点击
		let ok = this.inputOK.indexOf(false) == -1;
		this.setDisable(!ok);
	}
	//登录按钮点击事件
	async register() {
		Keyboard.dismiss();
		this.Loading.startLoading("注册中");
		this.Loading.stopLoading();
	}
	render() {
		return (
			<View style={{
				paddingHorizontal: 15, flex: 1,
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
			}}>
				<StatusBar barStyle="dark-content" backgroundColor="#00000000" translucent={true} />
				<Loading
					ref={ref => {
						this.Loading = ref;
					}}
				></Loading>
				<View style={{ marginTop: 30 }}>
					<TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.goBack() }}>
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
						leftText="手机号"
						onChangeText={text => {
							this.onInputChange(text, 0);
						}}
					/>
					<View style={{ height: 10 }}></View>
					<Input
						leftText="密码"
						secureTextEntry={true}
						onChangeText={text => {
							this.onInputChange(text, 1);
						}}
					/>
					<View style={{ height: 10 }}></View>

					<View style={{ flexDirection: "row",alignItems:"center",justifyContent:"space-between"}}>
						<Input
							containerStyle={{ flex: 1,marginRight:20 }}
							leftText="验证码"
							maxLength={4}
							onChangeText={text => {
								this.onInputChange(text, 1);
							}}
						/>
						<TouchableOpacity  onPress={()=>{
							this.getCode();
						}}>
							<Text style={{color:primaryColor,fontSize:primaryFontSize}}>获取验证码</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ marginBottom: 40 }}></View>
				<Button
					text="注册"
					width="100%"
					disabled={this.state.loginBottonDisabled}
					onPress={() => {
						this.register();
					}}
				/>
			</View>
		);
	}
}
