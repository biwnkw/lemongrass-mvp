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

export default function LemonScore() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/lemon.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.headerSpace} />
        </View>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.kicker}>LOTE LG-2048</Text>

          <Text style={styles.title}>
            seu lote já tem{"\n"}
            <Text style={styles.titleItalic}>uma história.</Text>
          </Text>

          <Text style={styles.description}>
            analisamos as informações da produção para gerar seu indicador de
            transparência e rastreabilidade.
          </Text>
        </View>

        {/* SCORE PRINCIPAL */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <View>
              <Text style={styles.scoreKicker}>LEMON SCORE</Text>
              <Text style={styles.scoreProduct}>morango</Text>
            </View>

            <View style={styles.verified}>
              <View style={styles.verifiedDot} />
              <Text style={styles.verifiedText}>verificado</Text>
            </View>
          </View>

          <View style={styles.scoreArea}>
            <Text style={styles.scoreNumber}>92</Text>

            <View>
              <Text style={styles.scoreOf}>/ 100</Text>
              <Text style={styles.scoreResult}>excelente</Text>
            </View>
          </View>

          <View style={styles.scoreTrack}>
            <View style={styles.scoreFill} />
          </View>

          <Text style={styles.scoreDescription}>
            este lote apresenta alto nível de transparência sobre origem,
            práticas de cultivo e rastreabilidade.
          </Text>
        </View>

        {/* INDICADORES */}
        <Text style={styles.sectionTitle}>o que forma seu score</Text>

        <View style={styles.metrics}>
          <View style={styles.metricCard}>
            <View style={styles.metricTop}>
              <Text style={styles.metricNumber}>98</Text>
              <Text style={styles.metricIcon}>●</Text>
            </View>

            <Text style={styles.metricTitle}>origem</Text>

            <Text style={styles.metricDescription}>
              propriedade e localização identificadas.
            </Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricTop}>
              <Text style={styles.metricNumber}>94</Text>
              <Text style={styles.metricIcon}>●</Text>
            </View>

            <Text style={styles.metricTitle}>cultivo</Text>

            <Text style={styles.metricDescription}>
              práticas produtivas registradas.
            </Text>
          </View>

          <View style={styles.metricCard}>
            <View style={styles.metricTop}>
              <Text style={styles.metricNumber}>84</Text>
              <Text style={styles.metricIcon}>●</Text>
            </View>

            <Text style={styles.metricTitle}>impacto</Text>

            <Text style={styles.metricDescription}>
              indicadores ambientais do lote.
            </Text>
          </View>
        </View>

        {/* RASTREABILIDADE */}
        <View style={styles.traceCard}>
          <View style={styles.traceHeader}>
            <View>
              <Text style={styles.traceKicker}>RASTREABILIDADE</Text>
              <Text style={styles.traceTitle}>
                do campo{"\n"}até o destino.
              </Text>
            </View>

            <View style={styles.qr}>
              <View style={styles.qrRow}>
                <View style={styles.qrDark} />
                <View style={styles.qrLight} />
                <View style={styles.qrDark} />
              </View>

              <View style={styles.qrRow}>
                <View style={styles.qrLight} />
                <View style={styles.qrDark} />
                <View style={styles.qrLight} />
              </View>

              <View style={styles.qrRow}>
                <View style={styles.qrDark} />
                <View style={styles.qrDark} />
                <View style={styles.qrDark} />
              </View>
            </View>
          </View>

          <View style={styles.timeline}>
            <View style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>02 OUT 2026</Text>
                <Text style={styles.timelineTitle}>colheita registrada</Text>
                <Text style={styles.timelineText}>
                  Sítio Boa Terra · Atibaia, SP
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>02 OUT 2026</Text>
                <Text style={styles.timelineTitle}>lote verificado</Text>
                <Text style={styles.timelineText}>
                  dados de origem e cultivo validados
                </Text>
              </View>
            </View>

            <View style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDotFinal} />
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.timelineDate}>PRÓXIMA ETAPA</Text>
                <Text style={styles.timelineTitle}>conectar comprador</Text>
                <Text style={styles.timelineText}>
                  compartilhe a rastreabilidade com parceiros.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* PLANO / AQUISIÇÃO */}
        <View style={styles.upgradeCard}>
          <View style={styles.upgradeTop}>
            <View style={styles.upgradeBadge}>
              <Text style={styles.upgradeBadgeText}>PRO</Text>
            </View>

            <Text style={styles.upgradeNumber}>03</Text>
          </View>

          <Text style={styles.upgradeKicker}>
            LEVE SUA PRODUÇÃO MAIS LONGE
          </Text>

          <Text style={styles.upgradeTitle}>
            transforme dados{"\n"}
            <Text style={styles.upgradeItalic}>em oportunidade.</Text>
          </Text>

          <Text style={styles.upgradeDescription}>
            desbloqueie relatórios completos, QR Code de rastreabilidade,
            métricas avançadas e conexão com novos compradores.
          </Text>

          <TouchableOpacity
            style={styles.upgradeButton}
            activeOpacity={0.85}
            onPress={() => router.push("/planos")}
          >
            <Text style={styles.upgradeButtonText}>
              conhecer os planos
            </Text>

            <View style={styles.upgradeCircle}>
              <Text style={styles.upgradeArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* VOLTAR AO PAINEL */}
        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() => router.push("/dashboard")}
        >
          <Text style={styles.dashboardButtonText}>
            voltar ao meu painel
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          TRANSPARÊNCIA QUE CONECTA QUEM PRODUZ A QUEM ESCOLHE
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
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#D5CEBE",
    alignItems: "center",
    justifyContent: "center",
  },

  backArrow: {
    color: "#26382A",
    fontSize: 19,
  },

  logo: {
    width: 145,
    height: 48,
  },

  headerSpace: {
    width: 42,
  },

  intro: {
    marginBottom: 24,
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
    fontSize: 39,
    lineHeight: 38,
    fontWeight: "900",
    letterSpacing: -2,
  },

  titleItalic: {
    color: "#8D9664",
    fontStyle: "italic",
    fontWeight: "500",
  },

  description: {
    color: "#77766D",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 14,
    maxWidth: 325,
  },

  scoreCard: {
    backgroundColor: "#52643A",
    borderRadius: 30,
    padding: 21,
    marginBottom: 27,
  },

  scoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  scoreKicker: {
    color: "#DDF56C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  scoreProduct: {
    color: "#F7F0DF",
    fontSize: 19,
    fontWeight: "900",
    marginTop: 3,
  },

  verified: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#65764D",
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
  },

  verifiedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#DDF56C",
    marginRight: 6,
  },

  verifiedText: {
    color: "#F7F0DF",
    fontSize: 8,
    fontWeight: "800",
  },

  scoreArea: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 27,
  },

  scoreNumber: {
    color: "#F6C950",
    fontSize: 80,
    lineHeight: 80,
    fontWeight: "900",
    letterSpacing: -5,
    marginRight: 8,
  },

  scoreOf: {
    color: "#C9CEB4",
    fontSize: 11,
    fontWeight: "800",
  },

  scoreResult: {
    color: "#F7F0DF",
    fontSize: 10,
    fontWeight: "900",
    marginTop: 4,
  },

  scoreTrack: {
    height: 7,
    backgroundColor: "#71805C",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 17,
  },

  scoreFill: {
    width: "92%",
    height: "100%",
    backgroundColor: "#DDF56C",
    borderRadius: 5,
  },

  scoreDescription: {
    color: "#E8E5D7",
    fontSize: 10,
    lineHeight: 16,
    marginTop: 14,
  },

  sectionTitle: {
    color: "#26382A",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },

  metrics: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
  },

  metricCard: {
    flex: 1,
    minHeight: 125,
    backgroundColor: "#EFE8D8",
    borderRadius: 19,
    padding: 13,
  },

  metricTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  metricNumber: {
    color: "#52643A",
    fontSize: 23,
    fontWeight: "900",
  },

  metricIcon: {
    color: "#F47A3C",
    fontSize: 9,
  },

  metricTitle: {
    color: "#26382A",
    fontSize: 11,
    fontWeight: "900",
    marginTop: 8,
  },

  metricDescription: {
    color: "#807D73",
    fontSize: 8,
    lineHeight: 12,
    marginTop: 4,
  },

  traceCard: {
    backgroundColor: "#FBF7ED",
    borderWidth: 1,
    borderColor: "#DED6C6",
    borderRadius: 27,
    padding: 19,
    marginBottom: 18,
  },

  traceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },

  traceKicker: {
    color: "#F47A3C",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.4,
  },

  traceTitle: {
    color: "#26382A",
    fontSize: 24,
    lineHeight: 23,
    fontWeight: "900",
    letterSpacing: -1,
    marginTop: 4,
  },

  qr: {
    width: 64,
    height: 64,
    backgroundColor: "#F7F0DF",
    borderRadius: 12,
    padding: 8,
    justifyContent: "space-between",
  },

  qrRow: {
    flex: 1,
    flexDirection: "row",
  },

  qrDark: {
    flex: 1,
    margin: 1,
    backgroundColor: "#26382A",
  },

  qrLight: {
    flex: 1,
    margin: 1,
    backgroundColor: "#F7F0DF",
  },

  timeline: {
    marginTop: 2,
  },

  timelineItem: {
    flexDirection: "row",
    minHeight: 66,
  },

  timelineLeft: {
    width: 26,
    alignItems: "center",
  },

  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#52643A",
  },

  timelineDotFinal: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F6C950",
    borderWidth: 2,
    borderColor: "#52643A",
  },

  timelineLine: {
    width: 1,
    flex: 1,
    backgroundColor: "#C8C1B1",
    marginTop: 4,
  },

  timelineContent: {
    flex: 1,
    paddingLeft: 9,
    paddingBottom: 15,
  },

  timelineDate: {
    color: "#99958B",
    fontSize: 6,
    fontWeight: "900",
    letterSpacing: 1,
  },

  timelineTitle: {
    color: "#26382A",
    fontSize: 12,
    fontWeight: "900",
    marginTop: 2,
  },

  timelineText: {
    color: "#807D73",
    fontSize: 8,
    marginTop: 2,
  },

  upgradeCard: {
    backgroundColor: "#F39BC2",
    borderRadius: 28,
    padding: 20,
    marginBottom: 16,
  },

  upgradeTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  upgradeBadge: {
    backgroundColor: "#26382A",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
  },

  upgradeBadgeText: {
    color: "#F7F0DF",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
  },

  upgradeNumber: {
    color: "#C56C96",
    fontSize: 10,
    fontWeight: "900",
  },

  upgradeKicker: {
    color: "#26382A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.4,
    marginBottom: 7,
  },

  upgradeTitle: {
    color: "#26382A",
    fontSize: 30,
    lineHeight: 29,
    fontWeight: "900",
    letterSpacing: -1.5,
  },

  upgradeItalic: {
    fontStyle: "italic",
    fontWeight: "500",
  },

  upgradeDescription: {
    color: "#57414B",
    fontSize: 10,
    lineHeight: 16,
    marginTop: 12,
    marginBottom: 20,
    maxWidth: 285,
  },

  upgradeButton: {
    backgroundColor: "#F7F0DF",
    borderRadius: 23,
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  upgradeButtonText: {
    color: "#26382A",
    fontSize: 12,
    fontWeight: "900",
  },

  upgradeCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#52643A",
    alignItems: "center",
    justifyContent: "center",
  },

  upgradeArrow: {
    color: "#F7F0DF",
    fontSize: 18,
  },

  dashboardButton: {
    alignItems: "center",
    paddingVertical: 14,
  },

  dashboardButtonText: {
    color: "#52643A",
    fontSize: 10,
    fontWeight: "900",
    textDecorationLine: "underline",
  },

  footer: {
    color: "#99968D",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 8,
  },
});