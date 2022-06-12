import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Product from "../components/Product";
import { useStateValue } from "../StateProvider";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue("");

  return (
    <VStack>
      {basket.map((item) => (
        <Product
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          ratings={item.ratings}
          image={item.image}
        />
      ))}
    </VStack>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
