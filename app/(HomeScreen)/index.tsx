import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";

import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { RootState } from "store";
import styles from "./styles";
import { Colors } from "@theme";
import { TASK } from "types";
import { authenticate, CONSTANTS } from "@utils";
import { addTask } from "./../../store/todoSlice";
import { CustomButton, CustomInput, TaskLists } from "@components";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { todos } = useSelector((state: RootState) => state.todos);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(false);

  // State for error messages
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  // Handle Title Change
  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  // Handle Description Change
  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleAddTask = () => {
    // Validate inputs when button is pressed
    let titleError = "";
    let descriptionError = "";

    if (title.trim() === "") {
      titleError = "Title is required";
    }

    if (description.trim() === "") {
      descriptionError = "Description is required";
    } else if (description.length < 10) {
      descriptionError = "Description must be at least 10 characters long";
    }

    if (titleError || descriptionError) {
      setErrors({ title: titleError, description: descriptionError });
    } else {
      // Clear errors
      setErrors({ title: "", description: "" });
      if (bottomSheetRef.current) {
        bottomSheetRef.current.close();
      }
      // dispatch an action to save the task
      dispatch(addTask({ title, description }));
      Keyboard.dismiss();
    }
  };

  // to open bottomsheet to add task
  const handlePress = () => {
    authenticate(() => {
      setTitle("");
      setDescription("");
      if (bottomSheetRef.current) {
        bottomSheetRef.current.expand();
      }
    });
  };

  // to go task details page
  const onClickTask = (item: TASK): void => {
    router.push({
      pathname: "/(TaskDetails)",
      params: { id: item.id },
    });
  };

  // to close bottomSheet
  const onPressClose = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
      Keyboard.dismiss();
    }
  };

  //If the index is 3, disable the button by setting the state to true
  const handleBottomSheetChange = (index: number) => {
    if (index === 3) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerAddIcon}>
        <Text style={styles.taskList}>{CONSTANTS.taskListTitle}</Text>
        <TouchableOpacity
          style={styles.fab}
          onPress={handlePress}
          disabled={disableButton}
        >
          <Feather name="plus" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <GestureHandlerRootView style={styles.container}>
        {todos?.length > 0 ? (
          <TaskLists taskList={todos} onPress={onClickTask} />
        ) : (
          <View style={styles.addTaskContainer}>
            <Text style={styles.labelDontHave}>{CONSTANTS.noTasksMessage}</Text>
          </View>
        )}
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={["1%", "60%", "50%"]}
          enablePanDownToClose={true}
          onChange={handleBottomSheetChange} // onChange handler
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.sheetView}>
              <TouchableOpacity style={styles.close} onPress={onPressClose}>
                <AntDesign name="close" size={24} color={Colors.red} />
              </TouchableOpacity>
              <CustomInput
                placeholder={CONSTANTS.enterTitlePlaceholder}
                label={CONSTANTS.titleLabel}
                value={title}
                onChangeText={handleTitleChange}
                error={errors.title}
                multiline={true}
                numberOfLines={2}
              />
              <CustomInput
                placeholder={CONSTANTS.enterDescriptionPlaceholder}
                label={CONSTANTS.descriptionLabel}
                value={description}
                onChangeText={handleDescriptionChange}
                error={errors.description}
                multiline={true}
                numberOfLines={5}
              />

              <CustomButton
                title={CONSTANTS.addTaskButton}
                onPress={handleAddTask}
                buttonStyle={styles.buttonStyle}
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

export default HomeScreen;
