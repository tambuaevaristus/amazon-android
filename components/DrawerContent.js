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
import React, { useState, useEffect} from "react";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  update,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useStateValue } from "../StateProvider";
import { getAuth, signOut } from "firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function DrawerContent(props) {
  const auth = getAuth();

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const [{ basket, user }, dispatch] = useStateValue();
  const [current_user, setUser] = useState({});

  const userRef = query(doc(db, "users", auth.currentUser.uid));

  useEffect(() => {
    let subs = true;
    const getUser = async () => {
      await getDoc(userRef)
        .then((res) => {
          if (subs) {
            if (res) {
              console.log("User from useeffect", res?.data());
              setUser(res?.data());
            }
          }
        })
        .catch((err) => {
          console.log("Error", err);
          throw err;
        });
      // const user =await getDoc(userRef);
      // const userOj = user.data();
      // if(subs){
      //   setUser(userOj);
      // }
    };
    getUser();
    return () => {
      subs = false;
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

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
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("UserProfile");
                }}
              >
                <Avatar.Image
                  source={require("../assets/mymy.jpg")}
                  size={50}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                }}
              >
                <Title>{current_user.name}</Title>
                <Caption style={styles.Caption}>
                  {auth.currentUser.email}
                </Caption>
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
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("UserProfile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              // <Icon name="basket-loaded" color={color} size={size} />
              <SimpleLineIcons name="basket-loaded" size={24} color="black" />
            )}
            label="Checkout Items"
            onPress={() => {
              props.navigation.navigate("Checkout");
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="basket-plus" color={color} size={size} />
            )}
            label="Add Product"
            onPress={() => {
              props.navigation.navigate("AddProduct");
            }}
          />

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
          onPress={() => {
            props.navigation.navigate("Login");
          }}
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
