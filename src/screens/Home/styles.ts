import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  tasksInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  taskInfocontent: {
    flexDirection: "row",
    gap: 8,
  },
  tasksCreatedText: {
    flexDirection: "row",
    fontSize: 14,
    fontWeight: "700",
    color: "#4EA8DE",
  },
  completedTasksText: {
    flexDirection: "row",
    fontSize: 14,
    fontWeight: "700",
    color: "#8284FA",
  },
  tasksCounterContainer: {
    width: 24,
    alignItems: "center",
    borderRadius: 100,

    backgroundColor: "#333333",
  },
  tasksCounter: {
    fontSize: 12,
    fontWeight: "700",
    color: "#D9D9D9",
  },
  tasks: {
    gap: 8,
  },
});
