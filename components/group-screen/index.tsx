import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const PRIMARY = "#6C3FF0";
const TAB_ICON_COLOR = "#7C7C8A";

// por enquanto o "cargo" do perfil é fixo;
// depois você pode receber isso via contexto ou params
const USER_ROLE = "Jovem Aprendiz";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

const GroupScreen: React.FC<Props> = ({ navigation }) => {
  const groupTitle = `Grupo para\n${USER_ROLE}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* linha do voltar */}
        <View style={styles.backRow}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </View>

        {/* título + descrição */}
        <Text style={styles.heading}>{groupTitle}</Text>

        <Text style={styles.subtitle}>
          Troque experiências e dicas{"\n"}sobre aprendizagem
        </Text>

        {/* botão entrar no grupo */}
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Entrar no Grupo</Text>
        </TouchableOpacity>

        {/* Publicações */}
        <Text style={styles.sectionTitle}>Publicações</Text>

        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.postAvatar}>
              <Text style={styles.postAvatarInitial}>A</Text>
            </View>

            <View>
              <Text style={styles.postAuthor}>Amanda</Text>
              <Text style={styles.postTag}>ch</Text>
            </View>
          </View>

          <Text style={styles.postText}>
            Olá pessoal: Como está sendo a semana de vocês?
          </Text>
        </View>
      </View>

      {/* tab bar – aqui deixo Grupos ativo */}
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
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 8 },
  backRow: {
    marginTop: 4,
    marginBottom: 8,
  },
  backIcon: {
    fontSize: 24,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  postCard: {
    backgroundColor: "#F5F5F7",
    borderRadius: 16,
    padding: 14,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  postAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFD9E0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  postAvatarInitial: {
    fontSize: 16,
    fontWeight: "600",
    color: "#AA0044",
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: "600",
  },
  postTag: {
    fontSize: 12,
    color: "#777",
  },
  postText: {
    fontSize: 14,
    color: "#333",
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: "#E4E4E7",
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
  },
  tabItem: { flex: 1, alignItems: "center" },
  tabIcon: { fontSize: 18, color: TAB_ICON_COLOR, marginBottom: 2 },
  tabLabel: { fontSize: 12, color: TAB_ICON_COLOR },
  tabIconActive: { color: PRIMARY },
  tabLabelActive: { color: PRIMARY, fontWeight: "600" },
});
