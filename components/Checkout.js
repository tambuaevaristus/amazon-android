import { StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import Product from "../components/Product";
import { useStateValue } from "../StateProvider";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue("");
  const [price, setPrice] = useState(0);


     const basketPrice = basket?.reduce((amount, item) => item.price + amount, 0);
     setPrice(basketPrice);
    
     console.log(price)

  return (
    <VStack>
      <View>
        <Text>{price}</Text>
      </View>
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
