import { View, Text } from "react-native";
import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { Task } from "../components/Task";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTaskForm />
      <View style={styles.tasksInfo}>
        <View style={styles.taskInfocontent}>
          <Text style={styles.tasksCreatedText}>Criadas </Text>
          <View style={styles.tasksCounterContainer}>
            <Text style={styles.tasksCounter}>5</Text>
          </View>
        </View>
        <View style={styles.taskInfocontent}>
          <Text style={styles.completedTasksText}>Concluídas </Text>
          <View style={styles.tasksCounterContainer}>
            <Text style={styles.tasksCounter}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.tasks}>
        <Task />
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
}
