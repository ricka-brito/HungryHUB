import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Shopping from "../pages/Shopping";
import History from "../pages/History";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

export default function TabHome() {
  return (
    <Tab.Navigator
      screenOptions={{
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{ headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ headerShown: false}}
      />
    </Tab.Navigator>
  );
}
