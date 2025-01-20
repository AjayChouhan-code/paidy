import { Colors } from "@/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 20,
    minHeight: "50%",
    zIndex: 100,
    backgroundColor: "white",
  },
  buttonStyle: {
    width: "40%",
    marginVertical: 20,
    paddingVertical: 8,
  },
  sheetView: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
  close: {
    alignSelf: "flex-end",
  },
  taskList: {
    color: Colors.dark_grey,
    fontSize: 17,
    fontWeight: "600",
    margin: 10,
  },
  fab: {
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue_dark,
    elevation: 8,
    shadowColor: Colors.dark_grey,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    zIndex: 1,
  },
  addTaskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelDontHave: {
    fontSize: 14,
    color: Colors.dark_grey,
    fontWeight: "500",
  },
  containerAddIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

export default styles;
