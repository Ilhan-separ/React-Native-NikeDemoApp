import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products.js";
import { normalize } from "../utils/scales.js";
import AppBar from "../components/appBar.js";

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text style={styles.legendaryText}>
        Selamın Aleyküm güzel kardeşlerim, biz burdayız hiç meraklanmayın,
        yapabildiklerimizin sınırı{" "}
        <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>Bizle</Text>{" "}
        sınırlıdır.
      </Text>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
            <Text style={styles.itemContainerText}>{item.name}</Text>
          </View>
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
    paddingBottom: normalize(12),
    paddingTop: normalize(8),
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
