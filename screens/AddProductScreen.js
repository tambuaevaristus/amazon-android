import { StyleSheet, Image, Platform } from "react-native";
import React, { useState } from "react";
import {
  VStack,
  HStack,
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
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";
import { useToast } from "native-base";

const AddProductScreen = () => {
const auth = getAuth();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState({});
  const productRef = collection(db, "products");
  const toast = useToast();
  function handleSubmit() {

    addDoc(productRef,{
       title: title,
       description:description,
       image: image,
       rating: rating,
       userId : auth.currentUser.uid,

    }).then(()=>{
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              Product Added Successfully!!!
            </Box>
          );
        },
      });
    })

    

    setTitle('');
    setDescription('');
    setRating({});
    setImage(" ")
  }

  const pickImage = async () => {
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

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <VStack width="90%" mx="3" mb="5" pl="10" maxW="300px">
          <Center>
            <Text bold mt="3" fontSize="lg">
              Add Product
            </Text>
          </Center>
          <FormControl isRequired>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Title
            </FormControl.Label>
            <Input
              placeholder="Enter product name"
              value={title}
                onChangeText={(e)=>setTitle(e)}
            />
          </FormControl>

          <FormControl my="3">
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              Description
            </FormControl.Label>
            <TextArea
              h={20}
              placeholder="Enter Description"
              w="100%"
              maxW="300"
              value={description}
                onChangeText={(d)=>setDescription(d)}
            />
          </FormControl>

          <FormControl>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Rating"
              placeholder="Choose Rating"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(rating) => setRating(rating)}
            >
              <Select.Item label="1" value={1} />
              <Select.Item label="2" value={2} />
              <Select.Item label="3" value={3} />
              <Select.Item label="4" value={4} />
              <Select.Item label="5" value={5} />
            </Select>
          </FormControl>

          <View my="5">
            <Button onPress={pickImage}>Pick an Image</Button>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: 200 }}
              />
            )}
          </View>

          <Button onPress={handleSubmit} mt="5" colorScheme="cyan">
            Add Product
          </Button>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default AddProductScreen;

const styles = StyleSheet.create({});
