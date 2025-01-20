import { TASK } from "types";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";

/*
 * Function to get a task by its ID from the provided tasks array.
 */
export const getTaskById = (id: number, tasks: TASK[]) => {
  return tasks.find((task) => task.id === id);
};

/*
 * Function to generate a random 5-digit number as a task ID.
 */
export const generateId = (): number => {
  return Math.floor(Math.random() * 90000) + 10000; // Generates a 5-digit number
};

/*
 * Function to authenticate the user using local device authentication.
 */
export const authenticate = async (action: () => void) => {
  const result = await LocalAuthentication.authenticateAsync({
    promptMessage: "Authenticate to proceed",
  });
  if (result.success) {
    action();
  } else {
    Alert.alert("Authentication failed");
  }
};

/*
 * Function to get the current date formatted as "Day Month Year".
 */
export const getCurrentDate = (): string => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
