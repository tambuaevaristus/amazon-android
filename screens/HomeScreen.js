import * as React from "react";
import { Button, View, Text } from "react-native";
import Product from "../components/Product";

function HomeScreen({ navigation }) {
    return (
      <View style={{ padding: 20 }}>
        <Product />
      </View>
    );
  }

  export default HomeScreen;