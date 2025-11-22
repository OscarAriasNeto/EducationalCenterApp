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

import { trails } from "../trails-data";
import { useProgress } from "../progress-context";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    goBack: () => void;
  };
};

const TracksScreen: React.FC<Props> = ({ navigation }) => {
  const { progress } = useProgress();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* botão voltar */}
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
          {trails.map((trail) => {
            const trailProgress = progress[trail.id]?.completedLessons ?? {};

            const totalModules = trail.modules.length;
            let completedModules = 0;

            trail.modules.forEach((module) => {
              const allLessonsDone = module.lessons.every(
                (lesson) => !!trailProgress[lesson.id]
              );
              if (allLessonsDone) completedModules++;
            });

            const ratio =
              totalModules > 0 ? completedModules / totalModules : 0;

            return (
              <TouchableOpacity
                key={trail.id}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Trail", { trailId: trail.id })
                }
              >
                <Text style={styles.cardTitle}>{trail.title}</Text>
                <Text style={styles.cardDescription}>{trail.description}</Text>

                <View style={styles.progressBackground}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${ratio * 100}%` },
                    ]}
                  />
                </View>

                <Text style={styles.modulesText}>
                  {completedModules} de {totalModules} módulos concluídos
                </Text>
              </TouchableOpacity>
            );
          })}
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
