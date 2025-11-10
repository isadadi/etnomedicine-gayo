/* eslint-disable react-hooks/exhaustive-deps */
// /screens/SplashScreen.tsx
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, Text } from "react-native";

export default function SplashScreenView() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const shimmerAnim = useRef(new Animated.Value(0)).current;

  // Fade & scale animasi
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Shimmer teks bawah
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1800,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <LinearGradient
      colors={["#ffffff", "#e8fbe8"]}
      className="flex-1 items-center justify-center"
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/splash-icon.png")}
          className="w-44 h-44 mb-5"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-green-800">
          Etnomedicine Gayo
        </Text>
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          bottom: 100,
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          alignItems: "center",
        }}
      >
        <Animated.Text
          className="mt-2 mb-1 text-sm font-medium text-green-700"
          style={{
            opacity: shimmerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1],
            }),
          }}
        >
          from
        </Animated.Text>
        <Image
          source={require("@/assets/images/copyright-icon.png")}
          className="h-16"
          resizeMode="contain"
        />
      </Animated.View>
    </LinearGradient>
  );
}
