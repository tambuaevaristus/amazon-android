import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Input,
  Box,
  StatusBar,
  Image,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useStateValue } from "../StateProvider";

function AppBar(navigation) {

  const [{basket}, dispatch] = useStateValue();


  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="black"
        px="1"
        justifyContent="space-around"
        alignItems="center"
        w="100%"
        h="50"
        maxW="400"
      >
        <HStack alignItems="center">
          <Center>
            <Image
              source={{
                uri: "https://pngimg.com/uploads/amazon/amazon_PNG25.png",
              }}
              alt="Alternate Text"
              size="md"
              mt="15"
              resizeMode="contain"
            />
          </Center>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={AntDesign}
                name="shoppingcart"
                size="lg"
                color="white"
              />
            }

            onPress={()=>{
              console.log("card length:"+ basket.length)
            }}
          />
          <Text color="white">{basket.length}</Text>
        </HStack>
      </HStack>
      <Box alignItems="center">
        <Input
          type="text"
          w="100%"
          py="0"
          h="50"
          InputRightElement={
            <IconButton
              bg="yellow.600"
              h="100%"
              icon={
                <Icon
                  as={MaterialIcons}
                  name="search"
                  size="lg"
                  color="yellow"
                />
              }
            />
          }
          placeholder="Search product"
        />
      </Box>
    </>
  );
}

export default AppBar;
