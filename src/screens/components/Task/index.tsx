import { View, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./styles";

type TaskProps = {
  description: string;
  onCompleteTask: (description: string) => void;
  onRemoveTask: (description: string) => void;
};

export function Task({ description, onCompleteTask, onRemoveTask }: TaskProps) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  function handleSetTaskCompleted(taskDescription: string) {
    onCompleteTask(taskDescription);
    setTaskCompleted(!taskCompleted);
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={24}
        fillColor={taskCompleted ? "#5E60CE" : "#4EA8DE"}
        unfillColor="transparent"
        text={description}
        textStyle={{ color: "#f2f2f2", fontSize: 14, maxWidth: 235 }}
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={taskCompleted}
        onPress={() => handleSetTaskCompleted(description)}
      />

      <TouchableOpacity onPress={() => onRemoveTask(description)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={22}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
