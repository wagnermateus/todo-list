import { View } from "react-native";
import { Header } from "../components/Header";
import { NewTaskForm } from "../components/NewTaskForm";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTaskForm />
    </View>
  );
}
