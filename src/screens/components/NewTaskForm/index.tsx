import { AntDesign } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function NewTaskForm() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#F2F2F2"
      />
      <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
