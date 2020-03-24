import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { primaryColor, getTimeString, thirdTextColor, secondaryTextColor } from "../utils";
import { Avatar } from "react-native-elements";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import TopBar from "../components/topBar";
interface Chat {
  isGroup: boolean;
  lastMessage: string;
  lastTime: number;
  name: string;
  headerPhoto: string;
}
interface Props {
  navigation:any
}
interface States {
  chatList: Chat[];
}
export default class ChatsScreen extends React.Component<Props, States> {
  static navigationOptions = {
    title: "消息",
    tabBarIcon: <Entypo name="chat" size={25} color={primaryColor} />
  };
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      chatList: [
        {
          isGroup: false,
          lastMessage: "我觉得可以1232222222222222222222222222222213",
          lastTime: 12123123123,
          name: "小李",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: Date.now()-124444443,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        },
        {
          isGroup: true,
          lastMessage: "我觉得可以",
          lastTime: 12123123123,
          name: "抢红包1群",
          headerPhoto:
            "http://b-ssl.duitang.com/uploads/item/201708/06/20170806204014_VfZwe.thumb.700_0.jpeg"
        }
      ]
    };
  }
  toChatDetail(chat:Chat,key:number){
    this.props.navigation.navigate("ChatDetail")
  }
  render() {
    return (
      <SafeAreaView style={{backgroundColor:primaryColor,height:"100%"}}>
        <TopBar title={"友信"}/>
      <ScrollView style={{height:"100%",backgroundColor:"#fff"}}>
      {this.state.chatList.map((chat, key) => {
          return (
            <TouchableOpacity key={key} onPress={()=>{this.toChatDetail(chat,key)}} activeOpacity={0.5}>
              <View  style={{ padding: 5, margin: 5 }}>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  rounded
                  size={45}
                  containerStyle={{ marginHorizontal: 5 }}
                  source={{ uri: chat.headerPhoto }}
                />
                <View style={{ flex: 1,justifyContent:"space-evenly" }}>
                  <Text numberOfLines={1} style={{fontSize:16}}>{chat.name}</Text>
                  <Text numberOfLines={1} style={{color:secondaryTextColor}}>{chat.lastMessage}</Text>
                </View>
                <Text style={{color:thirdTextColor,fontSize:10}}>{getTimeString(chat.lastTime)}</Text>
              </View>
            </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      </SafeAreaView>
    );
  }
}
