import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type NewTaskProps = {
  onCreateTask: (description: string) => void;
};
export function NewTaskForm({ onCreateTask }: NewTaskProps) {
  const [taskDescription, setTaskDescription] = useState("");

  function createTask(taskDescription: string) {
    onCreateTask(taskDescription);
    setTaskDescription("");
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTaskDescription}
        value={taskDescription}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => createTask(taskDescription)}
      >
        <AntDesign name="pluscircleo" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
