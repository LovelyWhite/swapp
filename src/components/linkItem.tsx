import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { secondaryTextColor, thirdTextColor } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
interface Props {
  style?: StyleProp<ViewStyle>;
  showIcon: boolean;
  image?: string | React.ReactElement<{}>;
  rightView?: React.ReactElement<{}>;
  onPress?: () => void;
  leftTextContainerStyle?: StyleProp<ViewStyle>;
  thirdTextStyle?: StyleProp<TextStyle>;
  primaryText: string;
  secondText?: string;
  thirdText?: string;
  height?: number;
  showArrow?: boolean;
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
        style={[
          {
            backgroundColor: "#fff",
            height: this.props.height ? this.props.height : 60,
          },
          this.props.style,
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            height: "100%",
            flex: 1,
          }}
        >
          {this.props.showIcon &&
            (typeof this.props.image == "string" ? (
              <Image
                style={{
                  alignSelf: "center",
                  width: 40,
                  height: 40,
                  marginLeft: 15,
                  marginRight: 3,
                  borderRadius: 3,
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
                }}
              >
                {this.props.image}
              </View>
            ))}
          <View
            style={[
              {
                flex: 1,
                marginLeft: 5,
                justifyContent: "space-evenly",
              },
              this.props.leftTextContainerStyle,
            ]}
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
              style={[
                {
                  color: thirdTextColor,
                  fontSize: 10,
                  padding: 10,
                  paddingRight: 20,
                },
                this.props.thirdTextStyle,
              ]}
            >
              {this.props.thirdText}
            </Text>
          )}
          {this.props.rightView && this.props.rightView}
          {this.props.showArrow && (
            <View style={{ paddingRight: 10, alignSelf: "center" }}>
              <AntDesign name="right" size={16} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}
