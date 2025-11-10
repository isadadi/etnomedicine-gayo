import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function AppLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="(modal)/search-herbal"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom",
            title: "Cari Obat Herbal",
          }}
        />
        <Stack.Screen
          name="detail-herbal/[id]"
          options={{
            title: "Detail Herbal",
          }}
        />
        <Stack.Screen
          name="detail-herbal/search-result"
          options={{
            title: "Hasil Pencarian",
          }}
        />
      </Stack>
    </>
  );
}
