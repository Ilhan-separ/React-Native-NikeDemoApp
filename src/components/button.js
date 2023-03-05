import { Pressable, StyleSheet, Text } from "react-native";
import { normalize } from "../utils/scales";

const CustomButton = ({ text, onPressed }) => {
  return (
    <Pressable onPress={onPressed} style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default CustomButton;
