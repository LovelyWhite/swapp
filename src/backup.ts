//仿QQ界面


/*
*
*   loginButton.tsx
*
*/
// import { TouchableOpacity } from "react-native-gesture-handler"
// import { View, ToastAndroid } from "react-native"
// import AntDesign from "react-native-vector-icons/AntDesign"
// import { primaryColor, disabledBackgroundColor } from "../utils"
// import React from "react"
// interface Props {
//     disabled: boolean;
//     onPress: () => void
// }
// interface States {
//     backColor: string,
//     disabled:boolean
// }
// export class LoginButton extends React.Component<Props, States>{

//     static getDerivedStateFromProps(props:Props, states:States){
//         if(props.disabled !== states.disabled)
//             return{
//                 disabled:props.disabled,
//                 backColor:props.disabled?disabledBackgroundColor:primaryColor
//             }
//             else
//             return null
//     }
//     constructor(props: Readonly<Props>) {
//         super(props);
//         this.state = {
//             backColor: disabledBackgroundColor,
//             disabled:true
//         }
//     }
//     componentDidMount()
//     {
//         if (this.props.disabled) {
//             this.setState({
//                 backColor: disabledBackgroundColor,
//                 disabled:true
//             })
//         }
//         else {
//             this.setState({
//                 backColor: primaryColor,
//                 disabled:false
//             })
//         }
//     }
//     render() {
//         return (<TouchableOpacity disabled={this.state.disabled} activeOpacity={0.8} style={{ marginTop: 30 }} onPress={this.props.onPress}>
//             <View style={{ width: 70, height: 70, backgroundColor: this.state.backColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
//                 <AntDesign name="arrowright" color="#fff" size={30}></AntDesign>
//             </View>
//         </TouchableOpacity>)
//     }
// }


// render() {
//     return <View style={{ height: "100%", backgroundColor: "#fff" }}>
//         <Loading ref={(ref)=>{this.Loading = ref}}></Loading>
//         <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
//             <FontAwesome5 name="bolt" color={primaryColor} size={50}></FontAwesome5>
//             <View style={{ width: 10 }}></View>
//             <Text style={{ fontSize: 35 }}>友信</Text>
//         </View>
//         <View style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}>
//             <TextInput
//                 placeholderTextColor={thirdTextColor}
//                 placeholder="手机号"
//                 maxLength={18}
//                 keyboardType="phone-pad"
//                 style={styles.keyBorad}
//                 onChangeText={(text) => {
//                     this.onInputChange(text, 0)
//                 }}
//             />
//             <View style={{ height: 10 }}></View>
//             <TextInput
//                 placeholderTextColor={thirdTextColor}
//                 maxLength={18}
//                 autoCorrect={false}
//                 returnKeyType="join"
//                 secureTextEntry={true}
//                 clearTextOnFocus={true}
//                 placeholder="输入密码"
//                 style={styles.keyBorad}
//                 onChangeText={(text) => {
//                     this.onInputChange(text, 1)
//                 }}
//             />
//             <LoginButton disabled={this.state.loginBottonDisabled} onPress={() => { this.login()}} />
//         </View>
//         <View style={{ flex: 4, flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", marginBottom: 30 }}>
//             <TouchableOpacity activeOpacity={0.7}>
//                 <Text style={{ color: "#000", fontWeight: "700" }} >忘记密码</Text>
//             </TouchableOpacity>
//             <Text>|</Text>
//             <TouchableOpacity activeOpacity={0.7}>
//                 <Text style={{ color: "#000", fontWeight: "700" }} >用户注册</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
// }