import { useSession } from "@/stores/authStore";
import { useUserStore } from "@/stores/use-user-store";
import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Animated,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Nama terlalu pendek"),
  username: z.string().min(3, "Minimal 3 karakter"),
  gender: z.enum(["Laki-laki", "Perempuan"]),
  birthDate: z.date(),
});

type FormType = z.infer<typeof schema>;

export default function EditProfileScreen() {
  const { session, updateSession } = useSession();
  const { updateUser } = useUserStore();
  const user = session?.user;
  const [showDatePicker, setShowDatePicker] = useState(false);
  const keyboardOffset = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      gender: (user?.gender as "Laki-laki" | "Perempuan") || "Laki-laki",
      birthDate: user?.birthDate ? new Date(user.birthDate) : new Date(),
    },
  });

  const onSubmit = (data: FormType) => {
    const formValues = {
      ...user!,
      ...data!,
      birthDate: `${data.birthDate.getFullYear()}-${data.birthDate.getMonth() + 1}-${data.birthDate.getDate()}`,
    };

    updateUser(formValues, user!.id);
    updateSession(formValues);
    router.back();
  };

  // 🪄 Animasi naik turun tombol bawah saat keyboard muncul
  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        Animated.timing(keyboardOffset, {
          toValue: e.endCoordinates.height - (Platform.OS === "ios" ? 20 : 0),
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    const hideSub = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        Animated.timing(keyboardOffset, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="mr-3 p-1 rounded-full"
          >
            <MaterialIcons name="chevron-left" size={24} color="#222" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Edit Profil
          </Text>
        </View>

        <View>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <MaterialIcons name="save" size={24} color="#737373" />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* Nama Lengkap */}
        <Text className="text-neutral-800 font-medium mb-2">Nama Lengkap</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white mb-1"
              placeholder="Masukkan nama lengkap"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.name && (
          <Text className="text-red-500 text-sm mb-3">
            {errors.name.message}
          </Text>
        )}

        {/* Username */}
        <Text className="text-neutral-800 font-medium mb-2">Username</Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <TextInput
              className="border border-gray-300 rounded-lg px-3 py-2 bg-white mb-1"
              placeholder="Masukkan username"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.username && (
          <Text className="text-red-500 text-sm mb-3">
            {errors.username.message}
          </Text>
        )}

        {/* Jenis Kelamin */}
        <Text className="text-neutral-800 font-medium mb-2">Jenis Kelamin</Text>
        <Controller
          control={control}
          name="gender"
          render={({ field: { value, onChange } }) => (
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
                      value === item ? "text-green-700" : "text-neutral-700"
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />

        {/* Tanggal Lahir */}
        <Text className="text-neutral-800 font-medium mb-2">Tanggal Lahir</Text>
        <Controller
          control={control}
          name="birthDate"
          render={({ field: { value, onChange } }) => (
            <>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className="border border-gray-300 rounded-lg px-3 py-2 bg-white mb-3"
              >
                <Text>{value.toLocaleDateString("id-ID")}</Text>
              </TouchableOpacity>
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

        {/* Tombol Simpan */}
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
