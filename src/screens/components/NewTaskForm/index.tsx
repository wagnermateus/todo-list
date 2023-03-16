import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function NewTaskForm() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
