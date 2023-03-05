import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { normalize } from "../utils/scales.js";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";

import { productsSlice } from "../store/productsSlice.js";

const legendaryText = "Your potential only limited with ";

const ProductScreen = () => {
  const navigation = useNavigation();

  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.legendaryText}>
            {legendaryText}
            <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
              Yourself.
            </Text>
          </Text>
        }
        showsVerticalScrollIndicator={false}
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));

              navigation.navigate("Product Details");
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.itemContainerText}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: "50%",
    padding: normalize(2),
  },
  legendaryText: {
    paddingBottom: normalize(10),
    paddingTop: normalize(10),
    fontSize: normalize(11),
    fontStyle: "italic",
    textAlign: "center",
  },
  itemContainerText: {
    alignSelf: "flex-end",
    padding: normalize(6),
    position: "absolute",
    bottom: 0,
    fontSize: normalize(10),
    fontWeight: "100",
    fontStyle: "italic",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
