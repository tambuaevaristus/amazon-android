import * as React from "react";
import { Button, View, Text } from "react-native";
import Product from "../components/Product";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <VStack>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </VStack>
    </ScrollView>
  );
}

export default HomeScreen;
