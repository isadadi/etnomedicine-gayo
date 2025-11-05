// app/_layout.tsx
import "@/global.css";
import { SessionProvider, useSession } from "@/stores/auth-store";
import { SplashScreenController } from "@/utils/splash";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
// export const unstable_settings = {
//   initialRouteName: "(auth)",
// };

export default function Layout() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SessionProvider>
          <SplashScreenController />
          <StatusBar style="auto" />
          <RootNavigator />
        </SessionProvider>
      </ApplicationProvider>
    </>
  );
}

// Create a new component that can access the SessionProvider context later.
function RootNavigator() {
  const { session } = useSession();

  return (
    <Stack>
      <Stack.Protected guard={!!session}>
        <Stack.Screen name="(app)" />
      </Stack.Protected>

      <Stack.Protected guard={!session}>
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}
