import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useGroupChat } from "../group-chat-context";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const GroupScreen: React.FC<Props> = ({ navigation }) => {
  const { messages } = useGroupChat();

  const lastMessage = messages[messages.length - 1];
  const senderLabel =
    lastMessage?.author === "me" ? "Você" : lastMessage?.name ?? "";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Cabeçalho */}
        <Text style={styles.title}>Grupo para{"\n"}Jovem Aprendizes</Text>
        <Text style={styles.subtitle}>
          Troque experiências e dicas sobre aprendizagem.
        </Text>

        {/* Botão Entrar no Grupo */}
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("GroupChat")}
        >
          <Text style={styles.primaryButtonText}>Entrar no Grupo</Text>
        </TouchableOpacity>

        {/* Publicações / Última mensagem */}
        <Text style={styles.sectionTitle}>Publicações</Text>

        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitial}>
                {senderLabel ? senderLabel[0].toUpperCase() : "A"}
              </Text>
            </View>
            <View>
              <Text style={styles.postAuthor}>{senderLabel}</Text>
              <Text style={styles.postRole}>ch</Text>
            </View>
          </View>

          <Text style={styles.postText}>
            {lastMessage?.text ?? "Bem-vindo ao grupo!"}
          </Text>
        </View>
      </View>

      {/* Barra de navegação igual ao Home (Início / Grupos / Perfil) */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.tabIcon}>⌂</Text>
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Group")}
        >
          <Text style={[styles.tabIcon, styles.tabIconActive]}>👥</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Grupos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GroupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  avatarCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  avatarInitial: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: "600",
  },
  postRole: {
    fontSize: 11,
    color: "#6B7280",
  },
  postText: {
    fontSize: 13,
    color: "#111827",
  },

  /* Barra de navegação (mesmo padrão do Home) */
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    paddingVertical: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 2,
    color: "#6B7280",
  },
  tabIconActive: {
    color: PRIMARY,
  },
  tabLabel: {
    fontSize: 11,
    color: "#6B7280",
  },
  tabLabelActive: {
    color: PRIMARY,
    fontWeight: "600",
  },
});
