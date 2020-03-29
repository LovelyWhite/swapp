import React from "react";
import { View,Text, StatusBar, StatusBarIOS } from "react-native";
import { primaryColor, topBarBackground } from "../utils";
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
    setTitle(title:string)
    {
        this.setState({
            title
        })
    }
    componentDidMount()
    {
        this.setState({
            title:this.props.title
        })
    }
    render()
    {
        return <View style={{height:45,alignItems:"center",flexDirection:"row",justifyContent:"space-between",backgroundColor:topBarBackground,borderBottomColor:"#e0e0e0",borderBottomWidth:0.5}}>
        <Text style={{fontWeight:"700",fontSize:18,marginHorizontal:20,color:"#000"}}>{this.state.title}</Text>
        <View style={{marginHorizontal:20,flexDirection:"row"}}>
            <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="search1" size={20} color="#000"/>
            </TouchableOpacity>
            <View style={{width:20}}></View>
            <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="plus" size={20} color="#000"/>
            </TouchableOpacity>
        </View>
        </View>
    }
}