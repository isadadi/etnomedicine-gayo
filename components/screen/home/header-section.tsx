import { globalStyles } from "@/constants/styles";
import { useSession } from "@/stores/authStore";
import { useLoginModalStore } from "@/stores/use-login-modal-store";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderSection() {
  const { session } = useSession();
  const { showLoginModal } = useLoginModalStore();

  const { width } = Dimensions.get("window");
  return (
    <View className="relative mb-12 h-[14%]">
      <View className="absolute inset-0">
        {/* Background Image */}
        <Image
          source={require("@/assets/images/background.webp")}
          style={[styles.reactLogo, { width }]}
        />
      </View>

      {/* TOMBOL USER AND CHAT */}
      <SafeAreaView style={styles.topButtonsContainer}>
        {/* Tombol Kanan */}
        <View className="flex-row gap-3">
          <TouchableOpacity
            onPress={() => {
              if (!session) {
                showLoginModal();
                return;
              }
              router.push("/chat/chat-room");
            }}
            activeOpacity={0.7}
            style={[globalStyles.blurCircle]}
          >
            <MaterialIcons name="support-agent" size={26} color="#737373" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[globalStyles.blurCircle]}
            onPress={() => router.push("/(app)/(settings)/profile")}
          >
            <MaterialIcons name="person" size={26} color="#737373" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* User Card */}
      <View
        style={styles.cardShadow}
        className="absolute z-10 bottom-0 left-[5%] right-[5%] translate-y-1/2 rounded-full border border-slate-100 bg-white p-4"
      >
        <View className="flex-row items-center gap-3">
          <Image
            source={require("@/assets/images/default/default-avatar.png")}
            style={styles.userPhoto}
          />
          <View
            className="flex justify-center h-full overflow-hidden "
            style={{ width: width - 150 }}
          >
            <Text
              className="text-lg font-semibold capitalize"
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              Assalamualaikum, {session?.user.name}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              className="text-neutral-500"
            >
              Bagaimana kabar kamu hari ini?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtonsContainer: {
    position: "absolute",
    // top: 10,
    top: 0,
    right: 16,
    zIndex: 20,
  },
  reactLogo: {
    height: "100%",
    objectFit: "fill",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // Untuk Android shadow
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25, // Setengah dari lebar/tinggi untuk lingkaran penuh
  },

  btnLogin: {
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 46,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 3,
    padding: 6,
    paddingHorizontal: 16,
  },
});
