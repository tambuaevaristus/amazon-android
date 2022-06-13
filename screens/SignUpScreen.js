import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";
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
  Heading,
  FormControl,
  Link,
} from "native-base";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";


const SignUpScreen = ({ navigation }) => {
  const auth = getAuth(app);
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const usersCollectionRef = collection(db,"users" )


  const isCorrectPassword = password === newPassword;
  // check if passwords match

  

  const register = () => {



    isCorrectPassword ? 
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        // Signed in
        const user = userCredential.user;
        alert("successfully created an acccount");
        navigation.navigate("DrawerNavigation");
         // Add user to database

         setDoc(doc(db, "users", auth.currentUser.uid ), { email: email, password: password });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode);
        // ..
      })  : alert("password mismatch")
    
  };

  return (
    <Center w="100%" h="100%" mt={-10} >
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png",
              }}
              alt="Alternate Text"
              size="xl"
            
              resizeMode="contain"
            />
   
      <Box
        safeArea
        p="5"
        py="8"
        borderColor="orange.600"
        borderWidth={1}
        alignContent="center"
        w="90%"
        maxW="290"
        borderRadius={5}
      >
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input
              value={email}
              bg="white"
              borderColor="orange.900"
              onChangeText={(email) => setEmail(email)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              borderColor="orange.900"
              value={password}
              bg="white"
              onChangeText={(password) => setPassword(password)}
            />
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              borderColor="orange.900"
              value={newPassword}
              bg="white"
              onChangeText={(newPassword) => setNewPassword(newPassword)}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" onPress={register} colorScheme="orange">
            Sign Up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I have an acccount {" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={()=>
                navigation.navigate('Login')
              }
            >
              Go to Login
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
