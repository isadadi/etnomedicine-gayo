// app/theme/icon-pack.tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconProps } from "@ui-kitten/components";
import React from "react";

// 🧩 Helper untuk buat mapping ikon
const createIconsMap = () => {
  return new Proxy(
    {},
    {
      get: (_, name: string) => ({
        toReactElement: (props: IconProps) => (
          <MaterialCommunityIcons
            name={name as any}
            size={props?.style?.height ?? 24}
            color={props?.style?.tintColor ?? "#000"}
          />
        ),
      }),
    }
  );
};

// ⚡ Daftarkan icon pack-nya
export const ExpoIconsPack = {
  name: "expo",
  icons: createIconsMap(),
};
