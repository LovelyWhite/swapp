import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/pages/home";
import LoginScreen from "./src/pages/login";

const AppNavigator = createStackNavigator({
  Login:{
    screen:LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
