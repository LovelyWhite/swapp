import React from "react";
import { NavigationEvents } from "react-navigation";
import {
  StatusBar,
  View,
  SafeAreaView,
  Platform,
  Text,
  Animated,
} from "react-native";
import { topBarBackground } from "../utils";
import {
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

export interface AlphaData {
  tag: string;
  view: React.ReactElement<{}>;
}
const alpha = {
  A: [],
  B: [],
  C: [],
  D: [],
  E: [],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
  K: [],
  L: [],
  M: [],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [],
  T: [],
  U: [],
  V: [],
  W: [],
  X: [],
  Y: [],
  Z: [],
  "#": [],
};
interface Props {
  headerView?: React.ReactElement<{}>;
  alphaList?: AlphaData[];
}
interface States {
  fontSize: number[];
  marginRight: number[];
}
export default class AlphaList extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      fontSize: Object.keys(alpha).map(() => 14),
      marginRight: Object.keys(alpha).map(() => 0),
    };
  }
  onPressIn(index: number) {
    // Animated.parallel([
    //   Animated.timing(this.state.fontSize[index], {
    //     toValue: 20,
    //     duration: 2,
    //   }),
    //   Animated.timing(this.state.marginRight[index], {
    //     toValue: 20,
    //     duration: 2,
    //   }),
    // ]).start();
    let { fontSize, marginRight } = this.state;
    (fontSize[index] = 20), (marginRight[index] = 20);
    this.setState({
      fontSize,
      marginRight,
    });
    console.log("in", index);
  }
  onPressOut(index: number) {
    let { fontSize, marginRight } = this.state;
    (fontSize[index] = 14), (marginRight[index] = 0);
    this.setState({
      fontSize,
      marginRight,
    });
    console.log("out", index);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <View
          style={{
            position: "absolute",
            right: 10,
            zIndex: 20,
            height: "100%",
            paddingVertical: 40,
            justifyContent: "space-between",
          }}
        >
          {Object.keys(alpha).map((v, index) => {
            return (
              <View
                style={{ width: 30, borderWidth: 0.3333 }}
                onResponderTerminate={(e) => {
                  console.log(e);
                }}
                key={index}
              >
                <Text
                  style={{
                    fontSize: this.state.fontSize[index],
                    textAlign: "right",
                    marginRight: this.state.marginRight[index],
                  }}
                >
                  {v}
                </Text>
              </View>
            );
          })}
        </View>*/}
        <ScrollView style={{ height: "100%" }}>
          <View>{this.props.headerView && this.props.headerView}</View>
          <View style={{ marginTop: 5 }}></View>
          <View>
            {this.props.alphaList &&
              this.props.alphaList.map((v, index) => (
                <View key={index}>{v.view}</View>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
