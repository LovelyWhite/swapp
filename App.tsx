import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "./src/pages/login";
import MainScreen from "./src/pages/main";

const AppNavigator = createStackNavigator({
  Login:{
    screen:LoginScreen
  },
  Main: {
    screen: MainScreen
  }
}); 

export default createAppContainer(AppNavigator);
