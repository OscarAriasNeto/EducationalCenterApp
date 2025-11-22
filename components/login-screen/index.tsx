import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const PRIMARY = "#6C3FF0";

// LOGIN BASE DE TESTE
const TEST_EMAIL = "teste@educationalcenter.com";
const TEST_PASSWORD = "123456";

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState(TEST_EMAIL); // já preenche o teste
  const [senha, setSenha] = useState(TEST_PASSWORD);

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha e-mail e senha para continuar.");
      return;
    }

    if (email !== TEST_EMAIL || senha !== TEST_PASSWORD) {
      Alert.alert(
        "Login inválido",
        `E-mail ou senha incorretos.\n\nUse para testar:\nE-mail: ${TEST_EMAIL}\nSenha: ${TEST_PASSWORD}`
      );
      return;
    }

    // LOGIN VÁLIDO → VAI PARA HOME
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        {/* Logo / título */}
        <View style={styles.header}>
          <View style={styles.logoCircle}>
            <View style={styles.logoInnerCircle} />
          </View>

          <View>
            <Text style={styles.appTitleMain}>Educational</Text>
            <Text style={styles.appTitleSub}>Center</Text>
          </View>
        </View>

        {/* Título da tela */}
        <Text style={styles.screenTitle}>Bem-vindo(a)</Text>
        <Text style={styles.screenSubtitle}>
          Acesse sua conta para continuar.
        </Text>

        {/* Campos de login */}
        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.8}
            onPress={handleLogin}
          >
            <Text style={styles.primaryButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.secondaryButtonText}>
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
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
  appTitleMain: {
    fontSize: 22,
    fontWeight: "600",
  },
  appTitleSub: {
    fontSize: 22,
    fontWeight: "600",
    color: PRIMARY,
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
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: PRIMARY,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
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
