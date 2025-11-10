import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutAppScreen() {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url).catch(() =>
      alert("Tidak dapat membuka tautan. Pastikan kamu terhubung ke internet.")
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-1 rounded-full"
        >
          <MaterialIcons name="chevron-left" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Tentang Aplikasi
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo & App Info */}
        <View className="items-center mb-8">
          <Image
            source={require("@/assets/images/splash-icon.png")}
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
          <Text className="text-2xl font-bold text-green-700 mt-4">
            Etnomedicine Gayo
          </Text>
          <Text className="text-neutral-500 text-sm mt-1">v1.0.0</Text>
        </View>

        {/* Deskripsi */}
        <Text className="text-neutral-700 text-base leading-relaxed mb-6">
          <Text className="font-semibold text-green-700">
            Etnomedicine Gayo
          </Text>{" "}
          adalah aplikasi yang membantu kamu menemukan dan mempelajari berbagai
          tanaman herbal beserta manfaatnya untuk kesehatan. Kami ingin
          mempermudah masyarakat dalam mengenal pengobatan alami berbasis
          tanaman, dengan informasi yang akurat dan mudah dipahami.
        </Text>

        {/* Fitur Utama */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-2">
            🌱 Fitur Utama
          </Text>
          <View className="gap-2">
            <Text className="text-neutral-700 text-sm">
              • Pencarian herbal berdasarkan penyakit
            </Text>
            <Text className="text-neutral-700 text-sm">
              • Informasi lengkap tentang tanaman herbal
            </Text>
            <Text className="text-neutral-700 text-sm">
              • Takaran berdasarkan jenis kelamin & usia
            </Text>
            <Text className="text-neutral-700 text-sm">
              • Simpan herbal favorit kamu
            </Text>
            <Text className="text-neutral-700 text-sm">
              • Desain modern, ringan, dan mudah digunakan
            </Text>
          </View>
        </View>

        {/* Tim Pengembang */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-2">
            👩‍💻 Tim Pengembang
          </Text>
          <Text className="text-neutral-700 text-sm leading-relaxed">
            Etnomedicine Gayo dikembangkan oleh tim yang berfokus pada
            pengembangan teknologi kesehatan berbasis alam, dengan tujuan
            memberikan manfaat nyata bagi masyarakat luas.
          </Text>
        </View>

        {/* Sosial Media */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-2">
            🌍 Sosial Media
          </Text>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity
              className="flex-row items-center bg-white px-4 py-3 rounded-xl border border-gray-200 flex-1"
              onPress={() =>
                handleOpenLink("https://instagram.com/Etnomedicine Gayo.id")
              }
            >
              <FontAwesome name="instagram" size={20} color="#E1306C" />
              <Text className="ml-2 text-sm text-neutral-700">
                @Etnomedicine Gayo.id
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center bg-white px-4 py-3 rounded-xl border border-gray-200 flex-1"
              onPress={() =>
                handleOpenLink("https://x.com/Etnomedicine Gayo_id")
              }
            >
              <FontAwesome name="twitter" size={20} color="#1DA1F2" />
              <Text className="ml-2 text-sm text-neutral-700">
                @Etnomedicine Gayo_id
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hubungi Kami */}
        <View className="mb-8">
          <Text className="text-lg font-semibold text-neutral-800 mb-2">
            📬 Hubungi Kami
          </Text>
          <Text className="text-neutral-700 text-sm leading-relaxed mb-3">
            Punya pertanyaan, saran, atau ingin bekerja sama? Hubungi kami
            melalui:
          </Text>

          <TouchableOpacity
            onPress={() => handleOpenLink("mailto:support@etnomedicinegayo.id")}
            className="flex-row items-center bg-white px-4 py-3 rounded-xl border border-gray-200 mb-2"
          >
            <MaterialIcons name="email" size={20} color="#16a34a" />
            <Text className="ml-2 text-sm text-neutral-700">
              support@Etnomedicine Gayo.id
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleOpenLink(
                "https://wa.me/6281234567890?text=Halo Etnomedicine Gayo!"
              )
            }
            className="flex-row items-center bg-white px-4 py-3 rounded-xl border border-gray-200"
          >
            <FontAwesome name="whatsapp" size={20} color="#25D366" />
            <Text className="ml-2 text-sm text-neutral-700">
              +62 812-3456-7890
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text className="text-center text-neutral-400 text-xs mt-10 mb-6">
          © 2025 Etnomedicine Gayo. All rights reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
