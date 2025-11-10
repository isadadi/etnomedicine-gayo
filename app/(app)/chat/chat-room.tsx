import ChatInput from "@/components/screen/chat-room/chat-input";
import { useSession } from "@/stores/authStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Message {
  id: string;
  sender: "user" | "admin";
  text: string;
  timestamp: string;
}

export default function ChatRoomScreen() {
  const { session } = useSession();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "admin",
      text: "Halo 👋! Ada yang bisa kami bantu hari ini?",
      timestamp: "09:00",
    },
  ]);
  const [input, setInput] = useState("");
  const flatListRef = useRef<FlatList>(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Simulasi balasan dari admin
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "admin",
          text: "Baik, kami sedang memproses pertanyaan Anda 🌿",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1500);
  };

  useEffect(() => {
    // Scroll ke bawah setiap kali pesan baru masuk
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
      <View
        className={`flex-row my-1 ${
          isUser ? "justify-end" : "justify-start"
        } px-3`}
      >
        <View
          className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
            isUser ? "bg-green-600" : "bg-gray-200"
          }`}
        >
          <Text
            className={`text-base ${isUser ? "text-white" : "text-gray-800"}`}
          >
            {item.text}
          </Text>
          <Text
            className={`text-xs mt-1 self-end ${
              isUser ? "text-green-100" : "text-gray-500"
            }`}
          >
            {item.timestamp}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 border-b border-gray-100 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 p-1 rounded-full"
        >
          <Ionicons name="chevron-back" size={24} color="#222" />
        </TouchableOpacity>
        <View>
          <Text className="text-lg font-semibold text-gray-900">
            Bantuan Etnomedicine Gayo
          </Text>
          <Text className="text-xs text-gray-500">Admin aktif 🌿</Text>
        </View>
      </View>

      {/* Chat Area */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      {/* Input Box */}
      <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} />
    </SafeAreaView>
  );
}
