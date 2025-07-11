import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>TrungNT</Text>
        <Text style={styles.parent}>
          TrungNTTT <Text style={styles.child}>Hello</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Hello world with TrungNT</Text>
      <Text>Hello world with TrungNT</Text>
      <StatusBar style="auto" />
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
  hello1: {
    color: "red",
    fontSize: 60,
    textAlign: "center",
    borderColor: "green",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
  },
  parent: {
    fontSize: 60,
    color: "green",
  },
  child: {
    fontSize: 30,
    color: "pink",
  },
});
