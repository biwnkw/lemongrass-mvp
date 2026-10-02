import { router } from "expo-router";

import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Sucesso() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* LOGO */}
        <Image
          source={require("../../assets/images/lemon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* SUCESSO */}
        <View style={styles.successArea}>
          <View style={styles.successCircle}>
            <Text style={styles.successCheck}>✓</Text>
          </View>

          <Text style={styles.kicker}>ASSINATURA CONFIRMADA</Text>

          <Text style={styles.title}>
            sua próxima{"\n"}
            <Text style={styles.titleItalic}>colheita começa aqui.</Text>
          </Text>

          <Text style={styles.description}>
            pronto! seu plano Colheita está ativo e os novos recursos da
            lemONgrass já estão disponíveis.
          </Text>
        </View>

        {/* PLANO ATIVO */}
        <View style={styles.planCard}>
          <View style={styles.planTop}>
            <View>
              <Text style={styles.planKicker}>PLANO ATIVO</Text>
              <Text style={styles.planName}>Colheita</Text>
            </View>

            <View style={styles.activeBadge}>
              <View style={styles.activeDot} />
              <Text style={styles.activeText}>ativo</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceRow}>
            <View>
              <Text style={styles.priceLabel}>ASSINATURA</Text>
              <Text style={styles.price}>
                R$ 29,90
                <Text style={styles.month}> / mês</Text>
              </Text>
            </View>

            <Text style={styles.planNumber}>03</Text>
          </View>
        </View>

        {/* RECURSOS */}
        <Text style={styles.sectionTitle}>
          recursos desbloqueados
        </Text>

        <View style={styles.resources}>
          <View style={styles.resourceCard}>
            <View style={styles.resourceIcon}>
              <Text style={styles.resourceIconText}>01</Text>
            </View>

            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                QR Code
              </Text>

              <Text style={styles.resourceText}>
                compartilhe a rastreabilidade dos seus lotes.
              </Text>
            </View>

            <Text style={styles.resourceCheck}>✓</Text>
          </View>

          <View style={styles.resourceCard}>
            <View style={styles.resourceIcon}>
              <Text style={styles.resourceIconText}>02</Text>
            </View>

            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                relatórios
              </Text>

              <Text style={styles.resourceText}>
                acompanhe dados e métricas da sua produção.
              </Text>
            </View>

            <Text style={styles.resourceCheck}>✓</Text>
          </View>

          <View style={styles.resourceCard}>
            <View style={styles.resourceIcon}>
              <Text style={styles.resourceIconText}>03</Text>
            </View>

            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>
                compradores
              </Text>

              <Text style={styles.resourceText}>
                amplie a conexão da produção com novos parceiros.
              </Text>
            </View>

            <Text style={styles.resourceCheck}>✓</Text>
          </View>
        </View>

        {/* LOTE */}
        <View style={styles.lotCard}>
          <View style={styles.lotHeader}>
            <View>
              <Text style={styles.lotKicker}>
                SUA PRODUÇÃO
              </Text>

              <Text style={styles.lotTitle}>
                morango
              </Text>
            </View>

            <View style={styles.score}>
              <Text style={styles.scoreNumber}>92</Text>
              <Text style={styles.scoreText}>score</Text>
            </View>
          </View>

          <View style={styles.lotInfo}>
            <View>
              <Text style={styles.lotLabel}>LOTE</Text>
              <Text style={styles.lotValue}>LG-2048</Text>
            </View>

            <View style={styles.lotSeparator} />

            <View>
              <Text style={styles.lotLabel}>ORIGEM</Text>
              <Text style={styles.lotValue}>Atibaia, SP</Text>
            </View>

            <View style={styles.lotSeparator} />

            <View>
              <Text style={styles.lotLabel}>STATUS</Text>
              <Text style={styles.lotValue}>verificado</Text>
            </View>
          </View>
        </View>

        {/* MENSAGEM */}
        <View style={styles.messageCard}>
          <Text style={styles.messageSymbol}>✦</Text>

          <View style={styles.messageContent}>
            <Text style={styles.messageKicker}>
              TUDO PRONTO
            </Text>

            <Text style={styles.messageText}>
              seu lote continua salvo e agora pode utilizar os recursos
              liberados pelo plano Colheita.
            </Text>
          </View>
        </View>

        {/* FINALIZAR FLUXO */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.replace("/dashboard")}
        >
          <View>
            <Text style={styles.buttonSmall}>
              CONTINUAR
            </Text>

            <Text style={styles.buttonText}>
              voltar ao meu painel
            </Text>
          </View>

          <View style={styles.buttonCircle}>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footer}>
          CULTIVADO COM CUIDADO · CONECTADO COM PROPÓSITO
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F7F0DF",
  },

  page: {
    flex: 1,
    backgroundColor: "#F7F0DF",
  },

  container: {
    paddingHorizontal: 21,
    paddingTop: 20,
    paddingBottom: 38,
  },

  logo: {
    width: 155,
    height: 52,
    alignSelf: "center",
    marginBottom: 28,
  },

  successArea: {
    alignItems: "center",
    marginBottom: 28,
  },

  successCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#F6C950",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  successCheck: {
    color: "#26382A",
    fontSize: 28,
    fontWeight: "900",
  },

  kicker: {
    color: "#F47A3C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.7,
    marginBottom: 9,
  },

  title: {
    color: "#26382A",
    fontSize: 37,
    lineHeight: 37,
    fontWeight: "900",
    letterSpacing: -2,
    textAlign: "center",
  },

  titleItalic: {
    color: "#8D9664",
    fontStyle: "italic",
    fontWeight: "500",
  },

  description: {
    color: "#77766D",
    fontSize: 11,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 14,
    maxWidth: 310,
  },

  planCard: {
    backgroundColor: "#52643A",
    borderRadius: 27,
    padding: 20,
    marginBottom: 27,
  },

  planTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  planKicker: {
    color: "#DDF56C",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.4,
  },

  planName: {
    color: "#F7F0DF",
    fontSize: 27,
    fontWeight: "900",
    marginTop: 3,
  },

  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#65764D",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 11,
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#DDF56C",
    marginRight: 6,
  },

  activeText: {
    color: "#F7F0DF",
    fontSize: 8,
    fontWeight: "900",
  },

  divider: {
    height: 1,
    backgroundColor: "#71805C",
    marginVertical: 17,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  priceLabel: {
    color: "#BFC7A8",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.2,
  },

  price: {
    color: "#F7F0DF",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 3,
  },

  month: {
    color: "#C9CEB4",
    fontSize: 8,
    fontWeight: "500",
  },

  planNumber: {
    color: "#8E9B77",
    fontSize: 13,
    fontWeight: "900",
  },

  sectionTitle: {
    color: "#26382A",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },

  resources: {
    gap: 9,
    marginBottom: 26,
  },

  resourceCard: {
    backgroundColor: "#FBF7ED",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#DED6C6",
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
  },

  resourceIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EFE8D8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  resourceIconText: {
    color: "#52643A",
    fontSize: 8,
    fontWeight: "900",
  },

  resourceContent: {
    flex: 1,
  },

  resourceTitle: {
    color: "#26382A",
    fontSize: 11,
    fontWeight: "900",
  },

  resourceText: {
    color: "#807D73",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 2,
  },

  resourceCheck: {
    color: "#52643A",
    fontSize: 13,
    fontWeight: "900",
    marginLeft: 8,
  },

  lotCard: {
    backgroundColor: "#EFE8D8",
    borderRadius: 25,
    padding: 18,
    marginBottom: 15,
  },

  lotHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  lotKicker: {
    color: "#F47A3C",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  lotTitle: {
    color: "#26382A",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 2,
  },

  score: {
    alignItems: "center",
  },

  scoreNumber: {
    color: "#52643A",
    fontSize: 23,
    fontWeight: "900",
  },

  scoreText: {
    color: "#8C897F",
    fontSize: 7,
    fontWeight: "800",
  },

  lotInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lotLabel: {
    color: "#99958B",
    fontSize: 6,
    fontWeight: "900",
    letterSpacing: 1,
  },

  lotValue: {
    color: "#26382A",
    fontSize: 9,
    fontWeight: "800",
    marginTop: 3,
  },

  lotSeparator: {
    width: 1,
    height: 28,
    backgroundColor: "#D3CBBB",
  },

  messageCard: {
    backgroundColor: "#F39BC2",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
  },

  messageSymbol: {
    color: "#26382A",
    fontSize: 23,
    marginRight: 13,
  },

  messageContent: {
    flex: 1,
  },

  messageKicker: {
    color: "#26382A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 3,
  },

  messageText: {
    color: "#59414D",
    fontSize: 9,
    lineHeight: 14,
  },

  button: {
    backgroundColor: "#52643A",
    borderRadius: 25,
    paddingVertical: 11,
    paddingLeft: 19,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonSmall: {
    color: "#BFC7A8",
    fontSize: 6,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 3,
  },

  buttonText: {
    color: "#F7F0DF",
    fontSize: 14,
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

  footer: {
    color: "#99968D",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 20,
  },
});