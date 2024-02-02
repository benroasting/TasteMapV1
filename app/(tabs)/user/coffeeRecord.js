import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const coffeeRecord = () => {
  return (
    <View style={styles.recordContainer}>
      <Text style={styles.title}>
        What did things you notice about this coffee?
      </Text>
    </View>
  );
};

export default coffeeRecord;

const styles = StyleSheet.create({
  recordContainer: {
    flex: 1,
    alignItems: "center",
    margin: 40,
  },
  title: {
    fontFamily: "work-sans",
    fontSize: 24,
    color: COLORS.salmon,
    textAlign: "center",
  },
});
