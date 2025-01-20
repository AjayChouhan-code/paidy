import { Colors } from "@theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark_grey,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light_grey,
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    color: Colors.dark_grey,
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 5,
  },
});

export default styles;
