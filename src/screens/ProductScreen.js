import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import products from "../data/products.js";
import { normalize } from "../utils/scales.js";
import { useNavigation } from "@react-navigation/native";

const legendaryText =
  " Selamın Aleyküm güzel kardeşlerim, biz burdayız hiç meraklanmayın, yapabildiklerimizin sınırı ";

const ProductScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.legendaryText}>
        {legendaryText}
        <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
          Bizle
        </Text>{" "}
        sınırlıdır.
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Product Details")}
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
