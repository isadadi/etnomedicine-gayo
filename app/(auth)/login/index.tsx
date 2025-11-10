/* eslint-disable react-hooks/exhaustive-deps */
import { useSession } from "@/stores/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text as RText,
  ScrollView,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { z } from "zod";

const LoginSchema = z.object({
  username: z.string().min(1, "Tidak boleh kosong"),
  password: z.string().min(6, "Minimal 6 karakter"),
});

type LoginForm = z.infer<typeof LoginSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useSession();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });

  // 🔹 Animasi posisi form
  const offset = useSharedValue(0);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardWillShow", (e) => {
      offset.value = withTiming(-e.endCoordinates.height, {
        duration: 300,
      });
    });
    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      offset.value = withTiming(0, { duration: 300 });
    });

    // Android fallback (karena keyboardWillShow hanya iOS)
    const showSubAndroid = Keyboard.addListener("keyboardDidShow", (e) => {
      offset.value = withTiming(-e.endCoordinates.height / 3, {
        duration: 300,
      });
    });
    const hideSubAndroid = Keyboard.addListener("keyboardDidHide", () => {
      offset.value = withTiming(0, { duration: 300 });
    });

    return () => {
      showSub.remove();
      hideSub.remove();
      showSubAndroid.remove();
      hideSubAndroid.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  const onSubmit = async (data: LoginForm) => {
    try {
      await signIn(data.username, data.password);
      await new Promise((res) => setTimeout(res, 1000));
      Toast.show({
        type: "success",
        text1: "Berhasil",
        text2: "Selamat datang kembali",
      });
    } catch (err: any) {
      Toast.show({
        type: "success",
        text1: "Gagal",
        text2: err?.message ?? "Coba lagi beberapa saat lagi",
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
          className="flex-1 justify-center px-8"
        >
          <Animated.View style={[animatedStyle]}>
            <View className="items-center mb-10">
              <Image
                source={require("@/assets/images/splash-icon.png")}
                style={{ width: 100, height: 100, marginBottom: 8 }}
                resizeMode="contain"
              />
              <RText className="text-2xl font-bold text-green-800">
                Etnomedicine Gayo
              </RText>
              <Text appearance="hint" category="s1">
                Masuk untuk melanjutkan
              </Text>
            </View>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Username"
                  placeholder="Masukkan username"
                  value={value}
                  onChangeText={onChange}
                  status={errors.username ? "danger" : "basic"}
                  caption={errors.username?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Password"
                  placeholder="********"
                  secureTextEntry
                  style={{ marginTop: 12 }}
                  value={value}
                  onChangeText={onChange}
                  status={errors.password ? "danger" : "basic"}
                  caption={errors.password?.message}
                />
              )}
            />

            <Button
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="mt-5"
            >
              {isSubmitting ? "Memproses..." : "Masuk"}
            </Button>

            <Text
              appearance="hint"
              category="c1"
              style={{ marginTop: 16, textAlign: "center" }}
              onPress={() => router.push("/register")}
            >
              Belum punya akun?{" "}
              <Text status="primary" category="c1">
                Registrasi di sini
              </Text>
            </Text>
          </Animated.View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
