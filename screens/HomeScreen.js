import  React, {useState} from "react";
import Products from "../components/Products";
import { VStack, HStack, Box, Divider, ScrollView } from "native-base";
import { StateProvider } from "../StateProvider";
import reducer, { initialState } from "../reducer";
import Checkout from "../components/Checkout";
import { EventRegister } from "react-native-event-listeners";

function HomeScreen({ navigation }) {

  const [ShopingCartBtn, setShopingCartBtn] = useState();
  const [condition, setCondition] = useState(false);
  // const condition = true;

  React.useEffect(() => {
    const listener = EventRegister.addEventListener('ShoppingCartBtn', (data) => {
      //  setShopingCartBtn(data);
      // setCondition(()=>setCondition(!condition))
      
       setCondition(!condition)
      console.log(condition)
      
  })
    return () => {
      EventRegister.removeEventListener(listener)
    };
  }, []);



  return (
    <ScrollView>
      <Products/> 
    </ScrollView>
  );
}

export default HomeScreen;
