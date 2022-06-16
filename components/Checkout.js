import { StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";
import { getBasketTotal } from "../reducer";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue("");
  const [price, setPrice] = useState(0);

  return (
    <VStack>
      <View p ="2" m="2" bg="grey">
        <Text>{getBasketTotal(basket)}</Text>
      </View>
      {basket.map((item) => (
        <CheckoutProduct
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
