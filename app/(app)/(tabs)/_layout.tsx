import { customTheme } from "@/theme/custom-theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import React, { useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

export default function TabLayout() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: customTheme["color-primary-500"],
        headerShown: false,
      }}
      tabBar={({ state, descriptors, navigation }) => {
        return (
          <Animated.View className="flex-row items-center justify-around bg-white h-[70px] border-t border-gray-200">
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              const icon = options.tabBarIcon?.({
                focused: isFocused,
                color: isFocused ? customTheme["color-primary-500"] : "#999",
                size: 28,
              });

              return (
                <TouchableOpacity
                  key={route.name}
                  accessibilityRole="button"
                  onPress={onPress}
                  activeOpacity={0.8}
                  className="flex-1 items-center justify-center"
                >
                  {icon}
                  <Text
                    className={
                      isFocused ? "text-color-primary-500" : "text-slate-400"
                    }
                  >
                    {options.title}
                  </Text>
                </TouchableOpacity>
              );
            })}

            {/* Tombol Tengah (FAB) */}
            <Animated.View
              style={{ transform: [{ scale: scaleAnim }] }}
              className="absolute -top-6 self-center shadow-md"
            >
              <TouchableOpacity
                onPress={() => router.push("/(app)/(modal)/search-herbal")}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.9}
                className="bg-color-primary-500 w-[70px] h-[70px] rounded-full justify-center items-center shadow-lg shadow-color-primary-400"
              >
                <MaterialIcons
                  name="medication-liquid"
                  size={36}
                  color="#fff"
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        );
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={28} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favorit",
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={28} name="favorite" />
          ),
        }}
      />
    </Tabs>
  );
}
