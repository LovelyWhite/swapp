import React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { primaryColor} from "../utils";
interface Props {}
interface States {}
export default class MeScreen extends React.Component<Props, States> {
  static navigationOptions = {
    title: "我",
    tabBarIcon:<Ionicons name="md-person" size={25} color={primaryColor} />
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Text>Me</Text>
      </>
    );
  }
}
