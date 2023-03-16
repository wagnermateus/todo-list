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
  listEmpty: {
    width: 327,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    alignItems: "center",
    gap: 16,
  },

  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "400",
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "700",
  },
  clipboard: {
    marginTop: 48,
  },
});
