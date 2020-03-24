import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/pages/login";
import TabNavigator from "./src/pages/main";
import ChatDetailScreen from "./src/pages/chatDetail";

const AppNavigator = createStackNavigator({
  Login:{
    screen:LoginScreen,
  },
  Main: {
    screen: TabNavigator,
  },
  ChatDetail:{
    screen:ChatDetailScreen
  }
},{
  defaultNavigationOptions:{
    headerShown:false,
    headerBackTitleVisible:false
  }
}); 

export default createAppContainer(AppNavigator);
