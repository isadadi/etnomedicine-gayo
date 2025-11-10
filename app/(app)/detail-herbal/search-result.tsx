import { Herb } from "@/interfaces/herbs";
import { getHerbsBySearchParams } from "@/services/get-herbs";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { MotiView } from "moti";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR from "swr";

// 🌿 Skeleton shimmer card (flat style)
function HerbalCardSkeleton() {
  return (
    <View className="flex-row bg-white rounded-2xl mb-5">
      <MotiView
        from={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ loop: true, type: "timing", duration: 800 }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 16,
          backgroundColor: "#e5e5e5",
        }}
      />
      <View className="flex-1 justify-center ml-3">
        <MotiView
          from={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ loop: true, type: "timing", duration: 800 }}
          className="h-4 bg-gray-300 rounded w-2/3 mb-2"
        />
        <MotiView
          from={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ loop: true, type: "timing", duration: 800 }}
          className="h-3 bg-gray-300 rounded w-4/5 mb-1"
        />
        <MotiView
          from={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ loop: true, type: "timing", duration: 800 }}
          className="h-3 bg-gray-300 rounded w-3/5"
        />
      </View>
    </View>
  );
}

export default function HasilPencarian() {
  const params = useLocalSearchParams<{
    diseaseType: string;
    disease: string;
    age: string;
    gender: string;
    title?: string;
  }>();

  const { data: herbs, isLoading: loadingHerbs } = useSWR(
    `searchHerbas-${JSON.stringify(params)}`,
    () => getHerbsBySearchParams({ ...params, age: Number(params.age) })
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-1 rounded-full"
        >
          <MaterialIcons name="chevron-left" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          {params.title ?? "Hasil Pencarian"}
        </Text>
      </View>

      {/* Info pencarian */}
      <View className="px-4 py-3 bg-white border-b border-gray-100">
        <View className="flex-row flex-wrap gap-2">
          {params.disease ? (
            <View className="bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
              <Text className="text-green-700 text-sm font-medium">
                {params.disease}
              </Text>
            </View>
          ) : null}
          {params.diseaseType ? (
            <View className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
              <Text className="text-gray-700 text-sm">
                {params.diseaseType}
              </Text>
            </View>
          ) : null}
          {params.age ? (
            <View className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
              <Text className="text-gray-700 text-sm">{params.age} th</Text>
            </View>
          ) : null}
          {params.gender ? (
            <View className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
              <Text className="text-gray-700 text-sm">{params.gender}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* Daftar hasil */}
      <FlatList<Herb>
        data={loadingHerbs ? Array(5).fill(null) : herbs?.data}
        keyExtractor={(item, index) => (item ? item.id : index.toString())}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) =>
          loadingHerbs ? (
            <HerbalCardSkeleton />
          ) : (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                router.push({
                  pathname: "/detail-herbal/[id]",
                  params: { id: item.id },
                })
              }
              className="flex-row items-center mb-5"
            >
              {/* Gambar herbal */}
              <Image
                source={item.image}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 16,
                  backgroundColor: "#f0f0f0",
                }}
                placeholder={require("@/assets/images/default/default-plant.png")}
              />

              {/* Info herbal */}
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
                <Text className="text-green-600 text-xs font-medium">
                  Lihat detail
                </Text>
              </View>
            </TouchableOpacity>
          )
        }
        ListEmptyComponent={
          !loadingHerbs ? (
            <Text className="text-center text-gray-500 mt-8">
              Tidak ditemukan hasil untuk pencarian ini.
            </Text>
          ) : null
        }
      />
    </SafeAreaView>
  );
}
