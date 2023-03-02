import { SafeAreaView, StatusBar } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCartScreen";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor="rgba(255, 255, 255, 1)"
      />
      {/* <ProductScreen/> */}
      {/* <DetailsScreen /> */}
      <ShoppingCart />
    </SafeAreaView>
  );
}
