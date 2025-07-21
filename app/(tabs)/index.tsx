import { StyleSheet } from "react-native";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function HomeTab() {
  return (
    <Box style={styles.container}>
      <Text>This is the Home tab.</Text>
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
