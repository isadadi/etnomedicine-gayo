// components/FavoriteButton.tsx
import { useSession } from "@/stores/authStore";
import { useLoginModalStore } from "@/stores/use-login-modal-store";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
}

export default function FavoriteButton({
  isFavorite,
  onPress,
  size = 28,
}: FavoriteButtonProps) {
  const { showLoginModal } = useLoginModalStore();
  const { session } = useSession();

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.3,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    if (!session) {
      showLoginModal();
      return;
    }
    animate();
    onPress(); // panggil fungsi toggle dari parent
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <MaterialIcons
          name={isFavorite ? "favorite" : "favorite-border"}
          size={size}
          color={isFavorite ? "#ef4444" : "#9ca3af"}
        />
      </TouchableOpacity>
    </Animated.View>
  );
}
