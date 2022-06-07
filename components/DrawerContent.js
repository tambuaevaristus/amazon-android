import { View, StyleSheet } from "react-native";

import {
  Title,
  Text,
  Avatar,
  Caption,
  Drawer,
  TouchableRipple,
  Switch,
  Paragraph,
} from "react-native-paper";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
              }}
            >
              <Avatar.Image source={require("../assets/mymy.jpg")} size={50} />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                }}
              >
                <Title>Tambua Evaristus</Title>
                <Caption style={styles.Caption}>@evaristustambua@gmail.com</Caption>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Followering</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                60
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.bottomSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {props.navigation.navigate('Home')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />
          {/* 
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="setti-outline" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {}}
          /> */}

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {}}
          />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preferences}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value="{isDarkTheme}" />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  captions: {
    fontSize: 14,
    lineHeight: 14,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderBottomColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preferences: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
});
