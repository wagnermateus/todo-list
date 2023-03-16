import { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { Task } from "../components/Task";
import { styles } from "./styles";
import listClipboard from "../../assets/listClipboard.png";

type Tasks = {
  description: string;
  status: boolean;
};

export function Home() {
  const [tasks, settasks] = useState<Tasks[]>([]);
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

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => <Task key={item.description} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Image source={listClipboard} style={styles.clipboard} />
            <View>
              <Text style={styles.listEmptyTextBold}>
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text style={styles.listEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
