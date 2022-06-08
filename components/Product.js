import { StyleSheet, View } from "react-native";
import React from "react";
import { VStack, Box, Divider, Text, Image, Center } from "native-base";


const Product = () => {
  return (
    <Box border="1" borderRadius="md" w='100%'>
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
          <Box px="4" w="80%" textAlign='center'>
<Center flex={1}>
    <Text justifyContent="center">
    NativeBase is a free and open source frameworveBase is a free and open source framework that enable

    </Text>

</Center>
{/* </Text>             */}
          </Box>
          <Box px="4" pb="4" flexDirection="row">
            <Text bold mr="45">$600K</Text><Text>***</Text>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
};

export default Product;

const styles = StyleSheet.create({});
