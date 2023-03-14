import { Image, View } from "react-native";
import todoLogo from "../../../assets/todoLogo.png";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={todoLogo} />
    </View>
  );
}
