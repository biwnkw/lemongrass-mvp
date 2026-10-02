import { router } from "expo-router";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* LOGO */}
        <Image
          source={require("../../assets/images/lemon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* CONTEÚDO */}
        <View style={styles.content}>
          <Text style={styles.number}>01 / 01</Text>

          <Text style={styles.kicker}>
            BEM-VINDA À LEMONGRASS
          </Text>

          <Text style={styles.title}>
            cada alimento{"\n"}
            <Text style={styles.titleItalic}>
              tem uma história.
            </Text>
          </Text>

          <Text style={styles.description}>
            registre seus produtos, acompanhe a origem dos lotes e transforme
            informações da produção em transparência para quem compra.
          </Text>

          {/* ETAPAS */}
          <View style={styles.steps}>
            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  cadastre sua produção
                </Text>

                <Text style={styles.stepText}>
                  registre alimentos e informações do lote.
                </Text>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  gere rastreabilidade
                </Text>

                <Text style={styles.stepText}>
                  organize origem, cultivo e impacto da produção.
                </Text>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.step}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>

              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>
                  compartilhe confiança
                </Text>

                <Text style={styles.stepText}>
                  apresente informações verificadas para compradores.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* BOTÃO */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.buttonText}>
            ir para meu painel
          </Text>

          <View style={styles.buttonCircle}>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F0DF",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 25,
  },

  logo: {
    width: 165,
    height: 58,
    alignSelf: "flex-start",
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  number: {
    color: "#8D9664",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 20,
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
    fontSize: 43,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -2.2,
  },

  titleItalic: {
    color: "#8D9664",
    fontWeight: "500",
    fontStyle: "italic",
  },

  description: {
    color: "#77766D",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 18,
    marginBottom: 34,
    maxWidth: 330,
  },

  steps: {
    paddingLeft: 4,
  },

  step: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#52643A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  stepNumberText: {
    color: "#F7F0DF",
    fontSize: 12,
    fontWeight: "900",
  },

  stepContent: {
    flex: 1,
  },

  stepTitle: {
    color: "#26382A",
    fontSize: 13,
    fontWeight: "900",
  },

  stepText: {
    color: "#858278",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 2,
  },

  line: {
    width: 1,
    height: 18,
    backgroundColor: "#C8C3B4",
    marginLeft: 18,
  },

  button: {
    backgroundColor: "#52643A",
    borderRadius: 25,
    paddingVertical: 13,
    paddingLeft: 20,
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#F7F0DF",
    fontSize: 15,
    fontWeight: "900",
  },

  buttonCircle: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#F6C950",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonArrow: {
    color: "#26382A",
    fontSize: 20,
  },
});