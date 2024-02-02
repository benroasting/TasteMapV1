import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="user/coffeeRecord"
        options={{
          headerTitle: "Record a Coffee",
          title: "Record",
        }}
      />
      <Tabs.Screen
        name="user/coffeeMap"
        options={{ headerTitle: "Your Coffee Map", title: "Map" }}
      />
      <Tabs.Screen
        name="user/coffeeJournal"
        options={{ headerTitle: "Your Coffee Journal", title: "Journal" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
