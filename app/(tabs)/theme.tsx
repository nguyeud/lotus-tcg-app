import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { StyleSheet } from "react-native";

export default function ThemeTab() {
  return (
    <Center style={styles.container}>
      <Text>This is the Theme tab.</Text>
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
