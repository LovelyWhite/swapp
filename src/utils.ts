import { StatusBar } from "react-native";

export const backgroundColor = "#e9e9f1";
export const textBoxBackground="#EBEEF5";
export const secondaryTextColor="#808080";
export const thirdTextColor = "#b0b2bf"
export const primaryColor = "#409EFF";
export const disabledPrimaryColor = "#e8ebf2"
export const loadingBackground = "#68696b77"
export const requestURL="";

// 返回一个字符串显示发送日期
//返回 昨天 前天 和日期
export function getTimeString(timestamp: number): string {
  let now = new Date(Date.now());
  let msg = new Date(timestamp);

  let nowDate = now.getDate();
  let msgDate = msg.getDate();
  let nowYear = now.getFullYear();
  let msgYear = msg.getFullYear();
  let nowMouth = now.getMonth() + 1;
  let msgMouth = msg.getMonth() + 1;
  let nowHours = now.getHours();
  let msgHours = msg.getHours();
  let nowMinutes = now.getMinutes();
  let msgMinutes = msg.getMinutes();

  if (nowYear - msgYear === 0) {
    if (nowDate - msgDate === 0) {
      //今天
      return msgHours + ":" + msgMinutes;
    } else if (nowDate - msgDate === 1) {
      return "昨天 " + msgHours + ":" + msgMinutes;
      //昨天
    } else if (nowDate - msgDate === 2) {
      //前天
      return "前天 " + msgHours + ":" + msgMinutes;
    } else {
      return msgMouth + "-" + msgDate + " " + msgHours + ":" + msgMinutes;
    }
  } else {
    return (
      msgYear +
      "-" +
      msgMouth +
      "-" +
      msgDate +
      " " +
      msgHours +
      ":" +
      msgMinutes
    );
  }
}
//网络请求
export function fetchData()
{

}