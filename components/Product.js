import { StyleSheet, View } from "react-native";
import React from "react";
import { VStack, Box, Divider, Text, Image, Center, Button } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons'; 


const Product = () => {
  return (
    <Box borderRadius="md" w="100%" p="15" rounded="lg"  borderColor="coolGray.200" borderWidth="1" >
      <VStack space="4" divider={<Divider />}>
        <Center>
          <Box>
            <Image
              source={{
                uri: "https://m.media-amazon.com/images/I/61Qu8KYuynS._SL1500_.jpg",
              }}
              alt="Alternate Text"
              size="xl"
              resizeMode="contain"
            />
          </Box>
          <Box px="4" pt="4">
            NativeBase
          </Box>
          <Box px="4" w="80%" textAlign="center">
            <Center flex={1}>
              <Text justifyContent="center">
                NativeBase is a free and open source frameworveBase is a free
                and open source framework that enable
              </Text>
            </Center>
            {/* </Text>             */}
          </Box>
          <Box px="4" pb="4" flexDirection="row">
            <Text bold mr="45">
              $600K
            </Text>

            <View flexDirection="row">
              <Octicons name="star-fill" size={15} color="orange" />
              <Octicons name="star-fill" size={15} color="orange" />
              <Octicons name="star-fill" size={15} color="orange" />
              <Octicons name="star-fill" size={15} color="orange" />
              <Octicons name="star-fill" size={15} color="orange" />

            </View>

            {/* </View> */}
          </Box>

          <Button size="sm" w="60%" flexDirection="row" colorScheme="warning">
            <Text color="white">Add to Card</Text>
            <SimpleLineIcons name="basket" size={24} color="white" />
          </Button>
        </Center>
      </VStack>
      
    </Box>
  );
};

export default Product;

const styles = StyleSheet.create({});
