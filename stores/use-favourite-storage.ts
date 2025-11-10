import { Herb } from "@/interfaces/herbs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavoriteStore = {
  favorites: Herb[];
  toggleFavorite: (item: Herb) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
};

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (item) => {
        const exists = get().favorites.some((fav) => fav.id === item.id);
        if (exists) {
          set({
            favorites: get().favorites.filter((fav) => fav.id !== item.id),
          });
        } else {
          set({ favorites: [...get().favorites, item] });
        }
      },

      isFavorite: (id) => get().favorites.some((fav) => fav.id === id),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorite-herbal-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
