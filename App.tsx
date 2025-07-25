import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./components/flex_box";

interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [todos, setTodos] = useState("");
  const [listTodos, setListTodos] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todos) {
      Alert.alert("Lỗi", "Hãy nhập việc cần làm", [
        {
          text: "Xác nhận",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
      return;
    }
    setListTodos([...listTodos, { id: randomInteger(2, 2000), name: todos }]);
    setTodos("");
  };

  const deleteTodo = (id: number) => {
    setListTodos(listTodos.filter((todo) => todo.id !== id));
  };
  const handleVerifyDelete = (id: number) => {
    Alert.alert("Xác nhận", "Bạn có chắc muốn xóa việc này không?", [
      {
        text: "Hủy",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Xóa",
        onPress: () => deleteTodo(id),
      },
    ]);
  };
  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    //   <View style={styles.container}>
    //     <Text style={styles.header}>Todo app</Text>

    //     {/* form */}
    //     <View style={styles.body}>
    //       <TextInput
    //         value={todos}
    //         style={styles.todoInput}
    //         onChangeText={(value) => setTodos(value)}
    //       />
    //       <Button title="Add todo" onPress={handleAddTodo} />
    //     </View>

    //     {/* list todo */}
    //     <View style={styles.body}>
    //       <FlatList
    //         data={listTodos}
    //         renderItem={({ item }) => {
    //           return (
    //             <Pressable
    //               style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
    //               onPress={() => handleVerifyDelete(item.id)}
    //             >
    //               <Text style={styles.todoItem}>{item.name}</Text>
    //             </Pressable>
    //           );
    //         }}
    //       />
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
    <FlexBox />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40,
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
