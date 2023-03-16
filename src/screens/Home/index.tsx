import { useState } from "react";
import { View, Text, FlatList, Image, Alert } from "react-native";
import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { Task } from "../components/Task";
import { styles } from "./styles";
import listClipboard from "../../assets/listClipboard.png";

type Tasks = {
  description: string;
  status: "done" | "todo";
};

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  function handleCreateTask(description: string) {
    const taskAlreadyExists = tasks.find(
      (task) => task.description === description
    );
    if (!taskAlreadyExists) {
      setTasks((prevState) => [...prevState, { description, status: "todo" }]);
    } else {
      Alert.alert(
        "Tareja já existe !",
        "Já adicionou esta tarefa a sua lista."
      );
    }
  }

  function handleTaskStatus(description: string) {
    const newTasksArry = tasks.map((task) => {
      if (task.description === description) {
        if (task.status === "todo") task.status = "done";
        else {
          task.status = "todo";
        }
        return task;
      }
      return task;
    });
    setTasks(newTasksArry);
  }

  const completedTasksCounter = tasks.filter(
    (task) => task.status === "done"
  ).length;

  return (
    <View style={styles.container}>
      <Header />
      <NewTaskForm onCreateTask={handleCreateTask} />
      <View style={styles.tasksInfo}>
        <View style={styles.taskInfocontent}>
          <Text style={styles.tasksCreatedText}>Criadas </Text>
          <View style={styles.tasksCounterContainer}>
            <Text style={styles.tasksCounter}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.taskInfocontent}>
          <Text style={styles.completedTasksText}>Concluídas </Text>
          <View style={styles.tasksCounterContainer}>
            <Text style={styles.tasksCounter}>{completedTasksCounter}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <Task
            key={item.description}
            description={item.description}
            onCompleteTask={handleTaskStatus}
          />
        )}
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
