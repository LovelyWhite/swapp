import React from "react";
import { View } from "react-native";
import { loadingBackground } from "../utils";
import { createBottomTabNavigator } from 'react-navigation-tabs';
createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
interface Props {
}
interface States {
}
export default class MainScreen extends React.Component<Props, States>{
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
            
            </>
        )
    }
}