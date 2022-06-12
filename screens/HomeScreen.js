import * as React from "react";
import Products from "../components/Products";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import Checkout from "../components/Checkout";
import { EventRegister } from "react-native-event-listeners";

function HomeScreen({ navigation }) {

  const [ShopingCartBtn, setShopingCartBtn] = React.useState();

  React.useEffect(() => {
    const listener = EventRegister.addEventListener('ShoppingCartBtn', (data) => {
       setShopingCartBtn(data);
  })
    return () => {
      EventRegister.removeEventListener(listener)
    };
  }, []);


  
  




  return (
    <ScrollView>
        {ShopingCartBtn ? <Checkout/> : <Products/>}
    </ScrollView>
  );
}

export default HomeScreen;
