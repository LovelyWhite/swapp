import React from "react";
import { View, Text } from "react-native";
import { topBarBackground } from "../utils";

import { List, Popover } from "@ant-design/react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  title: string;
}
interface States {
  title: string;
}
export default class TopBar extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      title: "",
    };
  }
  setTitle(title: string) {
    this.setState({
      title,
    });
  }
  componentDidMount() {
    this.setState({
      title: this.props.title,
    });
  }
  render() {
    return (
      <View
        style={{
          height: 45,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: topBarBackground,
          borderBottomColor: "#e0e0e0",
          borderBottomWidth: 0.5,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            marginHorizontal: 20,
            color: "#000",
          }}
        >
          {this.state.title}
        </Text>
        <View style={{ marginHorizontal: 20, flexDirection: "row" }}>
          <TouchableOpacity activeOpacity={0.6}>
            <AntDesign name="search1" size={20} color="#000" />
          </TouchableOpacity>
          <View style={{ width: 20 }}></View>
          <Popover
            placement="left"
            overlay={
              <View
                style={{
                  backgroundColor: "#4c4c4c",
                }}
              >
                <View
                  style={{
                    width: 120,
                    flexDirection: "row",
                    height: 40,
                    paddingLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={20} color="#fff" />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      flex: 1,
                      marginLeft: 5,
                      borderBottomColor: "#5b5b5b",
                      borderBottomWidth: 0.333,
                    }}
                  >
                    发起群聊
                  </Text>
                </View>
              </View>
            }
          >
            <AntDesign name="plus" size={20} color="#000" />
          </Popover>
        </View>
      </View>
    );
  }
}
