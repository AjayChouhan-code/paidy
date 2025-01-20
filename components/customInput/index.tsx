import React from "react";
import { View, Text, TextInput } from "react-native";

import { CustomInputProps } from "./types";
import styles from "./styles";

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  style,
  error,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, style]} {...textInputProps} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
