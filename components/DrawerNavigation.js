import * as React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./DrawerContent";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import NotificationScreen from "../screens/NotificationScreen";
import LoginScreen from "../screens/LoginScreen";



function DrawerNavigation() {

    const Drawer = createDrawerNavigator();
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Product" component={ProductScreen} />
          <Drawer.Screen name="Notifications" component={NotificationScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  export default DrawerNavigation;
  