import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  //   const [fontsLoaded] = useFonts({
  //     "work-sans": require("../assets/fonts/WorkSans-VariableFont_wght.ttf"),
  //     "work-sans-italic": require("../assets/fonts/WorkSans-Italic-VariableFont_wght.ttf"),
  //   });

  //   const onLayoutRootView = useCallback(async () => {
  //     if (fontsLoaded) {
  //       await SplashScreen.hideAsync();
  //     }
  //   }, [fontsLoaded]);

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;
