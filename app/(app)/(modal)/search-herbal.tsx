/* eslint-disable react-hooks/exhaustive-deps */
import SearchBottomSheet, { ListItem } from "@/components/search-bottom-sheet";
import { getDiseasBySearchParams } from "@/services/get-diseases";
import { MaterialIcons } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui-kitten/components";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Animated,
  Keyboard,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSWR from "swr";
import { z } from "zod";

// 🧩 Schema validasi
const schema = z.object({
  diseaseType: z.enum(["Ringan", "Berat"], {
    required_error: "Pilih jenis penyakit",
  }),
  disease: z.string().min(1, "Penyakit wajib dipilih"),
  age: z
    .string()
    .min(1, "Usia wajib diisi")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Masukkan usia yang valid",
    }),
  gender: z.enum(["Pria", "Wanita"], {
    required_error: "Pilih jenis kelamin",
  }),
});

type FormType = z.infer<typeof schema>;

export default function FormPencarianHerbal() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const sheetRef = useRef<BottomSheet>(null);
  const keyboardOffset = useRef(new Animated.Value(0)).current;

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      diseaseType: "Ringan",
      disease: "",
      age: "",
      gender: "Pria",
    },
  });

  const diseaseType = watch("diseaseType");

  const { data: diseases, isLoading: loadingDisease } = useSWR(
    diseaseType ? `getDisease-${diseaseType}` : null,
    () => getDiseasBySearchParams({ type: diseaseType })
  );

  const diseaseList: ListItem[] =
    diseases?.data.map((dt) => ({ id: dt.name, label: dt.name })) ?? [];

  const selectedDisease = watch("disease");
  const [isSheetOpen, setSheetOpen] = useState(false);

  const onSubmit = (data: FormType) => {
    router.push({
      pathname: "/detail-herbal/search-result",
      params: {
        diseaseType: data.diseaseType,
        disease: data.disease,
        age: data.age,
        gender: data.gender,
      },
    });
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
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-1 rounded-full"
        >
          <MaterialIcons name="close" size={24} color="#222" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Pencarian Obat Herbal
        </Text>
      </View>

      {/* Konten Form */}
      <Animated.ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        {/* Jenis Penyakit */}
        <View className="mb-8">
          <Text className="font-medium text-neutral-800 mb-4">
            Jenis Penyakit
          </Text>
          <Controller
            control={control}
            name="diseaseType"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row gap-4">
                {["Ringan", "Berat"].map((item) => (
                  <Pressable
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
                  </Pressable>
                ))}
              </View>
            )}
          />
          {errors.diseaseType && (
            <Text className="text-red-500 text-sm mt-2">
              {errors.diseaseType.message}
            </Text>
          )}
        </View>

        {/* Pilih Penyakit */}
        <View className="mb-8">
          <Text className="font-medium text-neutral-800 mb-2">
            Pilih Penyakit
          </Text>
          <Controller
            control={control}
            name="disease"
            render={({ field: { value } }) => (
              <>
                <Pressable
                  onPress={() => setSheetOpen(true)}
                  className="border border-gray-300 rounded-xl px-3 py-2 bg-gray-50"
                >
                  <Text
                    className={`${
                      selectedDisease ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {selectedDisease
                      ? diseaseList.find((p) => p.id === selectedDisease)?.label
                      : "Klik untuk memilih"}
                  </Text>
                </Pressable>
              </>
            )}
          />
          {errors.disease && (
            <Text className="text-red-500 text-sm mt-2">
              {errors.disease.message}
            </Text>
          )}
        </View>

        {/* Usia */}
        <View className="mb-8">
          <Text className="font-medium text-neutral-800 mb-2">Usia</Text>
          <Controller
            control={control}
            name="age"
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder="Masukkan usia"
                keyboardType="numeric"
                value={value}
                onChangeText={onChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-neutral-800"
              />
            )}
          />
          {errors.age && (
            <Text className="text-red-500 text-sm mt-2">
              {errors.age.message}
            </Text>
          )}
        </View>

        {/* Jenis Kelamin */}
        <View className="mb-8">
          <Text className="font-medium text-neutral-800 mb-2">
            Jenis Kelamin
          </Text>
          <Controller
            control={control}
            name="gender"
            render={({ field: { value, onChange } }) => (
              <View className="flex-row gap-4">
                {["Pria", "Wanita"].map((item) => (
                  <Pressable
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
                  </Pressable>
                ))}
              </View>
            )}
          />
          {errors.gender && (
            <Text className="text-red-500 text-sm mt-2">
              {errors.gender.message}
            </Text>
          )}
        </View>
      </Animated.ScrollView>

      {/* Tombol Bawah dengan Animasi */}
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: keyboardOffset,
        }}
      >
        <SafeAreaView
          className="bg-white border-t border-gray-200 p-4"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 8,
          }}
        >
          <Button
            activeOpacity={0.8}
            onPress={handleSubmit(onSubmit)}
            style={{ borderRadius: 8 }}
          >
            <Text className="text-center text-white font-semibold text-lg">
              Cari Obat Herbal
            </Text>
          </Button>
        </SafeAreaView>
      </Animated.View>

      <SearchBottomSheet
        ref={sheetRef}
        data={diseaseList}
        loading={loadingDisease}
        isOpen={isSheetOpen}
        title="Cari Penyakit"
        onClose={() => setSheetOpen(false)}
        onSelect={(item) => {
          setValue("disease", item.id);
          setSheetOpen(false);
        }}
        selectedValue={selectedDisease}
      />
    </SafeAreaView>
  );
}
