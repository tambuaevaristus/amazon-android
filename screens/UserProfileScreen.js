import { StyleSheet, Image, Platform } from "react-native";
import React, { useState } from "react";
import {
  VStack,
  HStack,
  Avatar,
  Text, 
  View,
  FormControl,
  Input,
  Box,
  Divider,
  ScrollView,
  Center,
  Button,
  TextArea,
  Select,
  CheckIcon,
} from "native-base";
import * as ImagePicker from "expo-image-picker";

const UserProfileScreen = () => {
    const [image, setImage] = useState(null);


  const pickImage = async () => {
    console.log("pressed")
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const updateUserProfile = () => {}
  return (
    <VStack width="90%" mx="3" pl="10" maxW="300px">
    <Center><Text bold mt="3" fontSize="lg">User Profile</Text></Center>
    
   
        <Avatar bg="indigo.500" my="2" alignSelf="center" size="xl" onPress={pickImage} source={{
        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }}> </Avatar>
    
    <FormControl isRequired>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Username
        </FormControl.Label>
        <Input
          placeholder="Tambua Evaristus"
        />
      </FormControl>

      <FormControl isDisabled>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          email
        </FormControl.Label>
        <Input
          placeholder="John"
          _disabled
          //   onChangeText={}
        />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Phone 
        </FormControl.Label>
        <Input
          placeholder="677777777"
          
          //   onChangeText={}
        />
      </FormControl>

      <FormControl>
      <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Gender 
        </FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Gender"
          placeholder="Gender"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
        //   onValueChange={(gender) => setGender(gender)}
        >
          <Select.Item label="male" value="male" />
          <Select.Item label="female" value="female" />
        </Select>
      </FormControl>
      <Button onPress={updateUserProfile} mt="5" colorScheme="cyan">
        Update Profile
      </Button>
    </VStack>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({})