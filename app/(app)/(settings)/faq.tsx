import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 🪄 Enable Layout Animation di Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQ_DATA = [
  {
    id: "1",
    question: "Apa itu Etnomedicine Gayo?",
    answer:
      "Etnomedicine Gayo adalah aplikasi yang membantu Anda menemukan obat herbal alami berdasarkan penyakit, usia, dan jenis kelamin. Kami menghubungkan Anda dengan pengetahuan tanaman tradisional yang telah teruji secara turun-temurun.",
  },
  {
    id: "2",
    question:
      "Apakah semua data tanaman di Etnomedicine Gayo sudah diverifikasi?",
    answer:
      "Ya, setiap data tanaman diambil dari sumber ilmiah dan literatur terpercaya. Namun, Etnomedicine Gayo bukan pengganti konsultasi medis profesional.",
  },
  {
    id: "3",
    question: "Bagaimana cara mencari obat herbal?",
    answer:
      "Anda dapat menggunakan fitur pencarian di halaman utama. Cukup pilih jenis penyakit, usia, dan jenis kelamin Anda, lalu aplikasi akan menampilkan rekomendasi herbal yang sesuai.",
  },
  {
    id: "4",
    question: "Apakah Etnomedicine Gayo bisa digunakan tanpa login?",
    answer:
      "Beberapa fitur seperti pencarian bisa digunakan tanpa login, namun untuk menyimpan favorit atau membuat akun pribadi, Anda perlu masuk terlebih dahulu.",
  },
  {
    id: "5",
    question: "Apakah data saya aman di Etnomedicine Gayo?",
    answer:
      "Kami tidak menyimpan data sensitif. Semua data pribadi disimpan secara lokal di perangkat Anda dan tidak dibagikan kepada pihak ketiga.",
  },
];

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
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
        <Text className="text-xl font-semibold text-gray-900">FAQ</Text>
      </View>

      {/* Body */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {FAQ_DATA.map((item) => {
          const isOpen = expandedId === item.id;
          return (
            <View
              key={item.id}
              className="mb-3 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100"
            >
              <TouchableOpacity
                onPress={() => toggleExpand(item.id)}
                activeOpacity={0.8}
                className="flex-row justify-between items-center px-4 py-4"
              >
                <Text className="flex-1 text-base font-medium text-neutral-800 pr-3">
                  {item.question}
                </Text>
                <MaterialIcons
                  name={isOpen ? "expand-less" : "expand-more"}
                  size={24}
                  color="#16a34a"
                />
              </TouchableOpacity>

              {isOpen && (
                <View className="px-4 pb-4">
                  <Text className="text-sm text-neutral-600 leading-relaxed">
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
