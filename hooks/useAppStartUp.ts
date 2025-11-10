// /hooks/useAppStartup.ts
import { useSession } from "@/stores/authStore";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync(); // cegah hilang otomatis

export function useAppStartup() {
  const { isLoading, session } = useSession();
  const [appReady, setAppReady] = useState(false);
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  // Simulasikan loading awal (cek session, load assets, dll)
  useEffect(() => {
    const prepare = async () => {
      try {
        // Bisa tambahkan preload image/font di sini
        await new Promise((resolve) => setTimeout(resolve, 800));
      } finally {
        setAppReady(true);
      }
    };
    prepare();
  }, []);

  // Sembunyikan native splash setelah siap
  const onLayoutRootView = useCallback(async () => {
    if (appReady) await SplashScreen.hideAsync();
  }, [appReady]);

  // 🔧 Navigasi otomatis & sembunyikan splash
  useEffect(() => {
    if (!isLoading && appReady) {
      const timeout = setTimeout(() => {
        setShowCustomSplash(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, appReady, session]);

  return { showCustomSplash, onLayoutRootView };
}
