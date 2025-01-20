import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { IconButtonProps } from "./types";
import styles from "./styles";

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  onPress,
  buttonStyle,
  children,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={styles.iconWrapper}>{children}</View>
      <Text style={[styles.label]}>{label}</Text>
    </TouchableOpacity>
  );
};
