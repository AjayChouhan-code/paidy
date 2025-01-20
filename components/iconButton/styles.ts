import { Colors } from "@theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderRadius: 5,
    margin: 5,
    backgroundColor: Colors.blue_dark,
  },
  iconWrapper: {},
  label: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "700",
    marginTop: 3,
  },
});

export default styles;
