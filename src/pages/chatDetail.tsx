import {
  Image,
  View,
  Text,
  TextInput,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-elements";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import {
  backgroundColor,
  getTimeString,
  primaryColor,
  topBarBackground,
  Chat,
} from "../utils";
import TopBar from "../components/topBar";
import { NavigationEvents } from "react-navigation";
import ReturnBar from "../components/returnBar";

interface Message {
  send: boolean; //是否为发送？
  date: number; //发送日期
  account: string; //发送者
  content: string; //内容 目前暂为字符串
  nickName: string; //发送者昵称
  headerPhoto: string; //URL
}

interface Props {
  navigation: any;
}
interface States {
  msgList: Message[];
  titleText: string;
  sendBoxText: string;
}

export default class ChatDetailScreen extends React.Component<Props, States> {
  chatScrollVIew: ScrollView;
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      titleText: "",
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
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          send: true,
          date: Date.now() - 20000000000,
          account: "1233",
          nickName: "张三",
          content:
            "微信内置浏览器应该是不支持微软雅黑字体，所以可以使用PingFangSC-Regular字体代替，长得差不多。",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
      ],
    };
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {}
  //发送信息
  submit() {
    let msg: Message = {
      send: true,
      date: 0,
      account: "",
      nickName: "",
      content: "",
      headerPhoto: "",
    };

    msg.date = Date.now();
    (msg.account = "123"),
      (msg.nickName = "李四"),
      (msg.content = this.state.sendBoxText);
    this.state.msgList.push(msg);
    this.setState(
      {
        sendBoxText: "",
        msgList: this.state.msgList,
      },
      () => {
        setTimeout(() => {
          this.chatScrollVIew.scrollToEnd();
        }, 100);
      }
    );
  }
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: topBarBackground,
          height: "100%",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <NavigationEvents
          onWillFocus={(payload) => {
            console.log(payload);
            const params: Chat = payload.state.params["chat"];
            this.setState({
              titleText: params.name,
            });
          }}
        />
        <ReturnBar
          navigation={this.props.navigation}
          text={this.state.titleText}
        />
        <ScrollView
          style={{ height: "100%" }}
          ref={(ref) => {
            this.chatScrollVIew = ref;
          }}
        >
          {this.state.msgList.map((msg, key) => {
            return (
              <View key={key} style={{ padding: 5, margin: 5 }}>
                <View
                  style={{
                    flexDirection: msg.send ? "row-reverse" : "row",
                  }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      marginHorizontal: 5,
                      borderRadius: 3,
                    }}
                    resizeMode="cover"
                    source={{
                      uri:
                        "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      alignItems: msg.send ? "flex-end" : "flex-start",
                      paddingRight: msg.send ? 0 : 45,
                      paddingLeft: msg.send ? 45 : 0,
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
                        marginBottom: 5,
                      }}
                    >
                      {msg.nickName}
                    </Text>
                    <View
                      style={{
                        alignSelf: msg.send ? "flex-end" : "flex-start",
                        borderRadius: 5,
                        backgroundColor: msg.send ? primaryColor : "#fff",
                        paddingHorizontal: 8,
                        paddingVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: msg.send ? "flex-end" : "flex-start",
                          fontSize: 15,
                          fontWeight: "700",
                          paddingHorizontal: 5,
                          color: "#000",
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
                          color: "#000",
                          fontSize: 8,
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
            height: 50,
            justifyContent: "center",
            backgroundColor: "#f7f7f7",
            borderTopColor: "#f9f9f9",
            borderTopWidth: 0.333,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 5,
                fontSize: 13,
                fontWeight: "600",
                backgroundColor: "#fff",
                marginRight: 7,
                paddingHorizontal: 10,
              }}
              multiline={true}
              returnKeyType="none"
              value={this.state.sendBoxText}
              onChangeText={(text) => {
                console.log(text);
                this.setState({ sendBoxText: text });
              }}
            />
            {this.state.sendBoxText != "" ? (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EvilIcons name="heart" size={35} />
                <Button
                  title="发送"
                  titleStyle={{ fontSize: 14 }}
                  buttonStyle={{
                    height: 30,
                    width: 50,
                    backgroundColor: primaryColor,
                  }}
                  onPress={this.submit}
                />
              </View>
            ) : (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <EvilIcons name="heart" size={35} color="#000" />
                <EvilIcons name="plus" size={35} color="#000" />
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
