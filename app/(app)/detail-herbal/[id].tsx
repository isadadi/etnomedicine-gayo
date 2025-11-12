import AnimatedAppBar from "@/components/animated-appbar";
import FavoriteButton from "@/components/favourite-button";
import ParallaxHeader from "@/components/parallax-header";
import PlantItem from "@/components/screen/detail-herbal/plant-item";
import { globalStyles } from "@/constants/styles";
import { getHerbById } from "@/services/get-herbs";
import { useSession } from "@/stores/authStore";
import { useFavoriteStore } from "@/stores/use-favourite-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MotiView } from "moti";
import React, { useRef } from "react";
import {
  Animated,
  Share,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR from "swr";

const fallbackImage = require("@/assets/images/default/default-herb.png");

export default function DetailHerbalScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;
  const { toggleFavorite, isFavorite } = useFavoriteStore();
  const { session } = useSession();

  const isFavHerb = isFavorite(id) && !!session;

  const { data: herb, isLoading: loadingHerb } = useSWR(
    id ? `getHerb-${id}` : null,
    () => getHerbById(id)
  );

  const buttonOpacity = {
    shadowOpacity: scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0.25, 0],
      extrapolate: "clamp",
    }),
    elevation: scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [4, 0],
      extrapolate: "clamp",
    }),
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Lihat informasi tentang ${id ?? "herbal"} di aplikasi Etnomedicine! 🌿`,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar translucent backgroundColor="transparent" />

      {/* HEADER FIXED */}
      <AnimatedAppBar title={herb?.data?.name} scrollY={scrollY} />

      {/* BUTTONS */}
      <SafeAreaView style={globalStyles.topButtonsContainer}>
        <Animated.View style={[globalStyles.blurCircle, buttonOpacity]}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="flex items-center justify-center"
          >
            <MaterialIcons name="chevron-left" size={24} color="#737373" />
          </TouchableOpacity>
        </Animated.View>

        <View className="flex-row gap-2">
          <Animated.View style={[globalStyles.blurCircle, buttonOpacity]}>
            <TouchableOpacity
              onPress={handleShare}
              activeOpacity={0.7}
              className="flex items-center justify-center"
            >
              <MaterialIcons name="share" size={24} color="#737373" />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[globalStyles.blurCircle, buttonOpacity]}>
            <FavoriteButton
              size={24}
              isFavorite={isFavHerb}
              onPress={() => {
                if (!herb?.data) return;
                toggleFavorite(herb!.data);
              }}
            />
          </Animated.View>
        </View>
      </SafeAreaView>

      {/* SCROLL CONTENT */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <ParallaxHeader
          scrollY={scrollY}
          fallbackImageUrl={fallbackImage}
          imageUrl={herb?.data?.image}
        />

        <View>
          {/* 🔹 Skeleton untuk judul & deskripsi */}
          <View className="mb-4" style={[globalStyles.bannerTextContainer]}>
            {loadingHerb ? (
              <>
                <MotiView
                  from={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ loop: true, duration: 800 }}
                  className="h-5 bg-gray-300 rounded w-3/5 mb-2"
                />
                <MotiView
                  from={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  transition={{ loop: true, duration: 800 }}
                  className="h-3 bg-gray-200 rounded w-4/5"
                />
              </>
            ) : (
              <>
                <Text className="text-2xl font-bold mb-1 capitalize">
                  {herb?.data?.name}
                </Text>
                <Text className="text-neutral-500">
                  {herb?.data?.description}
                </Text>
              </>
            )}
          </View>

          {/* 🔹 Section Tanaman */}
          <View style={[globalStyles.containerCard]}>
            <Text className="text-lg font-semibold mb-3">
              Tanaman yang digunakan
            </Text>
            {loadingHerb
              ? [...Array(3)].map((_, i) => (
                  <MotiView
                    key={i}
                    from={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ loop: true, duration: 800 }}
                    className="h-16 bg-gray-200 rounded-xl mb-3"
                  />
                ))
              : herb?.data?.plants.map((plant) => (
                  <View
                    key={plant.id}
                    className="flex-row items-center bg-green-50 p-3 rounded-xl mb-2"
                  >
                    <PlantItem key={plant.id} plant={plant} />
                  </View>
                ))}
          </View>

          {/* 🔹 Section Penyakit */}
          <View style={[globalStyles.containerCard]}>
            <Text className="text-lg font-semibold mb-2">
              Penyakit yang bisa disembuhkan
            </Text>
            {loadingHerb
              ? [...Array(3)].map((_, i) => (
                  <MotiView
                    key={i}
                    from={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ loop: true, duration: 800 }}
                    className="h-4 bg-gray-200 rounded mb-2"
                  />
                ))
              : herb?.data?.diseases.map((item, i) => (
                  <Text key={i} className="text-neutral-700">
                    • {item.name}
                  </Text>
                ))}
          </View>

          {/* 🔹 Takaran Berdasarkan Jenis Kelamin */}
          <View style={[globalStyles.containerCard]}>
            <Text className="text-lg font-semibold mb-2">
              Takaran Berdasarkan Jenis Kelamin
            </Text>

            {["pria", "wanita"].map((gender) => {
              const icon = gender === "pria" ? "man" : "woman";
              const color = gender === "pria" ? "#2563eb" : "#db2777";
              const dosage = herb?.data?.dosage?.filter(
                (d) => d.gender.toLowerCase() === gender
              );

              return (
                <View
                  key={gender}
                  className="bg-green-50 rounded-2xl p-4 mb-3 border border-green-100"
                >
                  <View className="flex-row items-center mb-2">
                    <MaterialIcons name={icon} size={22} color={color} />
                    <Text
                      className="font-semibold text-green-800 ml-2 text-base capitalize"
                      style={{ color }}
                    >
                      {gender}
                    </Text>
                  </View>

                  <View className="border-t border-green-200 mb-3" />

                  {dosage?.map((dos, index) => (
                    <View
                      key={index}
                      className="bg-white/70 rounded-xl p-3 mb-2"
                    >
                      <Text className="text-neutral-700">
                        Usia {dos.ageRange[0]} -{" "}
                        {dos.ageRange[1] === null ? "ke atas" : dos.ageRange[1]}
                      </Text>
                      <Text className="text-neutral-700">
                        {dos.amount} - {dos.frequency}
                      </Text>
                    </View>
                  ))}
                </View>
              );
            })}
          </View>

          {/* 🔹 Section Cara Pembuatan */}
          <View style={[globalStyles.containerCard]}>
            <Text className="text-lg font-semibold mb-2">Cara Pembuatan</Text>
            {loadingHerb
              ? [...Array(5)].map((_, i) => (
                  <MotiView
                    key={i}
                    from={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    transition={{ loop: true, duration: 800 }}
                    className="h-4 bg-gray-200 rounded mb-2"
                  />
                ))
              : herb?.data?.method.map((step, i) => (
                  <View key={i} className="flex-row mb-2">
                    <Text className="font-bold text-green-600 mr-2">
                      {i + 1}.
                    </Text>
                    <Text className="text-neutral-700 flex-1">{step}</Text>
                  </View>
                ))}
          </View>

          <View className="h-12" />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
