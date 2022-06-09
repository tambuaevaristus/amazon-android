import * as React from "react";
import Product from "../components/Product";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";

function Products() {
  return (
    <VStack>
      <Product
        id={1}
        title="Google pixel 4"
        description="Google pixel is the best phone in the world"
        price={2000}
        ratings={5}
        image="https://m.media-amazon.com/images/I/61Qu8KYuynS._SL1500_.jpg"
      />
      <Product
        id={2}
        title="Apple Pro Watch"
        description="The applle pro watch is supep you dont want to miss out on the features"
        price={2000}
        ratings={3}
        image="https://m.media-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg"
      />
      <Product
        id={3}
        title="Apple Pro Watch"
        description="The applle pro watch is supep you dont want to miss out on the features"
        price={2000}
        ratings={5}
        image="https://m.media-amazon.com/images/I/71TBSjoQflL._SL1500_.jpg"
      />
      <Product
        id={4}
        title="Flat Sceen TV"
        description="The applle pro watch is supep you dont want to miss out on the features"
        price={2000}
        ratings={4}
        image="https://m.media-amazon.com/images/I/71HcZHyEsTL._SL1500_.jpg"
      />
      <Product
        id={5}
        title="CUCU Labtop"
        description="The applle pro watch is supep you dont want to miss out on the features"
        price={2000}
        ratings={5}
        image="https://moneymanafrica.com/uploads/images/202205/img_1920x_6296585bf22617-40344139-88324265.jpg"
      />
    </VStack>
  );
}

export default Products;
