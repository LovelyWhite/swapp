import React from "react";
import { TextInput, Text, View, StyleProp, TextStyle } from "react-native";
import { primaryColor, thirdTextColor, primaryFontSize } from "../utils";
interface Props {
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    maxLength?: number;
    leftText?: string
    leftTextStyle?: StyleProp<TextStyle>;
}

interface States {
    secureTextEntry: boolean
    maxLength?: number;
    isActive: boolean;
}
export default class Input extends React.Component<Props, States>{
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            secureTextEntry: false,
            maxLength: 18,
            isActive: false
        }
    }
    componentDidMount() {
        if (this.props.secureTextEntry)
            this.setState({
                secureTextEntry: this.props.secureTextEntry
            })
    }
    render() {
        return (<View style={{
            borderBottomColor: this.state.isActive ? primaryColor : "#ced0d6",
            borderBottomWidth: this.state.isActive?1.4:0.2, 
            justifyContent: "center",
            flexDirection:"row",
        }}>
            <Text style={[{width:80,alignSelf:"center",fontSize:16,fontWeight:"600",color:"#000",paddingLeft:15},this.props.leftTextStyle]}>{this.props.leftText}</Text>
            <TextInput
                placeholderTextColor={thirdTextColor}
                onFocus={() => {
                    this.setState({
                        isActive: true
                    })
                }}
                onBlur={() => {
                    this.setState({
                        isActive: false
                    })
                }}
                maxLength={18}
                autoCorrect={false}
                returnKeyType="join"
                secureTextEntry={this.state.secureTextEntry}
                clearTextOnFocus={true}
                style={{
                    height: 50,
                    flex:1,
                    color: "#000",
                    fontSize: 16,
                    fontWeight: "400",
                    marginRight: 7,
                    borderRadius: 5,
                    paddingHorizontal: 20
                }}
                onChangeText={this.props.onChangeText}
            >
            </TextInput>
        </View>);
    }
}