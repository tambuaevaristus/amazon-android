// import * as React from 'react';
// import { Appbar } from 'react-native-paper';

// const Appbar = () => {
//   const _goBack = () => console.log('Went back');

//   const _handleSearch = () => console.log('Searching');

//   const _handleMore = () => console.log('Shown more');

//   return (
//     <Appbar.Header>
//       <Appbar.BackAction onPress={_goBack} />
//       <Appbar.Content title="Title" subtitle="Subtitle" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header>
//   );
// };

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
function AppBar(navigation) {
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
          />
          <Text color="white">16</Text>
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
