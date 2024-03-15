import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Tab from "./navigationTab";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={Tab} />
    </Stack.Navigator>
  );
}
