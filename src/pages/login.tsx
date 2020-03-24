import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"
import { primaryColor, textBoxBackground } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
    s
}
interface States {

}
export default class LoginScreen extends React.Component<Props, States>{
    static navigationOptions = {
        headerShown: false,
    }
    render() {
        return <View style={{ height: "100%", backgroundColor: "#fff" }}>
            <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <FontAwesome5 name="bolt" color={primaryColor} size={50}></FontAwesome5>
                <Text style={{ fontSize: 35 }}>友信</Text>
            </View>
            <View style={{ flex: 2, justifyContent: "flex-start", alignItems: "center" }}>
                <TextInput
                    style={{
                        height: 55,
                        width: "80%",
                        fontSize: 13,
                        fontWeight: "600",
                        backgroundColor: textBoxBackground,
                        marginRight: 7,
                        borderRadius: 30,
                        paddingHorizontal: 10
                    }}
                />
                <View style={{ height: 10 }}></View>
                <TextInput
                    style={{
                        height: 55,
                        width: "80%",
                        fontSize: 13,
                        fontWeight: "600",
                        backgroundColor: textBoxBackground,
                        marginRight: 7,
                        borderRadius: 30,
                        paddingHorizontal: 10
                    }}
                />
            </View>
            <View style={{justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={{ width: 80, height: 80, backgroundColor: primaryColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                        <AntDesign name="arrowright" color="#fff" size={50}></AntDesign>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly" }}>
                <Button title="忘记密码" type="clear" />
                <Button title="用户注册" type="clear" />
            </View>
        </View>
    }
}