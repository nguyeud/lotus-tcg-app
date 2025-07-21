import { StyleSheet } from "react-native";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function ThemeTab() {
  return (
    <Box style={styles.container}>
      <Text>This is the Theme tab.</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
