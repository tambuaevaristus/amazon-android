import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";

const LoginScreen = () => {
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
              keyboardType="email-address"
            />

            <TextInput
              label="Password"
              style={{
                backgroundColor: 'transparent',
              }}
              secureTextEntry={true}
            />

            <Button style={styles.cardButton} uppercase={false}>
              Forgot Password
            </Button>
            <Button style={styles.cardButton} mode="contained">
              Login
            </Button>
            <Button style={styles.cardButton}>Register</Button>
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
