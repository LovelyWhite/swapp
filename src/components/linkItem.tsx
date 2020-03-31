import React from "react";
import { View, Text, Image } from "react-native";
import { secondaryTextColor, thirdTextColor } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  image: string | React.ReactElement<{}>;
  onPress: () => void;
  primaryText: string;
  secondText?: string;
  thirdText?: string;
  height?: number;
}
interface States {}
export default class LinkItem extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={0.5}
        style={{
          backgroundColor: "#fff",
          height: this.props.height ? this.props.height : 60
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: "100%"
          }}
        >
          {typeof this.props.image == "string" ? (
            <Image
              style={{
                alignSelf: "center",
                width: 40,
                height: 40,
                marginLeft: 15,
                marginRight: 10,
                borderRadius: 3
              }}
              resizeMode="cover"
              source={{ uri: this.props.image }}
            />
          ) : (
            <View
              style={{
                alignSelf: "center",
                width: 40,
                height: 40,
                marginLeft: 12,
                marginRight: 10,
              }}
            >
              {this.props.image}
            </View>
          )}
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
            }}
          >
            {this.props.primaryText && (
              <Text
                numberOfLines={1}
                style={{ fontSize: 16, color: "#000", paddingRight: 20 }}
              >
                {this.props.primaryText}
              </Text>
            )}
            {this.props.secondText && (
              <Text numberOfLines={1} style={{ color: secondaryTextColor }}>
                {this.props.secondText}
              </Text>
            )}
          </View>
          {this.props.thirdText && (
            <Text
              style={{
                color: thirdTextColor,
                fontSize: 10,
                padding: 10,
                paddingRight: 20,
              }}
            >
              {this.props.thirdText}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
