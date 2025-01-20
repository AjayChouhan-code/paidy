import { TextStyle, ViewStyle } from "react-native";

export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}
