import React from "react";
import {Text } from "react-native";
interface Props {}
interface States {}
export default class MeScreen extends React.Component<Props, States> {
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
