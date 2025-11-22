import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
};

type FieldErrors = {
  nome?: string;
  idade?: string;
  email?: string;
  cargo?: string;
  objetivo?: string;
};

// valida se é um email @gmail.com
const isValidGmail = (email: string) => {
  const regex = /^[^\s@]+@gmail\.com$/i;
  return regex.test(email);
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [objetivo, setObjetivo] = useState("");

  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSignUp = () => {
    const newErrors: FieldErrors = {};

    // NOME
    if (!nome.trim()) {
      newErrors.nome = "Preencha o nome.";
    }

    // IDADE
    if (!idade.trim()) {
      newErrors.idade = "Preencha a idade.";
    } else {
      const idadeNumber = Number(idade);
      if (Number.isNaN(idadeNumber) || idadeNumber <= 0) {
        newErrors.idade = "Informe uma idade válida (apenas números).";
      }
    }

    // EMAIL
    if (!email.trim()) {
      newErrors.email = "Preencha o e-mail.";
    } else if (!isValidGmail(email)) {
      newErrors.email = "Use um e-mail válido no formato nome@gmail.com.";
    }

    // CARGO
    if (!cargo.trim()) {
      newErrors.cargo = "Informe seu cargo (ex: Jovem Aprendiz).";
    }

    // OBJETIVO
    if (!objetivo.trim()) {
      newErrors.objetivo = "Descreva seu objetivo.";
    } else if (objetivo.trim().length < 10) {
      newErrors.objetivo =
        "Escreva um pouco mais sobre seu objetivo (mín. 10 caracteres).";
    }

    // Atualiza erros visuais
    setErrors(newErrors);

    // Se tiver qualquer erro, não continua
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Tudo OK → limpa erros, mostra alerta (opcional) e vai pra Home
    setErrors({});
    Alert.alert("Conta criada!", "Bem-vindo(a) ao Educational Center 👋");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* botão voltar simples */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Criar conta</Text>
        <Text style={styles.screenSubtitle}>
          Preencha seus dados para começar a usar o Educational Center.
        </Text>

        {/* Formulário */}
        <View style={styles.form}>
          {/* NOME */}
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={[styles.input, errors.nome && styles.inputError]}
            placeholder="Seu nome completo"
            placeholderTextColor="#9CA3AF"
            value={nome}
            onChangeText={(text) => {
              setNome(text);
              if (errors.nome) setErrors((e) => ({ ...e, nome: undefined }));
            }}
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

          {/* IDADE */}
          <Text style={styles.label}>Idade</Text>
          <TextInput
            style={[styles.input, errors.idade && styles.inputError]}
            placeholder="Ex: 18"
            placeholderTextColor="#9CA3AF"
            keyboardType="number-pad"
            value={idade}
            onChangeText={(text) => {
              setIdade(text);
              if (errors.idade) setErrors((e) => ({ ...e, idade: undefined }));
            }}
          />
          {errors.idade && <Text style={styles.errorText}>{errors.idade}</Text>}

          {/* EMAIL */}
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="seuemail@gmail.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
            }}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* CARGO */}
          <Text style={styles.label}>Cargo</Text>
          <TextInput
            style={[styles.input, errors.cargo && styles.inputError]}
            placeholder="Ex: Jovem Aprendiz, Estagiário..."
            placeholderTextColor="#9CA3AF"
            value={cargo}
            onChangeText={(text) => {
              setCargo(text);
              if (errors.cargo) setErrors((e) => ({ ...e, cargo: undefined }));
            }}
          />
          {errors.cargo && <Text style={styles.errorText}>{errors.cargo}</Text>}

          {/* OBJETIVO */}
          <Text style={styles.label}>Objetivo</Text>
          <TextInput
            style={[
              styles.input,
              styles.inputMultiline,
              errors.objetivo && styles.inputError,
            ]}
            placeholder="Ex: Aprender mais sobre o mercado de trabalho, evoluir na carreira..."
            placeholderTextColor="#9CA3AF"
            value={objetivo}
            onChangeText={(text) => {
              setObjetivo(text);
              if (errors.objetivo)
                setErrors((e) => ({ ...e, objetivo: undefined }));
            }}
            multiline
            numberOfLines={4}
          />
          {errors.objetivo && (
            <Text style={styles.errorText}>{errors.objetivo}</Text>
          )}

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={handleSignUp}
          >
            <Text style={styles.primaryButtonText}>Criar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.secondaryButtonText}>Já tenho conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
  backIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  screenSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },
  form: {
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 4,
  },
  inputMultiline: {
    textAlignVertical: "top",
    minHeight: 90,
  },
  inputError: {
    borderColor: "#EF4444",
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginBottom: 8,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryButton: {
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  secondaryButtonText: {
    color: PRIMARY,
    fontSize: 14,
    fontWeight: "500",
  },
});
