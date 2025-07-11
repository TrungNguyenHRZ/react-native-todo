import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>{count}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button
          title="trừ"
          onPress={() => setCount(count - 1)}
          disabled={count <= 0}
        />
        <Button title="cộng" onPress={() => setCount(count + 1)} />
        <Button title="Mặc định" onPress={() => setCount(1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  countButton: {},
});
