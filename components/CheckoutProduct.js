import { StyleSheet, View } from "react-native";
import React from "react";
import { VStack, Box, Divider, Text, Image, Center, Button } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useStateValue } from "../StateProvider";
import OnboardingScreen from "../screens/OnboardingScreen";

const CheckoutProduct = ({ id, title, image, price, description, ratings }) => {
  const [{ basket }, dispatch] = useStateValue("");

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <Box
      borderRadius="md"
    //   w="90%"
      p="15"
      m="15"
      rounded="lg"
      bg="white"
      borderColor="coolGray.200"
      borderWidth="1"
    >
      <VStack space="4" display="flex" mb="4" justifyContent="space-around" flexDirection="row">
        {/* <Center> */}
        <Box>
          <Image
            source={{
              uri: image,
            }}
            alt="Alternate Text"
            size="lg"
            resizeMode="contain"
          />
        </Box>

        <Box px="4" pb="4">
          <Box px="4" bold >
            <Text bold>{title}</Text>
          </Box>
          <Box px="4" textAlign="center">
            <Center flex={1}>
              <Text justifyContent="center">{description}</Text>
            </Center>
            {/* </Text>             */}
          </Box>
          <Text bold>
            {price}
          </Text>

          <View flexDirection="row">
            {Array(ratings)
              .fill()
              .map((_, i) => (
                <Octicons name="star-fill" size={15} color="orange" />
              ))}
          </View>

          {/* </View> */}
        </Box>

        {/* </Center> */}
      </VStack>


      <Button
          size="sm"
          w="60%"
          onPress={removeFromBasket}
          flexDirection="row"
          colorScheme="warning"
        >
          <Text alignContent="center" color="white">
            Remove From Card
            <SimpleLineIcons ml="15" name="basket" size={20} color="white" />
          </Text>
        </Button>
    </Box>
  );
};

export default CheckoutProduct;

const styles = StyleSheet.create({});
