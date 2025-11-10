import { User } from "@/interfaces/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  users: User[];
  updateUser: (user: User, id: string) => void;
  addUser: (user: User) => void;
  getUserByUsername: (username: string) => User | undefined;
  getAllUsers: () => User[];
  clearUsers: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: [],

      addUser: (user) => {
        const existing = get().users.find(
          (u) => u.username.toLowerCase() === user.username.toLowerCase()
        );

        if (existing) {
          throw new Error("Username sudah digunakan");
        }

        set((state) => ({
          users: [...state.users, user],
        }));
      },

      updateUser: (user, id) => {
        set((state) => {
          const newUsers = state.users.map((usr) =>
            usr.id === id ? user : usr
          );

          return {
            users: newUsers,
          };
        });
      },

      getUserByUsername: (username) =>
        get().users.find(
          (u) => u.username.toLowerCase() === username.toLowerCase()
        ),

      getAllUsers: () => get().users,

      clearUsers: () => set({ users: [] }),
    }),
    {
      name: "user-storage", // nama key di storage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
