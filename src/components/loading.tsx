import React from "react";
import { View } from "react-native";
import { loadingBackground } from "../utils";

interface Props {
}
interface States {
    disabled: boolean
}
export default class Loading extends React.Component<Props, States>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            disabled: true
        }
    }
    startLoading() {
        this.setState({
            disabled: false
        })
    }
    stopLoading()
    {
        this.setState({
            disabled:true
        })
    }
    render() {
        return (
            <>
                {this.state.disabled ? (<></>) :
                    <View style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, backgroundColor: loadingBackground, zIndex: 99999 }}>
                    </View>
                }</>
        )
    }
}