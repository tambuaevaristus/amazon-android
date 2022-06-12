import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import NotificationScreen from "../screens/NotificationScreen";
import LoginScreen from "../screens/LoginScreen";
import AppBar from "./AppBar";
import Checkout from "./Checkout";

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <>       

      <AppBar />
      {/* <NavigationContainer> */}
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          {/* <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Onboarding"
            component={OnboardingScreen}
          /> */}
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Product"
            component={ProductScreen}
          />
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Checkout"
            component={Checkout}
          />
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
        </Drawer.Navigator>
      {/* </NavigationContainer> */}
    </>
  );
}

export default DrawerNavigation;
