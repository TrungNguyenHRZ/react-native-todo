import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Eric",
      age: 18,
    },
    {
      id: 2,
      name: "Eric1",
      age: 18,
    },
    {
      id: 3,
      name: "Eric2",
      age: 18,
    },
    {
      id: 4,
      name: "Eric3",
      age: 18,
    },
    {
      id: 5,
      name: "Eric4",
      age: 18,
    },
    {
      id: 6,
      name: "Eric5",
      age: 18,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello world</Text>
      <ScrollView>
        {students.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                padding: 15,
                backgroundColor: "pink",
                marginBottom: 80,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
