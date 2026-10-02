import { router } from "expo-router";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Cadastro() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* VOLTAR */}
        <TouchableOpacity
          style={styles.back}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← voltar</Text>
        </TouchableOpacity>

        {/* LOGO */}
        <Image
          source={require("../../assets/images/lemon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.kicker}>
            COMECE SUA JORNADA
          </Text>

          <Text style={styles.title}>
            vamos cultivar{"\n"}
            <Text style={styles.titleItalic}>
              conexões.
            </Text>
          </Text>

          <Text style={styles.description}>
            crie sua conta para acompanhar produtos, registrar lotes
            e compartilhar a história por trás de cada alimento.
          </Text>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>
              NOME
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Marina Oliveira"
              placeholderTextColor="#9A998F"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              E-MAIL
            </Text>

            <TextInput
              style={styles.input}
              placeholder="marina@fazendaaurora.com"
              placeholderTextColor="#9A998F"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              SENHA
            </Text>

            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#9A998F"
              secureTextEntry
            />
          </View>

          {/* TIPO DE PERFIL */}
          <View style={styles.field}>
            <Text style={styles.label}>
              VOCÊ É...
            </Text>

            <View style={styles.options}>
              <TouchableOpacity style={styles.optionActive}>
                <Text style={styles.optionActiveText}>
                  produtor
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>
                  comprador
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* CTA */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={() => router.push("/onboarding")}
          >
            <Text style={styles.buttonText}>
              criar minha conta
            </Text>

            <View style={styles.buttonCircle}>
              <Text style={styles.buttonArrow}>
                →
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/login")}
          >
            <Text style={styles.login}>
              já tem uma conta?{" "}
              <Text style={styles.loginStrong}>
                entrar
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* NOTA */}
        <View style={styles.note}>
          <Text style={styles.noteNumber}>
            01
          </Text>

          <Text style={styles.noteText}>
            sua origem importa.{"\n"}
            <Text style={styles.noteStrong}>
              sua história também.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F0DF",
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 35,
  },

  back: {
    alignSelf: "flex-start",
    marginBottom: 18,
  },

  backText: {
    color: "#52643A",
    fontSize: 11,
    fontWeight: "800",
  },

  /* NOVA LOGO */

  logo: {
    width: 165,
    height: 58,
    alignSelf: "flex-start",
  },

  intro: {
    marginTop: 28,
    marginBottom: 34,
  },

  kicker: {
    color: "#F47A3C",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 12,
  },

  title: {
    color: "#26382A",
    fontSize: 46,
    lineHeight: 44,
    fontWeight: "900",
    letterSpacing: -2.5,
  },

  titleItalic: {
    color: "#8D9664",
    fontStyle: "italic",
    fontWeight: "500",
  },

  description: {
    color: "#77766D",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 18,
    maxWidth: 320,
  },

  form: {
    width: "100%",
  },

  field: {
    marginBottom: 18,
  },

  label: {
    color: "#52643A",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  input: {
    height: 55,
    borderWidth: 1.5,
    borderColor: "#C8C3B4",
    borderRadius: 17,
    paddingHorizontal: 16,
    color: "#26382A",
    fontSize: 13,
    backgroundColor: "#FBF7ED",
  },

  options: {
    flexDirection: "row",
    gap: 10,
  },

  optionActive: {
    flex: 1,
    backgroundColor: "#52643A",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },

  option: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#52643A",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },

  optionActiveText: {
    color: "#F7F0DF",
    fontSize: 12,
    fontWeight: "800",
  },

  optionText: {
    color: "#52643A",
    fontSize: 12,
    fontWeight: "800",
  },

  button: {
    backgroundColor: "#52643A",
    borderRadius: 24,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 12,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonText: {
    color: "#F7F0DF",
    fontSize: 15,
    fontWeight: "900",
  },

  buttonCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F6C950",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonArrow: {
    color: "#26382A",
    fontSize: 20,
  },

  login: {
    color: "#8B897F",
    fontSize: 11,
    textAlign: "center",
    marginTop: 19,
  },

  loginStrong: {
    color: "#26382A",
    fontWeight: "900",
    textDecorationLine: "underline",
  },

  note: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 38,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#D9D3C4",
  },

  noteNumber: {
    color: "#F47A3C",
    fontSize: 10,
    fontWeight: "900",
    marginRight: 15,
  },

  noteText: {
    color: "#8A887E",
    fontSize: 12,
    lineHeight: 18,
  },

  noteStrong: {
    color: "#26382A",
    fontWeight: "900",
  },
});