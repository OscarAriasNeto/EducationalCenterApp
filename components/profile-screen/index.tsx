import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useUser } from "../user-context";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { profile } = useUser();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.headerTitle}>Perfil</Text>

        {/* Card principal do perfil */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>
              {profile.nome ? profile.nome[0].toUpperCase() : "J"}
            </Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{profile.nome}</Text>
            <Text style={styles.profileRole}>{profile.cargo}</Text>
            <Text style={styles.profileEmail}>{profile.email}</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <Text style={styles.editButtonText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Detalhes adicionais */}
        <View style={styles.detailsCard}>
          <Text style={styles.detailsTitle}>Sobre você</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Idade</Text>
            <Text style={styles.detailValue}>{profile.idade} anos</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Cargo</Text>
            <Text style={styles.detailValue}>{profile.cargo}</Text>
          </View>

          <View style={styles.detailRowColumn}>
            <Text style={styles.detailLabel}>Objetivo</Text>
            <Text style={styles.detailValue}>{profile.objetivo}</Text>
          </View>
        </View>
      </View>

      {/* === BARRA IGUAL À DO HOME, MAS COM PERFIL ATIVO === */}
      <View style={styles.tabBar}>
        {/* Início (inativo aqui) */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.tabIcon}>⌂</Text>
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>

        {/* Grupos (inativo aqui) */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Group")}
        >
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Grupos</Text>
        </TouchableOpacity>

        {/* Perfil (ativo) */}
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.tabIcon, styles.tabIconActive]}>👤</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarInitials: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4B5563",
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
  },
  profileRole: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  profileEmail: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 2,
  },
  editButton: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: PRIMARY,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editButtonText: {
    fontSize: 12,
    color: PRIMARY,
    fontWeight: "600",
  },
  detailsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  detailsTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailRowColumn: {
    marginTop: 4,
  },
  detailLabel: {
    fontSize: 13,
    color: "#6B7280",
  },
  detailValue: {
    fontSize: 13,
    color: "#111827",
  },

  /* === TAB BAR (MESMO PADRÃO DO HOME) === */
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
