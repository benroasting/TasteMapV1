import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Colors from "../../constants/Colors";

const Index = () => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>taste map</Text>

      <Link href="user/coffeeRecord">add a coffee</Link>
      <Link href="user/coffeeMap">your taste map</Link>
      <Link href="user/coffeeJournal">your coffee journal</Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
  },
  title: {
    fontFamily: "work-sans",
    fontSize: 48,
    color: Colors.cerulean,
    textAlign: "center",
  },
});
