import  React, {useState} from "react";
import Products from "../components/Products";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import Checkout from "../components/Checkout";
import { EventRegister } from "react-native-event-listeners";

function HomeScreen({ navigation }) {

  const [ShopingCartBtn, setShopingCartBtn] = useState();
  const [condition, setCondition] = useState(true);


  React.useEffect(() => {
    const listener = EventRegister.addEventListener('ShoppingCartBtn', (data) => {
      //  setShopingCartBtn(data);
      setCondition(!condition)
      
  })
    return () => {
      EventRegister.removeEventListener(listener)
    };
  }, []);



  return (
    <ScrollView>
        {
        condition ? <Products/> : <Checkout/>}
    </ScrollView>
  );
}

export default HomeScreen;
