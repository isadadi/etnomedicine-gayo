import { BANNER_HEIGHT } from "@/constants/var";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Animated, Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  height?: number;
  scrollY: Animated.Value;
  imageUrl?: string;
  fallbackImageUrl?: string;
};

export default function ParallaxHeader({
  height,
  scrollY,
  imageUrl,
  fallbackImageUrl,
}: Props) {
  const HEIGHT = height ?? BANNER_HEIGHT;
  const [error, setError] = useState(false);

  const imageTranslateY = scrollY.interpolate({
    inputRange: [-HEIGHT, 0, HEIGHT],
    outputRange: [-HEIGHT / 2, 0, HEIGHT * 0.75],
  });

  // 🔹 fallback image default (lokal)
  const fallbackImage =
    fallbackImageUrl ?? require("@/assets/images/partial-react-logo.png");

  console.log("image", imageUrl);
  return (
    <View style={{ height: HEIGHT, backgroundColor: "#e5e7eb" }}>
      <Animated.View style={{ transform: [{ translateY: imageTranslateY }] }}>
        <Image
          source={error || !imageUrl ? fallbackImage : { uri: imageUrl }}
          onError={() => setError(true)}
          style={{ width, height: HEIGHT }}
          contentFit="cover"
          transition={400}
          placeholder={fallbackImage}
        />
      </Animated.View>
    </View>
  );
}
