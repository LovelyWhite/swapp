import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/pages/login";
import TabNavigator from "./src/pages/main";
import ChatDetailScreen from "./src/pages/chatDetail";
import IntroScreen from "./src/pages/intro";
import RegisterScreen from "./src/pages/register";
import UserDetailScreen from "./src/pages/userDetail";

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
    },
  }
);

export default createAppContainer(AppNavigator);
