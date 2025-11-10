import { useSession } from "@/stores/authStore";
import { useLoginModalStore } from "@/stores/use-login-modal-store";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const { session, signOut } = useSession();
  const { showLoginModal } = useLoginModalStore();
  const [loading, setLoading] = useState(false);
  const user = session?.user ?? null;

  const handleSignOut = async () => {
    Alert.alert("Konfirmasi", "Yakin ingin keluar akun?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Keluar",
        style: "destructive",
        onPress: async () => {
          setLoading(true);
          await new Promise((res) => setTimeout(res, 1000));
          signOut();
          setLoading(false);
          router.replace("/(app)/(tabs)");
        },
      },
    ]);
  };

  const handleRequireLogin = (callback: () => void) => {
    if (!user) {
      showLoginModal("Silakan login untuk mengakses fitur ini");
      return;
    }
    callback();
  };

  const menuItems = [
    {
      label: "FAQ",
      icon: "help-outline",
      onPress: () => router.push("/faq"),
    },
    {
      label: "Syarat & Ketentuan",
      icon: "description",
      onPress: () => router.push("/terms"),
    },
    {
      label: "Kebijakan Privasi",
      icon: "lock-outline",
      onPress: () => router.push("/privacy"),
    },
  ];

  const extraMenu = [
    {
      label: "Bantuan",
      icon: "support-agent",
      onPress: () =>
        Alert.alert(
          "Bantuan",
          "Hubungi kami di \nsupport@etnomedicinegayo.com"
        ),
    },
    {
      label: "Tentang Aplikasi",
      icon: "info-outline",
      onPress: () => router.push("/about-app"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-1 rounded-full"
        >
          <MaterialIcons name="chevron-left" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Profil</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View className="bg-white p-5 shadow-sm mb-3">
          {user ? (
            <View className="flex-row justify-between">
              <View className="flex-row ">
                <Image
                  source={
                    user.image
                      ? { uri: user.image }
                      : require("@/assets/images/default/default-avatar.png")
                  }
                  className="w-16 h-16 rounded-full mr-4"
                />
                <View>
                  <Text className="text-lg font-semibold text-neutral-900">
                    {user.name}
                  </Text>
                  <Text className="text-neutral-500">@{user.username}</Text>
                  <Text className="text-sm text-neutral-500 mt-1">
                    {user.gender} •{" "}
                    {new Date(user.birthDate).toLocaleDateString("id-ID")}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => router.push("/edit-profile")}
                className="p-2 bg-green-100 h-10 w-10"
              >
                <MaterialIcons name="edit" size={20} color="#16a34a" />
              </TouchableOpacity>
            </View>
          ) : (
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-lg font-semibold text-neutral-800">
                  Assalamualaikum
                </Text>
                <Text className="text-neutral-500">
                  Masuk untuk mengelola akun Anda
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/(auth)/login")}
                className="bg-green-600 px-4 py-2 rounded-xl"
              >
                <Text className="text-white font-semibold">Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Menu Utama */}
        <View className="bg-white mx-4 rounded-2xl overflow-hidden shadow-sm mb-3">
          {menuItems.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleRequireLogin(item.onPress)}
              className="flex-row items-center px-5 py-4 border-b border-gray-100"
            >
              <MaterialIcons
                name={item.icon as any}
                size={22}
                color="#16a34a"
                style={{ marginRight: 12 }}
              />
              <Text className="flex-1 text-neutral-800 text-base">
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Menu Tambahan */}
        <View className="bg-white mx-4 rounded-2xl overflow-hidden shadow-sm mb-3">
          {extraMenu.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={item.onPress}
              className="flex-row items-center px-5 py-4 border-b border-gray-100"
            >
              <MaterialIcons
                name={item.icon as any}
                size={22}
                color="#16a34a"
                style={{ marginRight: 12 }}
              />
              <Text className="flex-1 text-neutral-800 text-base">
                {item.label}
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Tombol Logout */}
        {user && (
          <View className="px-4 mt-4">
            <TouchableOpacity
              onPress={handleSignOut}
              className="flex-row items-center justify-center bg-red-50 border border-red-200 py-3 rounded-xl"
            >
              <MaterialIcons
                name="logout"
                size={20}
                color="#dc2626"
                style={{ marginRight: 8 }}
                disabled={loading}
              />
              <Text className="text-red-600 font-medium text-base">
                {loading ? "Memproses..." : "Keluar Akun"}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Footer */}
        <View className="mt-8 items-center">
          <Text className="text-xs text-gray-400">HerbalCare App v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
