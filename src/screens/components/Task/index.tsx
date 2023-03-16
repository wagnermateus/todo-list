import { View, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./styles";

type TaskProps = {
  description: string;
};

export function Task({ description }: TaskProps) {
  const [taskCompleted, setTaskCompleted] = useState(false);

  function handleSetTaskCompleted() {
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
        onPress={handleSetTaskCompleted}
      />

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={22}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
