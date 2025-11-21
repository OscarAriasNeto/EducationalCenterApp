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

const PRIMARY = "#6C3FF0";
const SIDEBAR_BG = "#F5F5F7";

type LessonType = "video" | "quiz";

type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

type Lesson = {
  id: string;
  title: string;
  type: LessonType;
  youtubeId?: string;
  description?: string;
  questions?: QuizQuestion[];
};

type Module = {
  id: string;
  title: string;
  lessons: Lesson[];
};

type Trail = {
  id: string;
  title: string;
  modules: Module[];
};

// ====== DADOS DA PRIMEIRA TRILHA ======

const communicationTrail: Trail = {
  id: "communication",
  title: "Comunicação Profissional",
  modules: [
    // Módulos 1 a 5 – (mesmo conteúdo que te mandei antes)
    // --- MÓDULO 1 ---
    {
      id: "m1",
      title: "Fundamentos da Comunicação",
      lessons: [
        {
          id: "m1l1",
          title: "O que é comunicação profissional?",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda o conceito de comunicação profissional e seu impacto no dia a dia de trabalho.",
        },
        {
          id: "m1l2",
          title: "Postura e linguagem no ambiente corporativo",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Veja exemplos práticos de postura, tom de voz e linguagem adequada.",
        },
        {
          id: "m1l3",
          title: "Quiz: Conceitos básicos",
          type: "quiz",
          questions: [
            {
              id: "m1l3q1",
              text: "Comunicação assertiva é:",
              options: [
                {
                  id: "a",
                  text: "Falar tudo o que pensa, sem filtros.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Expressar-se com clareza e respeito.",
                  isCorrect: true,
                },
                {
                  id: "c",
                  text: "Evitar conflitos a qualquer custo.",
                  isCorrect: false,
                },
              ],
            },
            {
              id: "m1l3q2",
              text: "No ambiente de trabalho, é importante:",
              options: [
                {
                  id: "a",
                  text: "Escutar ativamente os colegas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Falar mais alto para se impor.",
                  isCorrect: false,
                },
                {
                  id: "c",
                  text: "Interromper para mostrar interesse.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m1l4",
          title: "Quiz: Comunicação verbal",
          type: "quiz",
          questions: [
            {
              id: "m1l4q1",
              text: "Qual é um exemplo de boa comunicação verbal?",
              options: [
                {
                  id: "a",
                  text: "Usar gírias o tempo todo.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Ser claro e objetivo.",
                  isCorrect: true,
                },
                {
                  id: "c",
                  text: "Falar muito rápido.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m1l5",
          title: "Quiz: Comunicação não verbal",
          type: "quiz",
          questions: [
            {
              id: "m1l5q1",
              text: "Entre os itens abaixo, qual ajuda na comunicação não verbal?",
              options: [
                {
                  id: "a",
                  text: "Contato visual adequado.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Ficar olhando para o celular.",
                  isCorrect: false,
                },
                {
                  id: "c",
                  text: "Cruzar os braços e se afastar.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    // --- MÓDULO 2 ---
    {
      id: "m2",
      title: "Comunicação Escrita",
      lessons: [
        {
          id: "m2l1",
          title: "Boas práticas em e-mails",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Aprenda como escrever e-mails objetivos e profissionais.",
        },
        {
          id: "m2l2",
          title: "Mensagens em aplicativos corporativos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como se comunicar bem em chats internos como Teams, Slack, etc.",
        },
        {
          id: "m2l3",
          title: "Quiz: Estrutura de um e-mail",
          type: "quiz",
          questions: [
            {
              id: "m2l3q1",
              text: "O que NÃO é recomendado em um e-mail profissional?",
              options: [
                { id: "a", text: "Assunto claro.", isCorrect: false },
                { id: "b", text: "Saudação inicial.", isCorrect: false },
                {
                  id: "c",
                  text: "Uso excessivo de emojis.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "m2l4",
          title: "Quiz: Tom de voz na escrita",
          type: "quiz",
          questions: [
            {
              id: "m2l4q1",
              text: "Qual opção representa um tom adequado?",
              options: [
                {
                  id: "a",
                  text: '"URGENTE!!! RESPONDA AGORA!!!"',
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: '"Por favor, poderia verificar isso hoje?"',
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "m2l5",
          title: "Quiz: Revisão de texto",
          type: "quiz",
          questions: [
            {
              id: "m2l5q1",
              text: "Antes de enviar um e-mail é importante:",
              options: [
                {
                  id: "a",
                  text: "Conferir ortografia e clareza.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Enviar o mais rápido possível.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    // --- MÓDULO 3 ---
    {
      id: "m3",
      title: "Comunicação em Equipe",
      lessons: [
        {
          id: "m3l1",
          title: "Trabalho em equipe e colaboração",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Entenda o papel da comunicação no trabalho em equipe.",
        },
        {
          id: "m3l2",
          title: "Feedbacks construtivos",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como dar e receber feedbacks de maneira saudável.",
        },
        {
          id: "m3l3",
          title: "Quiz: Empatia na equipe",
          type: "quiz",
          questions: [
            {
              id: "m3l3q1",
              text: "Ser empático significa:",
              options: [
                {
                  id: "a",
                  text: "Ignorar as dificuldades do outro.",
                  isCorrect: false,
                },
                {
                  id: "b",
                  text: "Tentar compreender o ponto de vista do outro.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "m3l4",
          title: "Quiz: Conflitos",
          type: "quiz",
          questions: [
            {
              id: "m3l4q1",
              text: "Em um conflito na equipe, é melhor:",
              options: [
                {
                  id: "a",
                  text: "Conversar abertamente e buscar solução.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Falar mal da pessoa para outros colegas.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m3l5",
          title: "Quiz: Escuta ativa",
          type: "quiz",
          questions: [
            {
              id: "m3l5q1",
              text: "Escuta ativa envolve:",
              options: [
                {
                  id: "a",
                  text: "Prestar atenção e fazer perguntas.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Pensar apenas na resposta.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    // --- MÓDULO 4 ---
    {
      id: "m4",
      title: "Comunicação com Clientes",
      lessons: [
        {
          id: "m4l1",
          title: "Primeiro contato com o cliente",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como se apresentar e criar uma boa primeira impressão.",
        },
        {
          id: "m4l2",
          title: "Entendendo as necessidades do cliente",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Técnicas para escutar e mapear as necessidades.",
        },
        {
          id: "m4l3",
          title: "Quiz: Linguagem com o cliente",
          type: "quiz",
          questions: [
            {
              id: "m4l3q1",
              text: "É adequado usar gírias com o cliente?",
              options: [
                { id: "a", text: "Sim, sempre.", isCorrect: false },
                {
                  id: "b",
                  text: "Depende do contexto, mas com cuidado.",
                  isCorrect: true,
                },
              ],
            },
          ],
        },
        {
          id: "m4l4",
          title: "Quiz: Resolver problemas",
          type: "quiz",
          questions: [
            {
              id: "m4l4q1",
              text: "Quando o cliente está insatisfeito, você deve:",
              options: [
                {
                  id: "a",
                  text: "Ouvir, pedir desculpas e buscar solução.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Culpar outro setor.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m4l5",
          title: "Quiz: Registro das informações",
          type: "quiz",
          questions: [
            {
              id: "m4l5q1",
              text: "Depois de falar com um cliente, é importante:",
              options: [
                {
                  id: "a",
                  text: "Registrar pontos importantes da conversa.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Confiar só na memória.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
    // --- MÓDULO 5 ---
    {
      id: "m5",
      title: "Comunicação para o Futuro",
      lessons: [
        {
          id: "m5l1",
          title: "Comunicação em entrevistas",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Dicas de como se comunicar bem em entrevistas de emprego.",
        },
        {
          id: "m5l2",
          title: "Networking e carreira",
          type: "video",
          youtubeId: "dQw4w9WgXcQ",
          description:
            "Como construir uma rede de contatos com boa comunicação.",
        },
        {
          id: "m5l3",
          title: "Quiz: Entrevistas",
          type: "quiz",
          questions: [
            {
              id: "m5l3q1",
              text: "Em uma entrevista, você deve:",
              options: [
                {
                  id: "a",
                  text: "Chegar no horário, ouvir e responder com clareza.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Responder com monossílabos.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m5l4",
          title: "Quiz: Rede de contatos",
          type: "quiz",
          questions: [
            {
              id: "m5l4q1",
              text: "Networking é:",
              options: [
                {
                  id: "a",
                  text: "Construir relacionamentos de forma genuína.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Só adicionar pessoas nas redes sociais.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          id: "m5l5",
          title: "Quiz: Plano de desenvolvimento",
          type: "quiz",
          questions: [
            {
              id: "m5l5q1",
              text: "Para evoluir na comunicação profissional, é importante:",
              options: [
                {
                  id: "a",
                  text: "Buscar feedback e praticar constantemente.",
                  isCorrect: true,
                },
                {
                  id: "b",
                  text: "Esperar que tudo aconteça naturalmente.",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

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

const TrailScreen: React.FC<Props> = ({ navigation }) => {
  const trail = useMemo(() => communicationTrail, []);

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(
    {}
  );
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(
    {}
  );
  const [quizResults, setQuizResults] = useState<Record<string, boolean>>({});

  const currentModule = trail.modules[currentModuleIndex];
  const currentLesson = currentModule.lessons[currentLessonIndex];

  const isLessonCompleted = (lessonId: string) => !!completedLessons[lessonId];

  const markLessonCompleted = (lessonId: string) => {
    setCompletedLessons((prev) => ({ ...prev, [lessonId]: true }));
  };

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
    markLessonCompleted(currentLesson.id);

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
                    markLessonCompleted(currentLesson.id);
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
