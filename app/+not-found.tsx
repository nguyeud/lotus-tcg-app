import { StyleSheet } from "react-native";

import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";

export default function NotFoundScreen() {
  return (
    <Center style={styles.container}>
      <Text>Error: 404</Text>
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
