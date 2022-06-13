import { StyleSheet, Image, Platform, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
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
  KeyboardAvoidingView,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import {
  collection,
  getDocs,
  doc,
  update,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

const UserProfileScreen = () => {
  const auth = getAuth();

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const email = auth.currentUser.email;
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  //   const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(usersCollectionRef);
  //       console.log(data);
  //     };

  //     getUsers();
  //   }, []);

  const pickImage = async () => {
    console.log("pressed");
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

  const updateUserProfile = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      name: name,
      image: image,
      gender: gender,
      phone: phone,
    });
  };
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <VStack width="90%" mx="3" pl="10" maxW="300px">
          <Center>
            <Text bold mt="3" fontSize="lg">
              User Profile
            </Text>
          </Center>

          <TouchableOpacity onPress={pickImage}>
            <Avatar
              bg="indigo.500"
              my="2"
              alignSelf="center"
              size="xl"
              source={{ uri: image }}
            >
              {" "}
            </Avatar>
          </TouchableOpacity>

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
              value={name}
              onChangeText={(name) => setName(name)}
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
              value={auth.currentUser.email}
              //   onChangeText={(name)=> setName(name)}
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
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
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
              onValueChange={(gender) => setGender(gender)}
            >
              <Select.Item label="male" value="male" />
              <Select.Item label="female" value="female" />
            </Select>
          </FormControl>
          <Button onPress={updateUserProfile} mt="5" colorScheme="cyan">
            Update Profile
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({});
