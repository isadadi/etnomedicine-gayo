// app/_layout.tsx
import LoginModalGlobal from "@/components/screen/login-required-modal";
import "@/global.css";
import { useAppStartup } from "@/hooks/useAppStartUp";
import { SessionProvider, useSession } from "@/stores/authStore";
import { customTheme } from "@/theme/custom-theme";
import { ExpoIconsPack } from "@/theme/icon-pack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import CustomSplashScreen from "../components/splashscreen";

export default function Layout() {
  return (
    <SessionProvider>
      <InnerLayout />
    </SessionProvider>
  );
}

// ✅ Pindahkan logic startup ke sini
function InnerLayout() {
  const { showCustomSplash, onLayoutRootView } = useAppStartup();

  if (showCustomSplash) return <CustomSplashScreen />;

  return (
    <View onLayout={onLayoutRootView} className="flex-1 bg-gray-100">
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <IconRegistry icons={ExpoIconsPack} />
          <ApplicationProvider
            {...eva}
            theme={{ ...eva.light, ...customTheme }}
          >
            <StatusBar style="auto" />
            <RootNavigator />
            <LoginModalGlobal />
          </ApplicationProvider>
        </SafeAreaProvider>
        <Toast />
      </GestureHandlerRootView>
    </View>
  );
}

function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
      <Stack.Screen name="(app)" />
      <Stack.Protected guard={!session}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
    </Stack>
  );
}
