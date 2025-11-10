import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PrivacyPolicyScreen() {
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
          Kebijakan Privasi
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-neutral-800 text-base font-semibold mb-2">
          1. Pendahuluan
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Kebijakan Privasi ini menjelaskan bagaimana Etnomedicine Gayo
          mengumpulkan, menggunakan, dan melindungi informasi pribadi pengguna.
          Kami berkomitmen untuk menjaga privasi Anda dan melindungi data yang
          Anda berikan kepada kami.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          2. Informasi yang Dikumpulkan
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Kami dapat mengumpulkan informasi seperti nama, alamat email, usia,
          dan preferensi penggunaan aplikasi. Data ini digunakan untuk
          meningkatkan layanan dan pengalaman pengguna.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          3. Penggunaan Informasi
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Informasi yang dikumpulkan digunakan untuk tujuan berikut:
          {"\n"}• Menyediakan layanan yang sesuai dengan kebutuhan Anda
          {"\n"}• Mengirimkan pembaruan atau informasi terkait aplikasi
          {"\n"}• Meningkatkan kualitas konten dan fitur aplikasi
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          4. Perlindungan Data
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Kami menggunakan langkah-langkah keamanan yang sesuai untuk melindungi
          data pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak
          sah. Namun, tidak ada sistem yang sepenuhnya aman, dan kami tidak
          dapat menjamin keamanan absolut.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          5. Berbagi Informasi
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Etnomedicine Gayo tidak akan menjual atau menyewakan data pribadi Anda
          kepada pihak ketiga. Kami hanya akan membagikan informasi kepada pihak
          lain bila diwajibkan oleh hukum atau untuk melindungi hak kami.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          6. Hak Pengguna
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Anda berhak untuk mengakses, memperbarui, atau menghapus informasi
          pribadi Anda kapan saja. Anda juga dapat menolak penggunaan data untuk
          tujuan pemasaran dengan menghubungi kami.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          7. Perubahan Kebijakan
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
          Perubahan akan diumumkan melalui pembaruan di aplikasi atau situs web
          kami.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          8. Kontak Kami
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-10">
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan
          hubungi kami melalui halaman “Hubungi Kami” di aplikasi Etnomedicine
          Gayo.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
