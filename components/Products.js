import React, { useState, useEffect } from "react";
import Product from "../components/Product";
// import firestore from '@react-native-firebase/firestore';

import {
  collection,
  getDocs,
  doc,
  update,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";

function Products() {
  const [products, setProducts] = useState([]);
  const productRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();
  }, []);

  return (
    <VStack>
      {products.map((product) => {
        return (
        <Product
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          ratings={product.rating}
          image="https://m.media-amazon.com/images/I/61Qu8KYuynS._SL1500_.jpg"
        />)
      })}

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
