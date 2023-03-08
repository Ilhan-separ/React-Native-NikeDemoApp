import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import { normalize } from "../utils/scales";
import CustomButton from "../components/button";

import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubtotal } from "../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const addToCard = () => {
    console.warn("Cash out mk");
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

const ShoppingCartTotals = () => {
  const subTotal = useSelector(selectSubtotal);
  //const delivery = useSelector((state) => state.cart.deliveryFee);
  const delivery = useSelector(selectDeliveryPrice);
  const freeDeliveryFrom = useSelector((state) => state.cart.freeDeliveryFrom);

  return (
    <View style={styles.totalContainer}>
      <Text style={styles.textNotice}>
        Free delivery above {freeDeliveryFrom},00 US${" "}
        <Text style={styles.asterisk}>*</Text>
      </Text>

      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal},00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{delivery},00 US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>
          {subTotal === 0 ? 0 : subTotal + delivery},00 US$
        </Text>
      </View>
      <View style={{ margin: normalize(34) }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
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
  textNotice: {
    fontSize: normalize(9),
    fontStyle: "italic",
    fontWeight: "300",
    paddingBottom: normalize(6),
    color: "grey",
  },
  asterisk: {
    fontSize: normalize(10),
    color: "black",
  },
});

export default ShoppingCart;
