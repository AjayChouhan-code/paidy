import { Colors } from "@theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue_dark,
    borderRadius: 8,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: Colors.coolGrey,
  },
});

export default styles;
