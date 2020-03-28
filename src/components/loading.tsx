import React from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import {
  loadingBackground,
  backgroundColor,
  loadingTextBackground,
  secondaryTextColor,
  secondaryFontSize,
  marginTopIOS,
  marginTopAndroid
} from "../utils";

interface Props {}
interface States {
  disabled: boolean;
  text?: string;
}
export default class Loading extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      disabled: true,
      text: ""
    };
  }
  startLoading(text: string) {
    this.setState({
      disabled: false,
      text
    });
  }
  stopLoading() {
    this.setState({
      disabled: true
    });
  }
  render() {
    return (
      <>
        {this.state.disabled ? (
          <></>
        ) : (
          <View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: loadingBackground,
              zIndex: 99999
            }}
          >
            <View
              style={{
                backgroundColor: loadingTextBackground,
                width: "90%",
                height: 30,
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
                // marginTop: Platform.OS=="ios"?marginTopIOS:marginTopAndroid,
                marginTop:marginTopIOS,
                borderRadius: 5
              }}
            >
              <ActivityIndicator color="#FFFFFFEE" size={14} />
              <Text
                style={{
                  paddingHorizontal: 10,
                  lineHeight:30,
                  fontSize: secondaryFontSize,
                  color: "#FFFFFFee",
                  textAlign: "center"
                }}
              >
                {this.state.text}
              </Text>
            </View>
          </View>
        )}
      </>
    );
  }
}
