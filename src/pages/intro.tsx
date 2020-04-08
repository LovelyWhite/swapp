import React from "react";
import { View, StatusBar, Image, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { primaryColor} from "../utils";
import { Button } from "../components/button";

interface Props{
    navigation:any
}

export default class IntroScreen extends React.Component<Props> {
    render() {
        return (
            <View style={{ width: "100%", height: "100%", justifyContent: "space-between" }}>
                <StatusBar barStyle="light-content" backgroundColor="#00000000" translucent={true} />
                <Image style={{ width: "100%", height: "100%", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} resizeMode="stretch" source={require('../assets/background.jpg')} />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",marginVertical:100}}>
                    <FontAwesome5 name="bolt" color={primaryColor+"BB"} size={100}></FontAwesome5>
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 30, color: "#ffffffDD" }}>友信</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 30, paddingVertical: 30 }}>
                    <Button text="登录" onPress={()=>{this.props.navigation.navigate("Login")}}/>
                    <Button text="注册" textColor={primaryColor} backColor={"#fff"} onPress={()=>{
                        this.props.navigation.navigate("Register")
                    }}/>
                </View>
            </View>
        )
    }
}