/* eslint-disable react-hooks/exhaustive-deps */
import * as SecureStore from "expo-secure-store";
import { useCallback, useEffect, useReducer } from "react";
import { Platform } from "react-native";

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null]
): UseStateHook<T> {
  return useReducer(
    (
      state: [boolean, T | null],
      action: T | null = null
    ): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

/**
 * Simpan item ke storage secara cross-platform
 */
export async function setStorageItemAsync(key: string, value: string | null) {
  if (Platform.OS === "web") {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error("Local storage is unavailable:", e);
    }
  } else {
    if (value == null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

/**
 * Hook untuk menyimpan dan memuat data dari storage
 * dengan state `[isLoading, value]`
 */
export function useStorageState(key: string): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>([true, null]); // pastikan awalnya loading = true

  // Ambil data dari storage saat pertama kali
  useEffect(() => {
    const load = async () => {
      try {
        let value: string | null = null;

        if (Platform.OS === "web") {
          if (typeof localStorage !== "undefined") {
            value = localStorage.getItem(key);
          }
        } else {
          value = await SecureStore.getItemAsync(key);
        }

        // Setelah selesai ambil data, ubah state (loading jadi false)
        setState(value);
      } catch (e) {
        console.error("Gagal memuat storage:", e);
        setState(null);
      }
    };

    load();
  }, [key]);

  // Fungsi set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}
