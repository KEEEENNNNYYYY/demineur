import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

export const homeStyle = StyleSheet.create({
  logoContainer: {
    width,
    height: height / 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    objectFit: "contain",
    height: height / 4,
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBlock: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 40,
  },
});
