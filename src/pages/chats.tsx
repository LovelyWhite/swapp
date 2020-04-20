import React from "react";
import { Text, SafeAreaView, View, StatusBar, Platform } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  primaryColor,
  getTimeString,
  thirdTextColor,
  secondaryTextColor,
  disabledTextColor,
  disabledBackgroundColor,
  topBarBackground,
  Chat,
} from "../utils";
import { Avatar } from "react-native-elements";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/topBar";
import LinkItem from "../components/linkItem";
import { NavigationEvents } from "react-navigation";

interface Props {
  navigation: any;
}
interface States {
  chatList: Chat[];
}
export default class ChatsScreen extends React.Component<Props, States> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "消息",
      labelStyle: {
        color: navigation.isFocused() ? primaryColor : disabledTextColor,
      },
      tabBarIcon: (
        <MaterialIcons
          name="chat"
          size={20}
          color={
            navigation.isFocused() ? primaryColor : disabledBackgroundColor
          }
        />
      ),
    };
  };

  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      chatList: [
        {
          isGroup: false,
          lastMessage: "我觉得可以1232222222222222222222222222222213",
          lastTime: 12123123123,
          name: "小李11111111111111111111111111111111111111",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: Date.now() - 124444443,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg",
        },
      ],
    };
  }
  toChatDetail(chat: Chat, key: number) {
    this.props.navigation.navigate({
      routeName: "ChatDetail",
      params: { chat },
    });
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
          onWillFocus={() => {
            StatusBar.setBackgroundColor(topBarBackground);
            StatusBar.setTranslucent(true);
            StatusBar.setBarStyle("dark-content");
          }}
        />
        <TopBar title={"友信"} navigation={this.props.navigation} />
        <ScrollView style={{ height: "100%" }}>
          {this.state.chatList.map((chat, key) => {
            return (
              <LinkItem
                showIcon={true}
                image={chat.headerPhoto}
                key={key}
                onPress={() => {
                  this.toChatDetail(chat, key);
                }}
                primaryText={chat.name}
                secondText={chat.lastMessage}
                thirdText={getTimeString(chat.lastTime)}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
