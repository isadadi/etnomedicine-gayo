/* eslint-disable react-hooks/exhaustive-deps */
import { useUserStore } from "@/stores/use-user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
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

// 🧾 Zod schema untuk validasi
const RegisterSchema = z
  .object({
    username: z.string().min(3, "Minimal 3 karakter"),
    name: z.string().min(3, "Nama terlalu pendek"),
    birthDate: z.date({ required_error: "Pilih tanggal lahir" }),
    gender: z.enum(["Laki-laki", "Perempuan"], {
      required_error: "Pilih jenis kelamin",
    }),
    password: z.string().min(6, "Minimal 6 karakter"),
    confirmPassword: z.string().min(6, "Minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi password tidak cocok",
  });

type RegisterForm = z.infer<typeof RegisterSchema>;

export default function RegisterScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { addUser } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      birthDate: new Date(),
      gender: "Laki-laki",
      password: "",
      confirmPassword: "",
    },
  });

  // 🔹 Animasi posisi form
  const offset = useSharedValue(0);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardWillShow", (e) => {
      offset.value = withTiming(-e.endCoordinates.height / 1.5, {
        duration: 300,
      });
    });
    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      offset.value = withTiming(0, { duration: 300 });
    });

    // Android fallback (karena keyboardWillShow hanya iOS)
    const showSubAndroid = Keyboard.addListener("keyboardDidShow", (e) => {
      offset.value = withTiming(-e.endCoordinates.height / 1.5, {
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

  const onSubmit = async (data: RegisterForm) => {
    try {
      const formValue = {
        ...data,
        birthDate: `${data.birthDate.getFullYear()}-${data.birthDate.getMonth() + 1}-${data.birthDate.getDate()}`,
        id: `user-${Date.now().toString()}`,
      };
      addUser(formValue);
      await new Promise((res) => setTimeout(res, 1000));
      Toast.show({
        type: "success",
        text1: "Berhasil Mendaftar Akun",
        text2: "Selamat, kamu berhasil mendaftarkan akun",
      });
      router.replace("/login");
    } catch (err: any) {
      console.log(err?.message);
      Toast.show({
        type: "error",
        text1: "Gagal Mendaftar Akun",
        text2: err?.message ?? "Coba lagi sesaat lagi",
      });
    }
  };

  // 🔹 Eye icon toggle untuk password
  const EyeIcon = (props: any) => (
    <TouchableOpacity
      onPress={() => {
        setShowPassword((prev) => !prev);
      }}
    >
      <Icon {...props} pack="expo" name={showPassword ? "eye-off" : "eye"} />
    </TouchableOpacity>
  );

  const EyeConfirmIcon = (props: any) => (
    <TouchableOpacity onPress={() => setShowConfirmPassword((prev) => !prev)}>
      <Icon
        {...props}
        pack="expo"
        name={showConfirmPassword ? "eye-off" : "eye"}
      />
    </TouchableOpacity>
  );

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
            <Layout level="1">
              <View className="flex-row justify-center mb-6">
                <Icon
                  name="account-plus"
                  pack="expo"
                  style={{ width: 48, height: 48, tintColor: "#30AA98" }}
                />
              </View>
              <Text category="h5" className="font-bold text-center mb-6">
                Daftar Akun Baru
              </Text>

              {/* Username */}
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Username"
                    placeholder="Nama pengguna"
                    value={value}
                    onChangeText={onChange}
                    status={errors.username ? "danger" : "basic"}
                    caption={errors.username?.message}
                    accessoryLeft={(props) => (
                      <Icon {...props} pack="expo" name="account" />
                    )}
                  />
                )}
              />

              {/* Nama lengkap */}
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Nama Lengkap"
                    placeholder="Masukkan nama lengkap"
                    style={{ marginTop: 12 }}
                    value={value}
                    onChangeText={onChange}
                    status={errors.name ? "danger" : "basic"}
                    caption={errors.name?.message}
                    accessoryLeft={(props) => (
                      <Icon {...props} pack="expo" name="account-box" />
                    )}
                  />
                )}
              />

              {/* Tanggal lahir */}
              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange, value } }) => (
                  <>
                    <Input
                      label="Tanggal Lahir"
                      style={{ marginTop: 12 }}
                      onPress={() => setShowDatePicker(true)}
                      accessoryLeft={(props) => (
                        <Icon {...props} pack="expo" name="calendar" />
                      )}
                    >
                      <Text>{value.toLocaleDateString("id-ID")}</Text>
                    </Input>
                    {showDatePicker && (
                      <DateTimePicker
                        value={value}
                        mode="date"
                        display="spinner"
                        onChange={(_, date) => {
                          setShowDatePicker(false);
                          if (date) onChange(date);
                        }}
                      />
                    )}
                  </>
                )}
              />

              {/* Jenis Kelamin */}
              <Controller
                control={control}
                name="gender"
                render={({ field: { onChange, value } }) => (
                  <View style={{ marginTop: 12 }}>
                    <Text category="label" style={{ marginBottom: 6 }}>
                      Jenis Kelamin
                    </Text>
                    <View className="flex-row gap-4 mb-3">
                      {["Laki-laki", "Perempuan"].map((item) => (
                        <TouchableOpacity
                          key={item}
                          onPress={() => onChange(item)}
                          className={`flex-1 p-3 rounded-lg border ${
                            value === item
                              ? "bg-green-100 border-green-500"
                              : "bg-gray-50 border-gray-300"
                          }`}
                        >
                          <Text
                            className={`text-center font-medium ${
                              value === item
                                ? "text-green-700"
                                : "text-neutral-700"
                            }`}
                          >
                            {item}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </View>

                    {errors.gender && (
                      <Text status="danger" category="c1">
                        {errors.gender.message}
                      </Text>
                    )}
                  </View>
                )}
              />

              {/* Password */}
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Password"
                    placeholder="********"
                    accessoryRight={EyeIcon}
                    secureTextEntry={!showPassword}
                    style={{ marginTop: 12 }}
                    value={value}
                    onChangeText={onChange}
                    status={errors.password ? "danger" : "basic"}
                    caption={errors.password?.message}
                  />
                )}
              />

              {/* Konfirmasi Password */}
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value } }) => (
                  <Input
                    label="Konfirmasi Password"
                    placeholder="********"
                    accessoryRight={EyeConfirmIcon}
                    secureTextEntry={!showConfirmPassword}
                    style={{ marginTop: 12 }}
                    value={value}
                    onChangeText={onChange}
                    status={errors.confirmPassword ? "danger" : "basic"}
                    caption={errors.confirmPassword?.message}
                  />
                )}
              />

              {/* Tombol Submit */}
              <Button
                onPress={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                style={{ marginTop: 24 }}
                accessoryLeft={(props) => (
                  <Icon {...props} pack="expo" name="check-circle" />
                )}
              >
                {isSubmitting ? "Mendaftarkan..." : "Daftar"}
              </Button>

              {/* Link ke Login */}
              <Text
                appearance="hint"
                category="c1"
                style={{ marginTop: 16, textAlign: "center" }}
                onPress={() => router.replace("/login")}
              >
                Sudah punya akun?{" "}
                <Text status="primary" category="c1">
                  Masuk di sini
                </Text>
              </Text>
            </Layout>
          </Animated.View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
