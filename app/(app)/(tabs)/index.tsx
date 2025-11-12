import AnimatedAppBar from "@/components/animated-appbar";
import CardSection from "@/components/screen/home/card-section";
import HeaderSection from "@/components/screen/home/header-section";
import { getHerbs, getHerbsBySearchParams } from "@/services/get-herbs";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, View } from "react-native";

export default function HomeScreen() {
  const sections = [
    {
      id: "all",
      title: "Favorit Banyak Orang",
      description: "Temukan tanaman herbal populer hari ini",
      fn: () => getHerbs(10),
      paramsAll: "",
    },
    {
      id: "Ringan",
      title: "Kamu Sakit Ringan?",
      description: "Obat herbal gayo untuk penyakit yang umum",
      fn: () => getHerbsBySearchParams({ diseaseType: "Ringan", limit: 10 }),
      paramsAll: "diseaseType=Ringan",
    },
    {
      id: "Berat",
      title: "Ramuan untuk Sakit Berat",
      description: "Obat untuk penyakit yang cukup serius",
      fn: () => getHerbsBySearchParams({ diseaseType: "Berat", limit: 10 }),
      paramsAll: "diseaseType=Berat",
    },
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar translucent backgroundColor="transparent" />
      <AnimatedAppBar scrollY={scrollY} showHeader={false} />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <HeaderSection />

        {sections.map((item) => (
          <CardSection
            key={item.id}
            title={item.title}
            description={item.description}
            fn={item.fn}
            paramsAll={item.paramsAll}
          />
        ))}
        <View style={{ height: 230 }} />
      </Animated.ScrollView>
    </View>
  );
}
