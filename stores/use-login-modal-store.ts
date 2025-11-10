import { create } from "zustand";

type LoginModalState = {
  visible: boolean;
  message?: string | null;
  showLoginModal: (message?: string) => void;
  hideLoginModal: () => void;
};

export const useLoginModalStore = create<LoginModalState>((set) => ({
  visible: false,
  message: null,
  showLoginModal: (message) => set({ visible: true, message }),
  hideLoginModal: () => set({ visible: false, message: null }),
}));
