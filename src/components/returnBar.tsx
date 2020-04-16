import React from "react";
import { View, StyleProp, Text, ViewStyle } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { topBarBackground } from "../utils";

interface Props {
  onBackPress?: () => void;
  style?: StyleProp<ViewStyle>;
  text?: string;
  navigation: any;
}
interface States {}
export default class ReturnBar extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={[
          {
            height: 50,
            width: "100%",
            flexDirection: "row",
            backgroundColor: topBarBackground,
            paddingHorizontal: 10,
            alignItems: "center",
          },
          this.props.style,
        ]}
      >
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => {
            this.props.onBackPress && this.props.onBackPress();
            this.props.navigation.goBack();
          }}
        >
          <Ionicons name="ios-arrow-back" size={20} />
        </TouchableOpacity>
        <Text
          style={{ flex: 1, marginLeft: 10, fontSize: 17, color: "#000" }}
          numberOfLines={1}
        >
          {this.props.text && this.props.text}
        </Text>
      </View>
    );
  }
}
