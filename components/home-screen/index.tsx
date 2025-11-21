import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const PRIMARY = "#6C3FF0";
const TAB_ICON_COLOR = "#7C7C8A";

// tipagem simples
type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <View style={styles.logoInnerCircle} />
          </View>

          <View>
            <Text style={styles.appTitleMain}>Educational</Text>
            <Text style={styles.appTitleSub}>Center</Text>
          </View>
        </View>

        {/* Conteúdo */}
        <View style={styles.content}>
          <Text style={styles.heading}>
            Conecte-se com{"\n"}outros jovens{"\n"}aprendizes
          </Text>

          <Text style={styles.subtitle}>
            Prepare-se para o mercado de trabalho com trilhas preparatórias,
            grupos e mais.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Tracks")}
          >
            <Text style={styles.buttonText}>Explorar Trilhas</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tab bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.tabIcon, styles.tabIconActive]}>⌂</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Início</Text>
        </TouchableOpacity>

        <View style={styles.tabItem}>
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Grupos</Text>
        </View>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Profile")} // << aqui chama o perfil
        >
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

/* estilos iguais aos que você já tinha */
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  container: { flex: 1, paddingHorizontal: 24, paddingTop: 8 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    marginTop: 8,
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoInnerCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: PRIMARY,
  },
  appTitleMain: { fontSize: 22, fontWeight: "600" },
  appTitleSub: { fontSize: 22, fontWeight: "600", color: PRIMARY },
  content: { flex: 1 },
  heading: { fontSize: 26, fontWeight: "700", marginBottom: 16 },
  subtitle: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
    marginBottom: 24,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
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
