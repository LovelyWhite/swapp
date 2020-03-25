import React from "react";
import { View,Text, StatusBar, StatusBarIOS } from "react-native";
import { primaryColor } from "../utils";
import AntDesign from "react-native-vector-icons/AntDesign"
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props{
    title:string
}
interface States{
    title:string
}
export default class TopBar extends React.Component<Props,States>{
    constructor(props: Readonly<Props>)
    {
        super(props);
        this.state ={
            title:""
        }
    }
    componentDidMount()
    {
        this.setState({
            title:this.props.title
        })
    }
    render()
    {
        return <View style={{height:40,alignItems:"center",justifyContent:"space-between",backgroundColor:primaryColor}}>
        <StatusBar backgroundColor={primaryColor} />
        <Text style={{fontWeight:"600",fontSize:18,marginHorizontal:20,color:"#fff"}}>{this.state.title}</Text>
        <View style={{marginHorizontal:20,flexDirection:"row"}}>
            <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="search1" size={20} color="#fff"/>
            </TouchableOpacity>
            <View style={{width:10}}></View>
            <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="plus" size={20} color="#fff"/>
            </TouchableOpacity>
        </View>
        </View>
    }
}