import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useGroupChat } from "../group-chat-context";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
    goBack: () => void;
  };
};

const GroupChatScreen: React.FC<Props> = ({ navigation }) => {
  const { messages, sendMessage } = useGroupChat();
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {/* Cabeçalho com setinha */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.headerTitle}>Grupo para Jovem Aprendizes</Text>
            <Text style={styles.headerSubtitle}>
              Troque experiências e dicas sobre aprendizagem.
            </Text>
          </View>
        </View>

        {/* Mensagens */}
        <View style={styles.chatContainer}>
          <ScrollView
            contentContainerStyle={{ paddingVertical: 8 }}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg) => {
              const isMe = msg.author === "me";
              return (
                <View
                  key={msg.id}
                  style={[
                    styles.messageRow,
                    isMe ? styles.messageRowRight : styles.messageRowLeft,
                  ]}
                >
                  <View
                    style={[
                      styles.bubble,
                      isMe ? styles.bubbleMe : styles.bubbleOther,
                    ]}
                  >
                    {!isMe && (
                      <Text style={styles.messageName}>{msg.name}</Text>
                    )}
                    <Text
                      style={[
                        styles.messageText,
                        isMe && styles.messageTextMe,
                      ]}
                    >
                      {msg.text}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* Barra de digitação */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem..."
            placeholderTextColor="#9CA3AF"
            value={text}
            onChangeText={setText}
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            activeOpacity={0.8}
            onPress={handleSend}
          >
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default GroupChatScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backIcon: {
    fontSize: 26,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#6B7280",
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  messageRow: {
    marginVertical: 4,
    flexDirection: "row",
  },
  messageRowLeft: {
    justifyContent: "flex-start",
  },
  messageRowRight: {
    justifyContent: "flex-end",
  },
  bubble: {
    maxWidth: "75%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  bubbleOther: {
    backgroundColor: "#E5E7EB",
    borderTopLeftRadius: 4,
  },
  bubbleMe: {
    backgroundColor: PRIMARY,
    borderTopRightRadius: 4,
  },
  messageName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#4B5563",
    marginBottom: 2,
  },
  messageText: {
    fontSize: 14,
    color: "#111827",
  },
  messageTextMe: {
    color: "#FFFFFF",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    maxHeight: 80,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
