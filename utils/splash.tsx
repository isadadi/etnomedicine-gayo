import SplashScreenView from "@/components/splashscreen";
import { useSession } from "@/stores/authStore";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const { isLoading } = useSession();
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800)); // kecilkan delay biar halus
      } finally {
        setShowCustomSplash(false);
      }
    };
    prepare();
  }, []);

  if (showCustomSplash && !isLoading) return <SplashScreenView />;
  return null;
}
