import React from "react";
import { FlatList, ListRenderItem, View } from "react-native";

import { TaskListsProps } from "./type";
import { TASK } from "@types";
import { TaskCard } from "../taskCard";

export const TaskLists: React.FC<TaskListsProps> = ({ taskList, onPress }) => {
  const renderItem: ListRenderItem<TASK> = ({ item }) => {
    return <TaskCard item={item} onPress={onPress} />;
  };

  return (
    <View>
      <FlatList
        data={taskList}
        keyExtractor={(item: TASK) => item?.id?.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
