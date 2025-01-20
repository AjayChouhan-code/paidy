import { Colors } from "@theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 6,
    shadowColor: Colors.dark_grey,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: Colors.dark_grey,
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: Colors.coolGrey,
    marginTop: 5,
  },
  containerTitle: {
    flex: 1,
  },
});

export default styles;
