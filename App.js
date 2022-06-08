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
export default function App() {
  return (
    <>
      <NativeBaseProvider>

          <AppBar />
          <DrawerNavigation />

      </NativeBaseProvider>
      {/* <MyComponent /> */}
      {/* <NavigationContainer>
       
      </NavigationContainer> */}
    </>
  );
}
