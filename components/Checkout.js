import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { VStack, HStack, Box, Divider, ScrollView, Center } from "native-base";
import { getBasketTotal } from "../reducer";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue("");
  const [price, setPrice] = useState(0);

  return (
    <ScrollView>
      <VStack>
        {/* <View p="2" m="2" bg="grey">
          <Text></Text>
        </View> */}
        <Box
          alignSelf="center"
          bg="secondary"
          w="100%"
          _text={{
            fontSize: "md",
            fontWeight: "medium",
            color: "warmGray.50",
            letterSpacing: "lg",
          }}
        >
          <Center>Total Amount : {getBasketTotal(basket)} (FCFA) </Center>
        </Box>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            description={item.description}
            price={500}
            ratings={item.ratings}
            image={item.image}
          />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
