import { router } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <View style={styles.brandArea}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>L</Text>
            </View>

            <Text style={styles.brand}>
              lem<Text style={styles.brandHighlight}>ON</Text>grass
            </Text>
          </View>

          <Text style={styles.title}>
            bom ter você{"\n"}
            <Text style={styles.accent}>de volta.</Text>
          </Text>

          <Text style={styles.subtitle}>
            Acesse sua conta para acompanhar sua produção e rastreabilidade.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>e-mail</Text>

            <TextInput
              style={styles.input}
              placeholder="voce@email.com"
              placeholderTextColor="#999F99"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>senha</Text>

            <TextInput
              style={styles.input}
              placeholder="sua senha"
              placeholderTextColor="#999F99"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity>
              <Text style={styles.forgot}>esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.replace("/dashboard")}
          >
            <Text style={styles.primaryButtonText}>entrar</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.replace("/cadastro")}>
            <Text style={styles.register}>
              ainda não tem conta?{" "}
              <Text style={styles.registerBold}>criar conta</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F2E8",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 30,
    justifyContent: "space-between",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D9D8CE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },

  backText: {
    color: "#173F35",
    fontSize: 22,
    fontWeight: "600",
  },

  brandArea: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 38,
  },

  logo: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#DDE94A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
    transform: [{ rotate: "-7deg" }],
  },

  logoText: {
    color: "#173F35",
    fontSize: 21,
    fontWeight: "900",
  },

  brand: {
    color: "#173F35",
    fontSize: 23,
    fontWeight: "800",
  },

  brandHighlight: {
    color: "#7B913D",
  },

  title: {
    color: "#173F35",
    fontSize: 38,
    lineHeight: 41,
    fontWeight: "800",
    letterSpacing: -1.5,
  },

  accent: {
    color: "#789044",
  },

  subtitle: {
    color: "#6F7771",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 15,
    marginBottom: 34,
  },

  form: {
    gap: 9,
  },

  label: {
    color: "#173F35",
    fontSize: 12,
    fontWeight: "800",
    marginTop: 5,
  },

  input: {
    height: 57,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1E0D7",
    paddingHorizontal: 17,
    color: "#173F35",
    fontSize: 14,
    marginBottom: 7,
  },

  forgot: {
    alignSelf: "flex-end",
    color: "#71853F",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 2,
  },

  primaryButton: {
    height: 59,
    borderRadius: 20,
    backgroundColor: "#173F35",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#F5F2E8",
    fontSize: 16,
    fontWeight: "800",
  },

  arrow: {
    color: "#DDE94A",
    fontSize: 22,
    fontWeight: "800",
    marginLeft: 12,
  },

  register: {
    color: "#777E79",
    textAlign: "center",
    fontSize: 12,
    marginTop: 18,
  },

  registerBold: {
    color: "#173F35",
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});