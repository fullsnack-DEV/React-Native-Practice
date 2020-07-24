import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import ComponentScreen from "./src/screens/Componentsscreen";
import ListScreen from "./src/screens/Listscreen.js";
import Imagescreen from "./src/screens/Imagescreen.jsx";
import Counterscreen from "./src/screens/Counterscreen.jsx";
import Colorscreen from "./src/screens/Colorscreen.jsx";
import Squarescreen from "./src/screens/Squarescreen.jsx";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Lists: ListScreen,
    Image: Imagescreen,
    Counter: Counterscreen,
    Colorscreen: Colorscreen,
    Squarescreen: Squarescreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
