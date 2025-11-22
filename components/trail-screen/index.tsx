import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";

import { trails } from "../trails-data";
import { useProgress } from "../progress-context";

const PRIMARY = "#6C3FF0";
const SIDEBAR_BG = "#F5F5F7";

type Props = {
  navigation: {
    goBack: () => void;
  };
  route: {
    params?: {
      trailId?: string;
    };
  };
};

const TrailScreen: React.FC<Props> = ({ navigation, route }) => {
  const trailIdFromRoute = route?.params?.trailId ?? "communication";

  const trail = useMemo(
    () => trails.find((t) => t.id === trailIdFromRoute) ?? trails[0],
    [trailIdFromRoute]
  );

  const { progress, markLessonCompleted } = useProgress();
  const trailProgress = progress[trail.id]?.completedLessons ?? {};

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {}
  );
  const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

  const currentModule = trail.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const isLessonCompleted = (lessonId: string) => !!trailProgress[lessonId];

  const goToLesson = (moduleIndex: number, lessonIndex: number) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
  };

  const goToNextLesson = () => {
    const module = trail.modules[currentModuleIndex];
    if (currentLessonIndex < module.lessons.length - 1) {
      setCurrentLessonIndex((prev) => prev + 1);
      return;
    }
    if (currentModuleIndex < trail.modules.length - 1) {
      setCurrentModuleIndex((prev) => prev + 1);
      setCurrentLessonIndex(0);
      return;
    }
    Alert.alert("Parabéns!", "Você concluiu todas as aulas desta trilha 🎉");
  };

  const handleOpenVideo = () => {
    if (!currentLesson.youtubeId) return;
    const url = `https://www.youtube.com/watch?v=${currentLesson.youtubeId}`;
    Linking.openURL(url).catch(() => {
      Alert.alert("Erro", "Não foi possível abrir o vídeo.");
    });
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    if (!currentLesson.questions) return;

    const newResults: Record<string, boolean> = {};
    currentLesson.questions.forEach((q) => {
      const selected = selectedOptions[q.id];
      const correctOption = q.options.find((o) => o.isCorrect);
      newResults[q.id] = !!correctOption && selected === correctOption.id;
    });

    setQuizResults((prev) => ({ ...prev, ...newResults }));
    markLessonCompleted(trail.id, currentLesson.id);

    const total = currentLesson.questions.length;
    const acertos = Object.values(newResults).filter(Boolean).length;

    Alert.alert(
      "Resultados",
      `Você acertou ${acertos} de ${total} pergunta(s).`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* topo */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 12 }}>
          <Text style={styles.trailTitle}>{trail.title}</Text>
          <Text style={styles.trailSubtitle}>
            Acompanhe os módulos e complete as aulas da trilha.
          </Text>
        </View>
      </View>

      {/* corpo */}
      <View style={styles.body}>
        {/* barra esquerda */}
        <View style={styles.sidebar}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          >
            {trail.modules.map((module, mIndex) => (
              <View key={module.id} style={styles.moduleBlock}>
                <Text style={styles.moduleTitle}>{module.title}</Text>

                {module.lessons.map((lesson, lIndex) => {
                  const isCurrent =
                    mIndex === currentModuleIndex &&
                    lIndex === currentLessonIndex;
                  const completed = isLessonCompleted(lesson.id);

                  return (
                    <TouchableOpacity
                      key={lesson.id}
                      style={[
                        styles.lessonRow,
                        isCurrent && styles.lessonRowActive,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => goToLesson(mIndex, lIndex)}
                    >
                      <View
                        style={[
                          styles.lessonStatusDot,
                          completed && styles.lessonStatusDotCompleted,
                        ]}
                      />
                      <Text
                        style={[
                          styles.lessonRowText,
                          completed && styles.lessonRowTextCompleted,
                        ]}
                        numberOfLines={1}
                      >
                        {lesson.title}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* conteúdo da aula */}
        <View style={styles.lessonContent}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          >
            <Text style={styles.lessonBadge}>
              Módulo {currentModuleIndex + 1} · Aula {currentLessonIndex + 1}
            </Text>

            <Text style={styles.lessonTitle}>{currentLesson.title}</Text>

            {currentLesson.type === "video" && (
              <>
                <Text style={styles.lessonType}>Aula em vídeo</Text>

                {!!currentLesson.description && (
                  <Text style={styles.lessonDescription}>
                    {currentLesson.description}
                  </Text>
                )}

                <TouchableOpacity
                  style={styles.primaryButton}
                  activeOpacity={0.8}
                  onPress={handleOpenVideo}
                >
                  <Text style={styles.primaryButtonText}>
                    Abrir vídeo no YouTube
                  </Text>
                </TouchableOpacity>

                <Text style={styles.infoText}>
                  Após assistir ao vídeo, avance para a próxima aula.
                </Text>

                <TouchableOpacity
                  style={styles.secondaryButton}
                  activeOpacity={0.8}
                  onPress={() => {
                    markLessonCompleted(trail.id, currentLesson.id);
                    goToNextLesson();
                  }}
                >
                  <Text style={styles.secondaryButtonText}>
                    Ir para a próxima aula
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {currentLesson.type === "quiz" &&
              currentLesson.questions &&
              currentLesson.questions.map((q) => {
                const selectedOptionId = selectedOptions[q.id];
                const result = quizResults[q.id];

                return (
                  <View key={q.id} style={styles.questionBlock}>
                    <Text style={styles.questionText}>{q.text}</Text>

                    {q.options.map((opt) => {
                      const isSelected = selectedOptionId === opt.id;
                      const isCorrect = opt.isCorrect;
                      const showResult = result !== undefined;

                      let borderColor = "#E4E4E7";
                      let bg = "#FFF";

                      if (showResult && isSelected && isCorrect) {
                        borderColor = "#22C55E";
                        bg = "#ECFDF3";
                      } else if (showResult && isSelected && !isCorrect) {
                        borderColor = "#EF4444";
                        bg = "#FEF2F2";
                      } else if (showResult && isCorrect && !isSelected) {
                        borderColor = "#22C55E";
                      } else if (isSelected) {
                        borderColor = PRIMARY;
                        bg = "#F4F3FF";
                      }

                      return (
                        <TouchableOpacity
                          key={opt.id}
                          style={[
                            styles.optionButton,
                            { borderColor, backgroundColor: bg },
                          ]}
                          activeOpacity={0.8}
                          onPress={() => handleSelectOption(q.id, opt.id)}
                        >
                          <Text style={styles.optionText}>{opt.text}</Text>
                        </TouchableOpacity>
                      );
                    })}

                    {result !== undefined && (
                      <Text
                        style={[
                          styles.questionResult,
                          result
                            ? styles.questionResultCorrect
                            : styles.questionResultWrong,
                        ]}
                      >
                        {result ? "Você acertou!" : "Você errou esta pergunta."}
                      </Text>
                    )}
                  </View>
                );
              })}

            {currentLesson.type === "quiz" && (
              <TouchableOpacity
                style={styles.primaryButton}
                activeOpacity={0.8}
                onPress={handleSubmitQuiz}
              >
                <Text style={styles.primaryButtonText}>Enviar respostas</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TrailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 12,
  },
  backIcon: {
    fontSize: 24,
  },
  trailTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  trailSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  body: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 130,
    backgroundColor: SIDEBAR_BG,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  moduleBlock: {
    marginBottom: 16,
  },
  moduleTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
    marginBottom: 6,
  },
  lessonRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 8,
  },
  lessonRowActive: {
    backgroundColor: "#E4E1FF",
  },
  lessonStatusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
    backgroundColor: "#D4D4D8",
  },
  lessonStatusDotCompleted: {
    backgroundColor: PRIMARY,
  },
  lessonRowText: {
    fontSize: 11,
    flex: 1,
    color: "#111827",
  },
  lessonRowTextCompleted: {
    textDecorationLine: "line-through",
    color: "#6B7280",
  },
  lessonContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  lessonBadge: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  lessonType: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 8,
  },
  lessonDescription: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  primaryButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: PRIMARY,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 12,
  },
  secondaryButtonText: {
    color: PRIMARY,
    fontSize: 14,
    fontWeight: "600",
  },
  infoText: {
    fontSize: 13,
    color: "#4B5563",
    marginTop: 8,
  },
  questionBlock: {
    marginTop: 16,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },
  optionButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 6,
  },
  optionText: {
    fontSize: 14,
    color: "#111827",
  },
  questionResult: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "600",
  },
  questionResultCorrect: {
    color: "#16A34A",
  },
  questionResultWrong: {
    color: "#DC2626",
  },
});
