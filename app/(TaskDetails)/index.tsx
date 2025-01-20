import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router/build/hooks";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

import {
  CustomButton,
  CustomInput,
  HeaderWithBackButton,
  IconButton,
} from "@components";
import { TASK } from "types";
import { RootState } from "store";
import { Colors } from "@theme";
import styles, { statusContainer } from "./styles";
import { authenticate, CONSTANTS, getTaskById } from "@utils";
import { deleteTodo, updateTodo } from "./../../store/todoSlice";

const TaskDetails = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { id } = useLocalSearchParams();
  const { todos } = useSelector((state: RootState) => state.todos);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isEditTrue, setIsEditTrue] = useState<boolean>(false);
  const numericTaskId = Array.isArray(id) ? Number(id[0]) : Number(id);
  const [taskDetails, setTaskDetails] = useState<TASK>();

  useEffect(() => {
    // for set task details and update task
    if (id) {
      const task: TASK | undefined = getTaskById(numericTaskId, todos);
      if (task) {
        setTaskDetails(task);
        setDescription(task.description);
        setTitle(task.title);
      }
    }
  }, [id, todos]);

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
  const handleUpdateTask = () => {
    // Validate inputs when button is pressed
    let titleError = "";
    let descriptionError = "";

    if (title.trim() === "") {
      titleError = CONSTANTS.titleRequiredError;
    }

    if (description.trim() === "") {
      descriptionError = CONSTANTS.descriptionRequiredError;
    } else if (description.length < 10) {
      descriptionError = CONSTANTS.descriptionMinLengthError;
    }

    if (titleError || descriptionError) {
      setErrors({ title: titleError, description: descriptionError });
    } else {
      setErrors({ title: "", description: "" });

      if (taskDetails) {
        // update task in redux
        dispatch(
          updateTodo({ ...taskDetails, title: title, description: description })
        );
        // hidding the edit layout
        setIsEditTrue(false);
      }
    }
  };

  const handleCancel = () => {
    const task: TASK | undefined = getTaskById(numericTaskId, todos);
    if (task) {
      // set the states if user press on cancel
      setTaskDetails(task);
      setDescription(task.description);
      setTitle(task.title);
    }
    setErrors({ title: "", description: "" });
    setIsEditTrue(false);
  };

  const onPressEdit = (): void => {
    // showing the edit layout
    authenticate(() => {
      setIsEditTrue(true);
    });
  };

  const onPressDone = (): void => {
    // mark as done
    authenticate(() => {
      if (taskDetails) {
        dispatch(updateTodo({ ...taskDetails, status: CONSTANTS.doneMessage }));
      }
    });
  };

  const onPressDelete = (): void => {
    // delete the task
    authenticate(() => {
      if (taskDetails) {
        dispatch(deleteTodo(taskDetails?.id));
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <HeaderWithBackButton title={CONSTANTS.taskDetailsTitle} />
      <View style={statusContainer(taskDetails?.status)}>
        <Text style={styles.stausLabel}>{taskDetails?.status}</Text>
      </View>
      <View style={styles.rootContainer}>
        <View style={styles.containerTitle}>
          {isEditTrue ? (
            <CustomInput
              placeholder={CONSTANTS.enterTitlePlaceholder}
              label={CONSTANTS.titleLabel}
              value={title}
              onChangeText={handleTitleChange}
              error={errors.title}
              multiline={true}
              numberOfLines={2}
            />
          ) : (
            <Text style={styles.title}>{taskDetails?.title}</Text>
          )}

          {!isEditTrue && (
            <TouchableOpacity onPress={onPressEdit}>
              <FontAwesome name="edit" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <Text
          style={styles.createdDate}
        >{`${CONSTANTS.createdOnLabel} - ${taskDetails?.createdDate}`}</Text>

        <View style={styles.containerDescription}>
          {isEditTrue ? (
            <CustomInput
              placeholder={CONSTANTS.enterDescriptionPlaceholder}
              label={CONSTANTS.descriptionLabel}
              value={description}
              onChangeText={handleDescriptionChange}
              error={errors.description}
              multiline={true}
              numberOfLines={10}
            />
          ) : (
            <Text style={styles.description}>{taskDetails?.description}</Text>
          )}
        </View>

        <View>
          {isEditTrue ? (
            <View style={styles.containerUpdate}>
              <CustomButton
                title={CONSTANTS.updateTaskButtonLabel}
                onPress={handleUpdateTask}
                buttonStyle={styles.buttonStyle}
              />
              <CustomButton
                title="Cancel"
                onPress={handleCancel}
                buttonStyle={styles.buttonStyle}
              />
            </View>
          ) : (
            <View style={styles.containerDelete}>
              {taskDetails?.status === "Pending" && (
                <IconButton label="Done" onPress={onPressDone}>
                  <AntDesign
                    name="checkcircleo"
                    size={19}
                    color={Colors.white}
                  />
                </IconButton>
              )}
              <IconButton label="Delete" onPress={onPressDelete}>
                <AntDesign name="delete" size={19} color={Colors.white} />
              </IconButton>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;
