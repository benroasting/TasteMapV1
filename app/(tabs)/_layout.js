import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="user/coffeeRecord" />
      <Tabs.Screen name="user/coffeeMap" />
      <Tabs.Screen name="user/coffeeJournal" />
    </Tabs>
  );
};

export default TabsLayout;
