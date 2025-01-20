import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export interface IconButtonProps {
  label: string;
  onPress: () => void;
  labelStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  children: ReactNode;
}
