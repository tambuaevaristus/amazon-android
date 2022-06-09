import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";


const LoginScreen = ({navigation}) => {
  const auth = getAuth(app);
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password)
  const signIn = () => {
    // e.preventDefault();
    //   firebase stuff

    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;

    if(auth){
      navigation.navigate('Home')
    }


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("sorry ya wahala de : " + errorCode)
  });
  };

  const register = (e) => {
    e.preventDefault();
 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("successfully created an acccount")

      if(auth){
          // history.push('/')
          navigation.navigate('Home')
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;



      alert(errorCode)
      // ..
    });
  }


  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card>
          <Card.Title title="Login" />
          <Card.Content>
            <TextInput
              label="Email"
              style={{
                backgroundColor: 'transparent',
              }}
              value={email}
              onChangeText={email=>setEmail(email)}
              keyboardType="email-address"
            />

            <TextInput
              label="Password"
              style={{
                backgroundColor: 'transparent',
              }}
              value={password}
              onChangeText={password => setPassword(password)}
              secureTextEntry={true}
            />

            <Button style={styles.cardButton} uppercase={false}>
              Forgot Password
            </Button>
            <Button style={styles.cardButton} onPress={ signIn} mode="contained">
              Login
            </Button>
            <Button style={styles.cardButton} onPress={ register}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "grey",
  },
  view: {
    width: "80%",
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
});
