import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductScreen from "./screens/ProductScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ShoppingCart from "./screens/ShoppingCartScreen";
import { Pressable, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { normalize } from "./utils/scales";

const Stack = createNativeStackNavigator();

const Navigation = () => {
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
                <View
                  style={{
                    marginLeft: 2,
                    width: normalize(13),
                    height: normalize(13),
                    backgroundColor: "black",
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: normalize(9),
                      alignSelf: "center",
                      color: "white",
                    }}
                  >
                    3
                  </Text>
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

export default Navigation;
