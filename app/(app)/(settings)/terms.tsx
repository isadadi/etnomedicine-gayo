import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TermsScreen() {
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
          Syarat & Ketentuan
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
          1. Penerimaan Syarat
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Dengan menggunakan aplikasi Etnomedicine Gayo, Anda dianggap telah
          membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan yang
          berlaku. Apabila Anda tidak menyetujui sebagian atau seluruh
          ketentuan, mohon untuk tidak menggunakan layanan ini.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          2. Tujuan Aplikasi
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Etnomedicine Gayo bertujuan memberikan informasi seputar tanaman
          herbal dan penggunaannya dalam pengobatan tradisional. Informasi di
          aplikasi ini bersifat umum dan tidak dimaksudkan sebagai pengganti
          saran medis profesional.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          3. Tanggung Jawab Pengguna
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Pengguna bertanggung jawab penuh atas keputusan yang diambil
          berdasarkan informasi yang tersedia di aplikasi. Etnomedicine Gayo
          tidak bertanggung jawab atas segala kerugian atau efek samping yang
          timbul dari penggunaan informasi di aplikasi ini.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          4. Kepemilikan Konten
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Seluruh konten di aplikasi ini, termasuk teks, gambar, dan ilustrasi,
          dilindungi oleh hak cipta. Dilarang menyalin, memodifikasi, atau
          mendistribusikan konten tanpa izin tertulis dari pihak pengembang.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          5. Perubahan Ketentuan
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-4">
          Kami dapat memperbarui Syarat & Ketentuan ini sewaktu-waktu tanpa
          pemberitahuan sebelumnya. Pengguna disarankan untuk secara berkala
          meninjau halaman ini agar tetap mengetahui versi terbaru.
        </Text>

        <Text className="text-neutral-800 text-base font-semibold mb-2">
          6. Kontak Kami
        </Text>
        <Text className="text-neutral-600 text-sm leading-relaxed mb-10">
          Jika Anda memiliki pertanyaan atau masukan, silakan hubungi kami
          melalui halaman “Hubungi Kami” di aplikasi Etnomedicine Gayo.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
