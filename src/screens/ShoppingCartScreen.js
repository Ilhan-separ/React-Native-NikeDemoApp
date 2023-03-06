import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { normalize } from "../utils/scales";
import CustomButton from "../components/button";

import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const addToCard = () => {
    console.warn("Added to Card mk");
  };

  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <CustomButton text={"Chekout"} onPressed={addToCard} />
    </>
  );
};

const ShoppingCartTotals = () => (
  <View style={styles.totalContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>500,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>510,00 US$</Text>
    </View>
    <View style={{ margin: normalize(34) }}></View>
  </View>
);

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: normalize(14),
    fontWeight: "200",
    color: "gray",
  },
  textBold: {
    fontSize: normalize(14.6),
    fontWeight: "500",
  },
});

export default ShoppingCart;
