import * as React from "react";
import Products from "../components/Products";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
        <Products />
      {/* </StateProvider> */}
    </ScrollView>
  );
}

export default HomeScreen;
