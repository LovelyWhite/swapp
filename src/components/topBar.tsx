import React from "react";
import { View, Text } from "react-native";
import { topBarBackground } from "../utils";

import { List, Popover } from "@ant-design/react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  title: string;
  navigation: any;
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
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              console.log(this.props.navigation.navigate("Search"));
            }}
          >
            <AntDesign name="search1" size={20} color="#000" />
          </TouchableOpacity>
          <View style={{ width: 20 }}></View>
          <Popover
            placement="left"
            renderOverlayComponent={(node) => {
              return <View style={{ backgroundColor: "#4c4c4c" }}>{node}</View>;
            }}
            overlay={
              <>
                <Popover.Item value="1">
                  <View
                    style={{
                      width: 120,
                      flexDirection: "row",
                      paddingLeft: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="chat"
                        size={20}
                        color="#fff"
                      />
                    </View>

                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        flex: 1,
                        marginLeft: 7,
                        paddingHorizontal: 3,
                      }}
                    >
                      发起群聊
                    </Text>
                  </View>
                </Popover.Item>
                <Popover.Item value="2">
                  <View
                    style={{
                      width: 120,
                      flexDirection: "row",
                      paddingLeft: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="account-plus"
                        size={22}
                        color="#fff"
                      />
                    </View>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        flex: 1,
                        marginLeft: 7,
                        paddingHorizontal: 3,
                      }}
                    >
                      添加朋友
                    </Text>
                  </View>
                </Popover.Item>
                <Popover.Item value="2">
                  <View
                    style={{
                      width: 120,
                      flexDirection: "row",
                      paddingLeft: 10,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 25,
                        height: 25,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="qrcode-scan"
                        size={19}
                        color="#fff"
                      />
                    </View>
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "700",
                        flex: 1,
                        marginLeft: 7,
                        paddingHorizontal: 3,
                      }}
                    >
                      扫一扫
                    </Text>
                  </View>
                </Popover.Item>
              </>
            }
          >
            <AntDesign name="plus" size={20} color="#000" />
          </Popover>
        </View>
      </View>
    );
  }
}
