import { View, Text, TextInput } from "react-native";
import React from "react";
// import { Button } from "@ant-design/react-native";
import { Avatar, Button } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, getTimeString } from "../utils";

interface Message {
  date: number; //发送日期
  sendId: string; //发送者
  content: string; //内容 目前暂为字符串
  sendName: string; //发送者昵称
  sendHeaderPhoto: string; //URL
}

interface Props {}
interface States {
  msgList: Message[];
  sendBoxText: string;
}

export default class HomeScreen extends React.Component<Props, States> {
  constructor(props) {
    super(props);
    this.state = {
      sendBoxText: "",
      msgList: [
        {
          date: Date.now() - 20000000000,
          sendId: "1233",
          sendName: "张三",
          content:
            "微信内置浏览器应该是不支持微软雅黑字体，所以可以使用PingFangSC-Regular字体代替，长得差不多。",
          sendHeaderPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          date: Date.now() - 200000000,
          sendId: "1233",
          sendName: "张三",
          content: "开始抢红包",
          sendHeaderPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          date: Date.now(),
          sendId: "1233",
          sendName: "张三",
          content: "111",
          sendHeaderPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <ScrollView>
          {this.state.msgList.map(msg => {
            return (
              <View
                style={{ padding: 5, marginHorizontal: 5, marginVertical: 5 }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar
                    rounded
                    size={45}
                    source={{ uri: msg.sendHeaderPhoto }}
                  />
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 10
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 12,
                          width: 100,
                          marginLeft: 5
                        }}
                      >
                        {msg.sendName}
                      </Text>
                    </View>
                    <View
                      style={{
                        alignSelf: "flex-start",
                        minWidth: "40%",
                        maxWidth: "90%",
                        borderRadius: 5,
                        backgroundColor: "#FFF",
                        paddingHorizontal: 8,
                        paddingVertical: 10,
                        marginLeft: 5
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: "flex-start",
                          fontSize: 15,
                          fontWeight: "700",
                          paddingHorizontal: 5,
                          color: "#000"
                        }}
                      >
                        {msg.content}
                      </Text>
                      <Text
                        style={{
                          opacity: 0.3,
                          position: "absolute",
                          bottom: 2,
                          right: 2,
                          fontSize: 8
                        }}
                      >
                        {getTimeString(msg.date)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            backgroundColor: backgroundColor,
            height: 60,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10
            }}
          >
            <TextInput
              style={{
                flex: 1,
                height: 35,
                fontSize: 13,
                fontWeight: "600",
                backgroundColor: "#fff",
                marginRight: 5,
                borderRadius: 20,
                paddingHorizontal: 10
              }}
              value={this.state.sendBoxText}
              onChangeText={text => {
                this.setState({ sendBoxText: text });
              }}
            />
            <Button
              title="发送"
              type="outline"
              TouchableComponent={TouchableOpacity}
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{
                borderRadius: 20,
                height: 35,
                width: 70,
                borderWidth: 0.9
              }}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }
}
