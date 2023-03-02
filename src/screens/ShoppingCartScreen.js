import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { normalize } from "../utils/scales";

const ShoppingCart = () => {
  const addToCard = () => {
    console.warn("Added to Card mk");
  };

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={addToCard} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
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
    marginVertical: 0.4,
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

  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: normalize(14),
    borderRadius: 50,
    alignItems: "center",
    elevation: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: normalize(14.6),
    letterSpacing: 0.5,
  },
});

export default ShoppingCart;
