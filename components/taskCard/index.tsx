import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import { TasKCard } from "./types";
import { Colors } from "@theme";

export const TaskCard: React.FC<TasKCard> = ({ item, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}
        style={styles.container}
        activeOpacity={0.7}
      >
        <View style={styles.containerTitle}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {item.description}
          </Text>
        </View>
        <AntDesign name="right" size={24} color={Colors.dark_grey} />
      </TouchableOpacity>
    </View>
  );
};
