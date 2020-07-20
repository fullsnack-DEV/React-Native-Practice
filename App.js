import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponenrScreen from "./src/screens/Componentsscreen";
import ComponentScreen from "./src/screens/Componentsscreen";
import ListScreen from "./src/screens/Listscreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Lists: ListScreen,
  },
  {
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
