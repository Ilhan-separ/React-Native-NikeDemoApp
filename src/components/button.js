import { Pressable, StyleSheet, Text, Animated } from "react-native";
import { normalize } from "../utils/scales";

const CustomButton = ({ text, onPressed }) => {
  const animated = new Animated.Value(1);
  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPressed}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={styles.button}
    >
      <Animated.View style={{ opacity: animated }} onPress={onPressed}>
        <Text style={styles.buttonText}>{text}</Text>
      </Animated.View>
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
