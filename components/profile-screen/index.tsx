import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const PRIMARY = "#6C3FF0";
const TAB_ICON_COLOR = "#7C7C8A";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Linha do botão voltar */}
        <View style={styles.backRow}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </View>

        {/* Cabeçalho do perfil */}
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>L</Text>
          </View>

          <View>
            <Text style={styles.name}>Lucas</Text>
            <Text style={styles.role}>Jovem Aprendiz</Text>
          </View>
        </View>

        {/* Conteúdo rolável */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Opções */}
          <TouchableOpacity style={styles.optionRow}>
            <Text style={styles.optionText}>Editar Perfil</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.optionRow}>
            <Text style={[styles.optionText, styles.logoutText]}>Sair</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Minhas trilhas */}
          <Text style={styles.sectionTitle}>Minhas Trilhas</Text>

          <TouchableOpacity style={styles.trackButton}>
            <Text style={styles.trackText}>Comunicação Profissional</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trackButton}>
            <Text style={styles.trackText}>Introdução ao Mundo Corporativo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.trackButton}>
            <Text style={styles.trackText}>Noções de Direito Trabalhista</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Tab bar – aqui Perfil fica ativo */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.tabIcon}>⌂</Text>
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>

        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Grupos</Text>
        </View>

        <TouchableOpacity style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.tabIconActive]}>👤</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E5E5EA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarInitial: {
    fontSize: 28,
    fontWeight: "600",
    color: "#777",
  },
  name: { fontSize: 24, fontWeight: "700" },
  role: { fontSize: 14, color: "#777", marginTop: 2 },
  optionRow: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
  },
  logoutText: {
    color: "#D10F3F",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E4E4E7",
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  trackButton: {
    backgroundColor: "#F5F5F7",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  trackText: {
    fontSize: 15,
    fontWeight: "500",
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
