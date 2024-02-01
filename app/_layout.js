import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const AppLayout = () => {
  return <Stack style={styles.rootStyling} />;
};

export default AppLayout;

const styles = StyleSheet.create({
  rootStyling: {
    flex: 1,
    backgroundColor: Colors.butter,
  },
});
