import { StyleSheet, View } from "react-native";
import React from "react";
import { VStack, Box, Divider, Text, Image, Center, Button } from "native-base";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useStateValue } from "../StateProvider";
import OnboardingScreen from "../screens/OnboardingScreen";
import { useToast } from "native-base";


const Product = ({id, title,image,price, description, ratings}) => {

  const toast = useToast();
  const [{basket}, dispatch] = useStateValue("");
  

  const addToBasket= () =>{

   
    dispatch({
      type: 'ADD_TO_BASKET',
      items: {
        id : id,
        title : title,
        image : image,
        price : price,
        ratings : ratings,
    }
    })
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            Item added to Card
          </Box>
        );
      },
    });

    console.log("added"+ basket.length);
  } 

  return (
    <Box
      borderRadius="md"
      w="90%"
      p="15"
      m="15"
      rounded="lg"
      bg="white"
      borderColor="coolGray.200"
      borderWidth="1"
    >
      <VStack space="4" divider={<Divider />}>
        <Center>
          <Box>
            <Image
              source={{
                uri: image,
              }}
              alt="Alternate Text"
              size="xl"
              resizeMode="contain"
            />
          </Box>
          <Box px="4" bold pt="4">
            <Text bold>{title}</Text>
          </Box>
          <Box px="4" w="80%" textAlign="center">
            <Center flex={1}>
              <Text justifyContent="center">{description}</Text>
            </Center>
            {/* </Text>             */}
          </Box>
          <Box px="4" pb="4" flexDirection="row">
            <Text bold mr="45">
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

          <Button size="sm" w="60%" onPress={addToBasket} flexDirection="row" colorScheme="warning">
            <Text alignContent="center" color="white">
              Add to Card
              <SimpleLineIcons ml="15" name="basket" size={20} color="white" />
            </Text>
          </Button>
        </Center>
      </VStack>
    </Box>
  );
};

export default Product;

const styles = StyleSheet.create({});
