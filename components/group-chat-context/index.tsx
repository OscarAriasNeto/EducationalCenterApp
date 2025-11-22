import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type GroupMessage = {
  id: string;
  author: "me" | "other";
  name: string;
  text: string;
  createdAt: number;
};

type GroupChatContextType = {
  messages: GroupMessage[];
  sendMessage: (text: string) => void;
};

const GroupChatContext = createContext<GroupChatContextType | undefined>(
  undefined
);

// Mensagem inicial: "bem vindo ao grupo!"
const initialMessages: GroupMessage[] = [
  {
    id: "1",
    author: "other",
    name: "Amanda",
    text: "Bem-vindo ao grupo!",
    createdAt: Date.now(),
  },
];

export const GroupChatProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<GroupMessage[]>(initialMessages);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newMessage: GroupMessage = {
      id: String(Date.now()),
      author: "me",
      name: "Você",
      text: trimmed,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <GroupChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </GroupChatContext.Provider>
  );
};

export const useGroupChat = (): GroupChatContextType => {
  const ctx = useContext(GroupChatContext);
  if (!ctx) {
    throw new Error("useGroupChat must be used within a GroupChatProvider");
  }
  return ctx;
};
