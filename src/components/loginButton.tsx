import { TouchableOpacity } from "react-native-gesture-handler"
import { View, ToastAndroid } from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import { primaryColor, disabledPrimaryColor } from "../utils"
import React from "react"
interface Props {
    disabled: boolean;
    onPress: () => void
}
interface States {
    backColor: string,
    disabled:boolean
}
export class LoginButton extends React.Component<Props, States>{

    static getDerivedStateFromProps(props:Props, states:States){
        if(props.disabled !== states.disabled)
            return{
                disabled:props.disabled,
                backColor:props.disabled?disabledPrimaryColor:primaryColor
            }
            else
            return null
    }
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            backColor: disabledPrimaryColor,
            disabled:true
        }
    }
    componentDidMount()
    {
        if (this.props.disabled) {
            this.setState({
                backColor: disabledPrimaryColor,
                disabled:true
            })
        }
        else {
            this.setState({
                backColor: primaryColor,
                disabled:false
            })
        }
    }
    render() {
        return (<TouchableOpacity disabled={this.state.disabled} activeOpacity={0.8} style={{ marginTop: 30 }} onPress={this.props.onPress}>
            <View style={{ width: 70, height: 70, backgroundColor: this.state.backColor, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                <AntDesign name="arrowright" color="#fff" size={30}></AntDesign>
            </View>
        </TouchableOpacity>)
    }
}