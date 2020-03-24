import React from "react";
import {Text} from "react-native";
interface Props {}
interface States {}
export default class ChatsScreen extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Text>Chats</Text>
      </>
    );
  }
}
