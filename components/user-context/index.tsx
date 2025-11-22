import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type UserProfile = {
  nome: string;
  idade: string;
  email: string;
  cargo: string;
  objetivo: string;
};

type UserContextType = {
  profile: UserProfile;
  updateProfile: (data: UserProfile) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const defaultProfile: UserProfile = {
  nome: "Jovem Aprendiz",
  idade: "18",
  email: "teste@educationalcenter.com",
  cargo: "Jovem Aprendiz",
  objetivo: "Crescer profissionalmente e se preparar para o mercado de trabalho.",
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  const updateProfile = (data: UserProfile) => {
    setProfile(data);
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
};
