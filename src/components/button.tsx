import { TouchableOpacity } from "react-native-gesture-handler"
import { View, Text } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { primaryColor, disabledBackgroundColor, disabledTextColor, primaryFontSize } from "../utils"
import React from "react"
interface Props {
    text: string;
    disabled?: boolean;
    width?: number | string;
    height?: number | string;
    backColor?: string,
    textColor?: string,
    onPress: () => void
}
interface States {
    text: string;
    width?: number | string;
    height?: number | string;
    backColorStatic?: string,//存储之前设定好的颜色
    textColorStatic?: string,
    backColor?: string,
    textColor?: string,
    disabled?: boolean
}
export class Button extends React.Component<Props, States>{

    static getDerivedStateFromProps(props: Props, states: States) {
        if (props.disabled !== states.disabled)
            return {
                disabled: props.disabled,
                backColor: props.disabled ? disabledBackgroundColor : states.backColorStatic,
                textColor: props.disabled ? disabledTextColor : states.textColorStatic
            }
        else
            return null
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            text: "",
            width: 115,
            height: 50,
            backColor: primaryColor,
            backColorStatic: primaryColor,
            textColor: "#fff",
            textColorStatic: "#fff",
            disabled: false
        }
    }
    componentDidMount() {
        if (this.props.text)
            this.setState({
                text: this.props.text
            })
        if (this.props.width)
            this.setState({
                width: this.props.width
            })
        if (this.props.height)
            this.setState({
                height: this.props.height
            })
        if (this.props.textColor)
            this.setState({
                textColor: this.props.textColor,
                textColorStatic: this.props.textColor
            })
        if (this.props.backColor)
            this.setState({
                backColor: this.props.backColor,
                backColorStatic: this.props.backColor
            })
        if (this.props.disabled) {
            this.setState({
                backColor: disabledBackgroundColor,
                textColor: disabledTextColor,
                disabled: true
            })
        }
    }
    render() {
        return (
            <TouchableOpacity disabled={this.state.disabled} activeOpacity={0.8} onPress={this.props.onPress}>
                <View style={{ width: this.state.width, height: this.state.height, backgroundColor: this.state.backColor, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: this.state.textColor, fontWeight: "600", fontSize: primaryFontSize }}>{this.state.text}</Text>
                </View>
            </TouchableOpacity>)
    }
}