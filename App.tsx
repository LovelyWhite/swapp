import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "react-navigation-stack";
import LoginScreen from "./src/pages/login";
import TabNavigator from "./src/pages/main";
import ChatDetailScreen from "./src/pages/chatDetail";
import IntroScreen from "./src/pages/intro";
import RegisterScreen from "./src/pages/register";
import UserDetailScreen from "./src/pages/userDetail";
import StackCardStyleInterpolator from "react-navigation-stack";
const AppNavigator = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Main: {
      screen: TabNavigator,
    },
    ChatDetail: {
      screen: ChatDetailScreen,
    },
    UserDetail: {
      screen: UserDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
      headerBackTitleVisible: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    },
  }
);
export default createAppContainer(AppNavigator);
