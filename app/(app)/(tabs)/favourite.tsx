import FavoriteButton from "@/components/favourite-button";
import { Herb } from "@/interfaces/herbs";
import { useSession } from "@/stores/authStore";
import { useFavoriteStore } from "@/stores/use-favourite-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { Image as ExpoImage } from "expo-image";
import { router } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ReAnimated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const HEADER_HEIGHT = 190;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function FavoriteScreen() {
  const { session } = useSession();
  const { favorites, toggleFavorite, isFavorite } = useFavoriteStore();

  const scrollY = useRef(new Animated.Value(0)).current;

  if (!session) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white p-6">
        <MaterialIcons name="lock-outline" size={64} color="#9ca3af" />
        <Text className="text-xl font-semibold text-neutral-800 mt-4 mb-2">
          Anda belum login
        </Text>
        <Text className="text-gray-500 text-center mb-6">
          Silakan login terlebih dahulu untuk menyimpan herbal favorit Anda.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/login")}
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          <Text className="text-white font-semibold text-lg">
            Masuk Sekarang
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: { item: Herb }) => {
    const isFav = isFavorite(item.id);

    return (
      <ReAnimated.View entering={FadeInDown.duration(400)}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            router.push({
              pathname: "/detail-herbal/[id]",
              params: { id: item.id },
            })
          }
          className="flex-row items-center py-3 border-b border-neutral-200 px-4"
        >
          <ExpoImage
            source={item.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 16,
              backgroundColor: "#f0f0f0",
            }}
            placeholder={require("@/assets/images/default/default-herb.png")}
          />
          <View className="flex-1 ml-4">
            <Text className="text-base font-semibold text-gray-900 mb-1">
              {item.name}
            </Text>
            <Text
              className="text-gray-600 text-sm mb-1"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.description}
            </Text>
            <View className="flex-row flex-wrap gap-1">
              {item.diseases.map((dis) => (
                <View
                  className="bg-gray-50 border border-gray-200 px-1 py-1 rounded-full"
                  key={dis.id}
                >
                  <Text className="text-gray-700 text-xs">{dis.name}</Text>
                </View>
              ))}
            </View>
          </View>
          <FavoriteButton
            isFavorite={isFav}
            onPress={() => toggleFavorite(item)}
            size={28}
          />
        </TouchableOpacity>
      </ReAnimated.View>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView className="flex-1">
        {/* 🔹 Parallax Header Image */}
        <View
          style={[
            {
              position: "absolute",
              width,
              height: HEADER_HEIGHT,
              // overflow: "hidden",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 16,
              elevation: 8,
            },
            // backgroundStyle,
          ]}
        >
          <ExpoImage
            source={require("@/assets/images/background.webp")}
            style={{ width, height: HEADER_HEIGHT }}
            contentFit="cover"
          />
          <View
            style={[
              StyleSheet.absoluteFillObject,
              { backgroundColor: "rgba(0,0,0,0.35)" },
            ]}
          />
        </View>

        {/* 🔹 Header Info User */}
        <View className="pt-16 pb-8">
          <View className="flex-row items-center">
            {session.user.image ? (
              <Image
                source={{ uri: session.user.image }}
                className="w-16 h-16 rounded-full border-2 border-white"
              />
            ) : (
              <View className="w-16 h-16 bg-green-200 rounded-full items-center justify-center border-2 border-white">
                <Text className="text-2xl font-bold text-green-900">
                  {session.user.name?.[0]?.toUpperCase() || "U"}
                </Text>
              </View>
            )}
            <View className="ml-4">
              <Text className="text-white font-semibold text-lg">
                {session.user.name || "Pengguna"}
              </Text>
              <Text className="text-green-100 text-sm">
                @{session.user.username || "user123"}
              </Text>
              <Text className="text-green-50 mt-1">
                {favorites.length} herbal favorit
              </Text>
            </View>
          </View>
        </View>

        {/* 🔹 Daftar Favorit */}
        {favorites.length > 0 ? (
          <AnimatedFlatList
            data={favorites}
            renderItem={(item: any) => renderItem(item)}
            keyExtractor={(item: any) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
            scrollEventThrottle={16}
          />
        ) : (
          <View className="flex-1 items-center justify-center px-6">
            <MaterialIcons name="favorite-border" size={72} color="#9ca3af" />
            <Text className="text-xl font-semibold text-neutral-700 mt-4">
              Belum ada herbal favorit
            </Text>
            <Text className="text-gray-500 text-center mt-2 mb-6">
              Tambahkan herbal yang Anda sukai untuk menyimpannya di sini.
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/search-herbal")}
              className="bg-green-600 px-5 py-3 rounded-xl"
            >
              <Text className="text-white font-semibold text-lg">
                Jelajahi Herbal
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
