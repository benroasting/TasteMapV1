import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";

const coffeeJournal = () => {
  return (
    <View style={styles.journalContainer}>
      <Text style={styles.title}>
        Look at all the coffees you've tasted ...{" "}
      </Text>
    </View>
  );
};

export default coffeeJournal;

const styles = StyleSheet.create({
  journalContainer: {
    flex: 1,
    alignItems: "center",
    margin: 40,
  },
  title: {
    fontSize: 24,
    color: COLORS.salmon,
  },
});
