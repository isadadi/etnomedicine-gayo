import { Herb } from "@/interfaces/herbs";
import { ApiResponse } from "@/interfaces/response-api";
import { customTheme } from "@/theme/custom-theme";
import formatNumberToK from "@/utils/number-to-k";
import { MaterialIcons } from "@expo/vector-icons";
import { Text } from "@ui-kitten/components";
import { Image } from "expo-image";
import { router } from "expo-router";
import { MotiView } from "moti";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const CARD_WIDTH = 180;
const CARD_SPACING = 16;

type Props = {
  key: string;
  title: string;
  description: string;
  fn(): Promise<ApiResponse<Herb[]>>;
  paramsAll: string;
};

function HerbalCardSkeleton() {
  return (
    <View style={{ marginVertical: 12, backgroundColor: "#fff" }}>
      <View style={[styles.card]}>
        <MotiView
          from={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ loop: true, type: "timing", duration: 800 }}
          style={[styles.cardImage, { backgroundColor: "#e5e5e5" }]}
        />
        <View style={styles.cardTextContainer}>
          <MotiView
            from={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ loop: true, type: "timing", duration: 800 }}
            className="h-4 bg-gray-300 rounded w-2/3 mb-2"
          />
          <MotiView
            from={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ loop: true, type: "timing", duration: 800 }}
            className="h-3 bg-gray-300 rounded w-4/5 mb-1"
          />
          <MotiView
            from={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ loop: true, type: "timing", duration: 800 }}
            className="h-3 bg-gray-300 rounded w-3/5"
          />
        </View>
      </View>
    </View>
  );
}

export default function CardSection({
  key,
  title,
  description,
  fn,
  paramsAll,
}: Props) {
  const [data, setData] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const dt = await fn();
      setData(dt.data);
      setLoading(false);
    };

    getData();
  }, [fn]);

  return (
    // Menghapus px-4 dari sini, pindah ke contentContainerStyle di FlatList untuk konsistensi layout horizontal
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View>
          <Text category="h6" style={styles.headerTitle}>
            {title}
          </Text>
          <Text appearance="hint" category="s2">
            {description}
          </Text>
        </View>
        <TouchableOpacity
          className="rounded-full bg-color-primary-100 py-2 px-4"
          onPress={() =>
            router.push(`/detail-herbal/search-result?${paramsAll}`)
          }
        >
          <Text
            category="c2"
            style={{ color: customTheme["color-primary-700"] }}
          >
            Lihat
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section Popular */}
      <View style={styles.listContainer}>
        <FlatList<Herb>
          data={loading ? Array(5).fill(null) : data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          decelerationRate="fast"
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) =>
            loading ? (
              <HerbalCardSkeleton />
            ) : (
              <TouchableOpacity
                activeOpacity={0.95}
                onPress={() => {
                  router.push(`/detail-herbal/${item.id}`);
                }}
                style={{ marginVertical: 12, backgroundColor: "#fff" }}
              >
                <View style={styles.card}>
                  <Image
                    source={item.image}
                    style={styles.cardImage}
                    placeholder={require("@/assets/images/default/default-herb.png")}
                  />
                  <View style={styles.cardTextContainer}>
                    <Text
                      category="s1"
                      style={styles.cardTitle}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                    <Text
                      category="c1"
                      appearance="hint"
                      numberOfLines={2}
                      style={styles.cardDescription}
                    >
                      {item.description}
                    </Text>
                    <View className="flex flex-row mt-2 items-center">
                      <Text>
                        <MaterialIcons
                          name="favorite"
                          size={20}
                          color="#e11d48"
                        />
                      </Text>
                      <Text appearance="hint" category="c1">
                        &nbsp;{formatNumberToK(1200)}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // Jika Anda ingin padding umum di sinir
  },
  headerContainer: {
    // px-6 pt-10 (paddingHorizontal: 24, paddingTop: 40)
    // paddingHorizontal: 24,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10, // Mengganti marginTop di View bawahnya
  },
  headerTitle: {
    // text-gray-500 (Ui Kitten biasanya menangani warna teks melalui tema atau appearance)
    // Jika perlu warna spesifik: color: '#6b7280',
  },
  listContainer: {
    // Menghilangkan marginTop yang tumpang tindih dengan marginBottom di atas
  },
  flatListContent: {
    // paddingHorizontal: 24, gap: CARD_SPACING,
    paddingHorizontal: 8,
    gap: CARD_SPACING, // Requires RN 0.71+
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 0, // Hapus border default Ui Kitten Card jika ada
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
    backgroundColor: "#fff",
  },
  cardImage: {
    // w-full h-24 rounded-lg
    width: "100%",
    height: 120,
    borderRadius: 8,
    objectFit: "cover",
  },
  cardTextContainer: {
    // mt-2
    padding: 8,
  },
  cardTitle: {
    fontWeight: "700",
  },
  cardDescription: {
    // text-gray-500
    // appearance="hint" di Ui Kitten sering memberikan warna abu-abu yang mirip
  },
});
