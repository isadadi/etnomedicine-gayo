import { useStorageState } from "@/hooks/useStorageState";
import { User } from "@/interfaces/user";
import { useUserStore } from "@/stores/use-user-store"; // ✅ Tambahkan ini
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Session {
  user: User;
  token: string;
}

interface SessionContextType {
  session: Session | null;
  isLoading: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateSession: (updatedData: Partial<User>) => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [[isLoading, sessionJSON], setSession] = useStorageState("session");
  const [session, setSessionState] = useState<Session | null>(null);

  const { getUserByUsername } = useUserStore.getState(); // ✅ akses langsung user dari zustand

  // Parse session saat pertama kali
  useEffect(() => {
    if (sessionJSON) {
      try {
        setSessionState(JSON.parse(sessionJSON));
      } catch (e) {
        console.warn("Gagal parse session:", e);
        setSessionState(null);
      }
    } else {
      setSessionState(null);
    }
  }, [sessionJSON]);

  /**
   * ✅ Login function yang mengecek user dari userStore
   */
  const signIn = async (username: string, password: string) => {
    const user = getUserByUsername(username);

    if (!user) {
      throw new Error("Pengguna tidak ditemukan");
    }

    if (user.password !== password) {
      throw new Error("Password salah");
    }

    const fakeToken = `token-${user.id}-${Date.now()}`; // bisa diganti kalau ada backend nanti
    const newSession = { user, token: fakeToken };

    setSessionState(newSession);
    await setSession(JSON.stringify(newSession));
  };

  const signOut = async () => {
    setSessionState(null);
    await setSession(null);
  };

  const updateSession = async (updatedData: Partial<User>) => {
    if (!session) return;
    const newSession = {
      ...session,
      user: { ...session.user, ...updatedData },
    };
    setSessionState(newSession);
    await setSession(JSON.stringify(newSession));
  };

  return (
    <SessionContext.Provider
      value={{
        session,
        isLoading,
        signIn,
        signOut,
        updateSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
