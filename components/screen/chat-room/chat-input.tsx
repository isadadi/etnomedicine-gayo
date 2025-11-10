import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ChatInput({ input, setInput, sendMessage }: any) {
  const [inputHeight, setInputHeight] = useState(40);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={10}
    >
      <View className="flex-row items-end bg-white p-3 border-t border-gray-100">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Tulis pesan..."
          multiline
          onContentSizeChange={(e) =>
            setInputHeight(
              Math.min(Math.max(40, e.nativeEvent.contentSize.height), 120)
            )
          }
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            borderRadius: 20,
            paddingHorizontal: 14,
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 16,
            textAlignVertical: "top",
            minHeight: 40,
            maxHeight: 120,
            height: inputHeight,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            sendMessage();
            setInputHeight(40);
          }}
          disabled={!input.trim()}
          className={`ml-2 p-3 rounded-full justify-center items-center ${
            input?.trim() ? "bg-green-600" : "bg-gray-300"
          }`}
        >
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
