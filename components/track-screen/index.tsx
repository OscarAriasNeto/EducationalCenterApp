import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const PRIMARY = "#6C3FF0";

const tracks = [
  {
    id: "1",
    title: "Comunicação Profissional",
    description:
      "Comunicação eficaz, postura e competências essenciais no ambiente de trabalho.",
    done: 2,
    total: 5,
    progress: 2 / 5,
  },
  {
    id: "2",
    title: "Introdução ao Mundo Corporativo",
    description:
      "Entenda como funcionam as empresas, áreas, rotinas e cultura organizacional.",
    done: 1,
    total: 4,
    progress: 1 / 4,
  },
  {
    id: "3",
    title: "Noções de Direito Trabalhista",
    description:
      "Direitos e deveres do jovem aprendiz, contratos e principais conceitos legais.",
    done: 0,
    total: 6,
    progress: 0 / 6,
  },
];

type Props = {
  navigation: {
    goBack: () => void;
  };
};

const TracksScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* linha do voltar */}
        <View style={styles.backRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>
          Trilhas{"\n"}Preparatórias
        </Text>

        <ScrollView
          style={styles.list}
          contentContainerStyle={{ paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          {tracks.map((track) => (
            <View key={track.id} style={styles.card}>
              <Text style={styles.cardTitle}>{track.title}</Text>
              <Text style={styles.cardDescription}>{track.description}</Text>

              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    { width: `${track.progress * 100}%` },
                  ]}
                />
              </View>

              <Text style={styles.modulesText}>
                {track.done} de {track.total}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TracksScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
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
    marginBottom: 24,
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: "#555",
    marginBottom: 12,
  },
  progressBackground: {
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E5E5EA",
    overflow: "hidden",
    marginBottom: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: PRIMARY,
  },
  modulesText: {
    fontSize: 12,
    color: "#777",
  },
});
