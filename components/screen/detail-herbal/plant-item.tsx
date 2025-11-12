import { Plant } from "@/interfaces/plant";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PlantItem({ plant }: { plant: Plant }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Item tanaman */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container}
      >
        <Image
          source={
            plant.image
              ? { uri: plant.image }
              : require("@/assets/images/default/default-plant.png")
          }
          style={styles.thumbnail}
          placeholder={require("@/assets/images/default/default-plant.png")}
        />
        <View>
          <Text className="font-semibold text-neutral-800">{plant.name}</Text>
          <Text className="text-neutral-600 italic text-sm">{plant.latin}</Text>
          <Text className="text-neutral-500 text-sm">({plant.gayo})</Text>
        </View>
      </TouchableOpacity>

      {/* Modal preview gambar */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.imageContainer}>
            <Image
              source={
                plant.image ||
                require("@/assets/images/default/default-plant.png")
              }
              style={styles.fullImage}
              resizeMode="contain"
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  latin: {
    fontSize: 13,
    color: "#6b7280",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "85%",
    height: "70%",
    borderRadius: 16,
    overflow: "hidden",
  },
  fullImage: {
    width: "100%",
    height: "100%",
  },
});
