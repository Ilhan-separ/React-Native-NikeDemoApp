import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./screens/ProductScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ShoppingCart from "./screens/ShoppingCartScreen";
import { Pressable, Text, View, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { normalize } from "./utils/scales";

import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector((state) => state.cart.cartNumberOfItems);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <AntDesign name="shoppingcart" size={24} color="black" />
                <View style={numberOfItems === 0 ? {} : styles.textContainer}>
                  <Text style={styles.text}>{numberOfItems}</Text>
                </View>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "fade_from_bottom",
          }}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCart}
          options={{
            presentation: "card",
            animation: "slide_from_right",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//STYLES
const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 1,
    width: normalize(13),
    height: normalize(13),
    backgroundColor: "black",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: normalize(9),
    alignSelf: "center",
    color: "white",
  },
});

export default Navigation;
