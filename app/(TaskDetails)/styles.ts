import { Colors } from "@/theme";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark_grey,
    maxWidth: "80%",
  },
  containerTitle: {
    flexDirection: "row",
    gap: 10,
  },
  rootContainer: {
    marginTop: 40,
    paddingHorizontal: 15,
  },
  containerDescription: {
    marginTop: 15,
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.dark_grey,
  },
  buttonStyle: {
    marginVertical: 20,
    paddingVertical: 6,
  },
  containerDelete: {
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  containerUpdate: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 15,
  },

  stausLabel: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "600",
  },
  createdDate: {
    fontSize: 11,
    color: Colors.dark_grey,
    fontWeight: "400",
  },
  container: { flex: 1 },
});

export default styles;

export const statusContainer = (status: string = "Pending"): ViewStyle => {
  return {
    backgroundColor: status === "Pending" ? Colors.red : Colors.green,
    alignSelf: "flex-start",
    marginLeft: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderRadius: 5,
  };
};
