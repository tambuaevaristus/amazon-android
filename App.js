import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import DrawerContent from "./components/DrawerContent";
import DrawerNavigation from "./components/DrawerNavigation";
import MyComponent from "./components/MyComponent";
import MyTabs from "./components/BottomTabNavigation";
import AppBar from "./components/AppBar";
import { NativeBaseProvider, Center } from "native-base";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/OnboardingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          {/* <AppBar /> */}
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Dashboard"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen
                name="DrawerNavigation"
                independent={true}
                component={DrawerNavigation}
              />
            </Stack.Navigator>
          </NavigationContainer>

          {/* <DrawerNavigation /> */}
        </StateProvider>
      </NativeBaseProvider>
    </>
  );
}
