import { useLoginModalStore } from "@/stores/use-login-modal-store";
import { router } from "expo-router";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

export default function LoginModalGlobal() {
  const { visible, message, hideLoginModal } = useLoginModalStore();

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={hideLoginModal}
    >
      <View className="flex-1 bg-black/40 items-center justify-center px-6">
        <View className="bg-white rounded-2xl p-6 w-full max-w-sm">
          <Text className="text-lg font-semibold text-neutral-900 mb-2">
            Login Diperlukan
          </Text>
          <Text className="text-neutral-600 mb-6">
            {message ?? "Untuk melanjutkan, silakan masuk ke akun Anda."}
          </Text>

          <View className="flex-row justify-end gap-3">
            <TouchableOpacity
              onPress={hideLoginModal}
              className="px-4 py-2 rounded-lg bg-gray-100"
            >
              <Text className="text-neutral-700 font-medium">Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                hideLoginModal();
                router.push("/(auth)/login"); // arahkan ke halaman login
              }}
              className="px-4 py-2 rounded-lg bg-green-600"
            >
              <Text className="text-white font-medium">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
