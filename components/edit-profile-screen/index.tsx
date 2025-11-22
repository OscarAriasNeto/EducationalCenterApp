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
import { useUser } from "../user-context";

const PRIMARY = "#6C3FF0";

type Props = {
  navigation: {
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

const isValidGmail = (email: string) => {
  const regex = /^[^\s@]+@gmail\.com$/i;
  return regex.test(email);
};

const EditProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { profile, updateProfile } = useUser();

  const [nome, setNome] = useState(profile.nome);
  const [idade, setIdade] = useState(profile.idade);
  const [email, setEmail] = useState(profile.email);
  const [cargo, setCargo] = useState(profile.cargo);
  const [objetivo, setObjetivo] = useState(profile.objetivo);

  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSave = () => {
    const newErrors: FieldErrors = {};

    if (!nome.trim()) {
      newErrors.nome = "Preencha o nome.";
    }

    if (!idade.trim()) {
      newErrors.idade = "Preencha a idade.";
    } else {
      const idadeNumber = Number(idade);
      if (Number.isNaN(idadeNumber) || idadeNumber <= 0) {
        newErrors.idade = "Informe uma idade válida (apenas números).";
      }
    }

    if (!email.trim()) {
      newErrors.email = "Preencha o e-mail.";
    } else if (!isValidGmail(email)) {
      newErrors.email = "Use um e-mail válido no formato nome@gmail.com.";
    }

    if (!cargo.trim()) {
      newErrors.cargo = "Informe seu cargo.";
    }

    if (!objetivo.trim()) {
      newErrors.objetivo = "Descreva seu objetivo.";
    } else if (objetivo.trim().length < 10) {
      newErrors.objetivo =
        "Escreva um pouco mais sobre seu objetivo (mín. 10 caracteres).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    updateProfile({
      nome: nome.trim(),
      idade: idade.trim(),
      email: email.trim(),
      cargo: cargo.trim(),
      objetivo: objetivo.trim(),
    });

    Alert.alert("Perfil atualizado", "Suas informações foram salvas com sucesso.");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* topo com setinha de voltar */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Editar perfil</Text>
        </View>

        <Text style={styles.subtitle}>
          Atualize suas informações pessoais do Educational Center.
        </Text>

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
            multiline
            numberOfLines={4}
            value={objetivo}
            onChangeText={(text) => {
              setObjetivo(text);
              if (errors.objetivo)
                setErrors((e) => ({ ...e, objetivo: undefined }));
            }}
          />
          {errors.objetivo && (
            <Text style={styles.errorText}>{errors.objetivo}</Text>
          )}

          <TouchableOpacity
            style={styles.saveButton}
            activeOpacity={0.8}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Salvar alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

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
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  backIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 16,
  },
  form: {
    marginTop: 4,
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
    minHeight: 90,
    textAlignVertical: "top",
  },
  inputError: {
    borderColor: "#EF4444",
  },
  errorText: {
    fontSize: 12,
    color: "#EF4444",
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});
