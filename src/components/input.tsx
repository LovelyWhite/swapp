import React from "react";
import { TextInput, Text, View, StyleProp, TextStyle, ViewStyle } from "react-native";
import { primaryColor, thirdTextColor } from "../utils";
interface Props {
    containerStyle?:StyleProp<ViewStyle>;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    maxLength?: number;
    leftText?: string
    leftTextStyle?: StyleProp<TextStyle>;
}

interface States {
    secureTextEntry: boolean
    isActive: boolean;
}
export default class Input extends React.Component<Props, States>{
    constructor(props: Readonly<Props>) {
        super(props)
        this.state = {
            secureTextEntry: false,
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
        return (<View style={[{
            borderBottomColor: this.state.isActive ? primaryColor : "#ced0d6",
            borderBottomWidth: this.state.isActive?1.4:0.2, 
            justifyContent: "center",
            flexDirection:"row"
        },this.props.containerStyle]}>
            <Text style={[{width:65,alignSelf:"center",fontSize:16,fontWeight:"600",color:"#000",paddingLeft:15},this.props.leftTextStyle]}>{this.props.leftText}</Text>
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
                maxLength={this.props.maxLength?this.props.maxLength:18}
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
                    paddingHorizontal: 10
                }}
                onChangeText={this.props.onChangeText}
            >
            </TextInput>
        </View>);
    }
}