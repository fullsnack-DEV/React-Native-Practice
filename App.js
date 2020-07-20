import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import ComponentScreen from "./src/screens/Componentsscreen";
import ListScreen from "./src/screens/Listscreen.js";
import Imagescreen from "./src/screens/Imagescreen.jsx";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Lists: ListScreen,
    Image: Imagescreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
