import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export const buttonStyle = StyleSheet.create({
  container: {
    margin: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14a4f8ff",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
