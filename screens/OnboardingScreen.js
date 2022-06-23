import React from "react";

import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import LoginScreen from "./LoginScreen";
import {
  getAuth,
 
} from "firebase/auth";
import app from "../firebase";

const OnboardingScreen = ({ navigation }) => {

  const auth = getAuth();

  return (
    <Onboarding
      onDone={() => { auth.onAuthStateChanged(user=>{
        if(user){
          navigation.navigate("DrawerNavigation")
        }else{
          navigation.navigate("Login")
        }
      })

  }
    }
      pages={[
        {
          backgroundColor: "green",
          image: <Image source={require("../assets/cat2.png")} />,
          title: "Amazon Clone",
          subtitle: "One Big Engineer",
        },
        {
          backgroundColor: "#ff4",
          image: <Image source={require("../assets/cat.png")} />,
          title: "Welcome To Amazon",
          subtitle: "Tambua Evaristus",
        },
        {
          backgroundColor: "orange",
          image: <Image source={require("../assets/cat2.png")} />,
          title: "Feel free to go Any where",
          subtitle: "Tambua Evaristus",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
