import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { normalize } from "../utils/scales";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useRef, useState } from "react";
import CustomButton from "../components/button";
import { useNavigation } from "@react-navigation/native";

import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import SelectDropdown from "react-native-select-dropdown";

const DetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const { width } = useWindowDimensions();

  var size = product.sizes[0];
  const addToCard = () => {
    dispatch(cartSlice.actions.addCartItem({ product: product, size: size }));
  };

  //SLIDER
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const slideList = Array.from({ length: product.images.length }).map(
    (_, i) => {
      return {};
    }
  );

  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScroll}
        />

        <View style={styles.paginationDotContainer} pointerEvents="none">
          {slideList.map((_, i) => {
            return (
              <View
                key={i}
                style={[
                  styles.paginationDot,
                  index === i
                    ? styles.paginationDotActive
                    : styles.paginationDotInactive,
                ]}
              ></View>
            );
          })}
        </View>

        <View style={{ padding: 20 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{product.name}</Text>

            <Text style={styles.price}>${product.price}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
        <Ionicons name="close" size={24} color="white" />
      </Pressable>

      <SelectDropdown
        data={product.sizes}
        defaultButtonText={product.sizes[0]}
        onSelect={(selectedItem, index) => {
          size = selectedItem;
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownOverlayColor={"transparent"}
        dropdownStyle={dropdownStyles.dropdownStyle}
        buttonStyle={dropdownStyles.buttonStyle}
        buttonTextStyle={dropdownStyles.buttonTextStyle}
        rowStyle={dropdownStyles.rowStyle}
        rowTextStyle={dropdownStyles.rowTextStyle}
      />

      <CustomButton text={"Add to Cart"} onPressed={addToCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  paginationDotContainer: {
    position: "absolute",
    top: normalize(310),
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  paginationDot: {
    width: normalize(28),
    height: normalize(3),
    marginHorizontal: 3,
  },
  paginationDotActive: { backgroundColor: "black" },
  paginationDotInactive: { backgroundColor: "#00000033" },
  titleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: normalize(10),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: "700",
  },
  price: {
    fontSize: normalize(13),
    fontWeight: "500",
    letterSpacing: 1.2,
  },
  description: {
    fontSize: normalize(16),
    marginVertical: normalize(8),
    fontWeight: "100",
    lineHeight: 28,
    letterSpacing: 0.5,
    marginBottom: normalize(50),
  },
  icon: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#000000BB",
    borderRadius: 50,
    padding: 5,
  },
});

const dropdownStyles = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    backgroundColor: "black",
    height: 48,
    width: 48,
    top: 30,
    right: 20,
    backgroundColor: "#000000BB",
    borderRadius: 50,
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
  },
  rowStyle: {
    borderRadius: 50,
    backgroundColor: "#000000BB",
    height: 43,
    width: 43,
    borderColor: "transparent",
    marginVertical: 5,
  },
  rowTextStyle: {
    color: "white",
    fontSize: 12,
  },
  dropdownStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    height: 500,
    alignItems: "center",
  },
});

export default DetailsScreen;
