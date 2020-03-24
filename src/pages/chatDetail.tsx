import { View, Text, TextInput, Platform, SafeAreaView } from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, getTimeString, primaryColor } from "../utils";
import TopBar from "../components/topBar";

interface Message {
  send: boolean; //是否为发送？
  date: number; //发送日期
  account: string; //发送者
  content: string; //内容 目前暂为字符串
  nickName: string; //发送者昵称
  headerPhoto: string; //URL
}

interface Props {}
interface States {
  msgList: Message[];
  sendBoxText: string;
}

export default class ChatDetailScreen extends React.Component<Props, States> {
  static navigationOptions = {
    title: "群名/联系人名",
    headerShown:true,
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      sendBoxText: "",
      msgList: [
        {
          send: false,
          date: Date.now() - 20000000000,
          account: "1233",
          nickName: "张三",
          content:
            "微信内置浏览器应该是不支持微软雅黑字体，所以可以使用PingFangSC-Regular字体代替，长得差不多。",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          send: true,
          date: Date.now() - 20000000000,
          account: "1233",
          nickName: "张三",
          content:
            "微信内置浏览器应该是不支持微软雅黑字体，所以可以使用PingFangSC-Regular字体代替，长得差不多。",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        }
      ]
    };
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
  }
  //发送信息
  submit() {
    let msg: Message = {
      send: true,
      date: 0,
      account: "",
      nickName: "",
      content: "",
      headerPhoto: ""
    };
    msg.date = Date.now();
    (msg.account = "123"),
      (msg.nickName = "李四"),
      (msg.content = this.state.sendBoxText);
    this.state.msgList.push(msg);
    this.setState({
      msgList: this.state.msgList
    });
  }
  render() {
    return (
      <SafeAreaView style={{height:"100%"}}>
      <ScrollView style={{height:"100%"}}>
          {this.state.msgList.map((msg, key) => {
            return (
              <View key={key} style={{ padding: 5, margin: 5 }}>
                <View
                  style={{
                    flexDirection: msg.send ? "row-reverse" : "row"
                  }}
                >
                  <Avatar
                    rounded
                    size={45}
                    containerStyle={{ marginHorizontal: 5 }}
                    source={{ uri: msg.headerPhoto }}
                  />
                  <View
                    style={{
                      flex: 1,
                      alignItems: msg.send ? "flex-end" : "flex-start"
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={{
                        textAlign: msg.send ? "right" : "left",
                        fontSize: 12,
                        width: 100,
                        marginHorizontal: 5,
                        marginBottom: 5
                      }}
                    >
                      {msg.nickName}
                    </Text>
                    <View
                      style={{
                        alignSelf: msg.send ? "flex-end" : "flex-start",
                        borderRadius: 5,
                        backgroundColor: "#FFF",
                        paddingHorizontal: 8,
                        paddingVertical: 10
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: msg.send ? "flex-end" : "flex-start",
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
                marginRight: 7,
                borderRadius: 20,
                paddingHorizontal: 10
              }}
              value={this.state.sendBoxText}
              onChangeText={text => {
                console.log(text);
                this.setState({ sendBoxText: text });
              }}
            />
            <Button
              title="发送"
              titleStyle={{ fontSize: 14 }}
              buttonStyle={{
                borderRadius: 20,
                height: 35,
                width: 70,
                borderWidth: 0.9,
                backgroundColor:primaryColor
              }}
              onPress={this.submit}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
