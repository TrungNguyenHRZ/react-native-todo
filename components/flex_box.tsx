import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  item1: {
    backgroundColor: "violet",
    padding: 30,
  },
  item2: {
    backgroundColor: "orange",
    padding: 30,
  },
  item3: {
    backgroundColor: "cyan",
    padding: 30,
  },
  item4: {
    backgroundColor: "green",
    padding: 30,
  },
});
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
};
export default FlexBox;
