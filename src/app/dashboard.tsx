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

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/lemon.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MO</Text>
          </View>
        </View>

        {/* BOAS-VINDAS */}
        <View style={styles.intro}>
          <Text style={styles.kicker}>MEU PAINEL</Text>

          <Text style={styles.title}>
            olá, Marina.
          </Text>

          <Text style={styles.subtitle}>
            acompanhe sua produção e transforme cada lote em uma história
            rastreável.
          </Text>
        </View>

        {/* RESUMO */}
        <View style={styles.summaryRow}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>03</Text>
            <Text style={styles.summaryLabel}>lotes ativos</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>92</Text>
            <Text style={styles.summaryLabel}>lemon score</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>02</Text>
            <Text style={styles.summaryLabel}>compradores</Text>
          </View>
        </View>

        {/* NOVO LOTE */}
        <TouchableOpacity
          style={styles.newLotCard}
          activeOpacity={0.85}
          onPress={() => router.push("/novo-lote")}
        >
          <View style={styles.newLotTop}>
            <View style={styles.plusCircle}>
              <Text style={styles.plus}>+</Text>
            </View>

            <Text style={styles.newLotNumber}>01</Text>
          </View>

          <View>
            <Text style={styles.newLotKicker}>
              NOVA PRODUÇÃO
            </Text>

            <Text style={styles.newLotTitle}>
              cadastrar{"\n"}novo lote
            </Text>

            <Text style={styles.newLotDescription}>
              registre origem, cultivo e informações da sua produção.
            </Text>
          </View>

          <View style={styles.newLotBottom}>
            <Text style={styles.newLotLink}>
              começar cadastro
            </Text>

            <Text style={styles.newLotArrow}>→</Text>
          </View>
        </TouchableOpacity>

        {/* PRODUÇÃO RECENTE */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            produção recente
          </Text>

          <Text style={styles.sectionLink}>
            ver tudo
          </Text>
        </View>

        <View style={styles.productCard}>
          <View style={styles.productColor}>
            <Text style={styles.productEmoji}>🍓</Text>
          </View>

          <View style={styles.productInfo}>
            <Text style={styles.productOverline}>
              LOTE LG-2048
            </Text>

            <Text style={styles.productName}>
              morango
            </Text>

            <Text style={styles.productPlace}>
              Sítio Boa Terra · Atibaia, SP
            </Text>
          </View>

          <View style={styles.productScore}>
            <Text style={styles.productScoreNumber}>
              92
            </Text>

            <Text style={styles.productScoreText}>
              score
            </Text>
          </View>
        </View>

        {/* RASTREABILIDADE */}
        <View style={styles.traceCard}>
          <View style={styles.traceHeader}>
            <Text style={styles.traceKicker}>
              RASTREABILIDADE
            </Text>

            <View style={styles.status}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>ativo</Text>
            </View>
          </View>

          <Text style={styles.traceTitle}>
            sua produção,{"\n"}
            <Text style={styles.traceItalic}>
              do campo à mesa.
            </Text>
          </Text>

          <View style={styles.traceSteps}>
            <View style={styles.traceItem}>
              <View style={styles.traceNumber}>
                <Text style={styles.traceNumberText}>1</Text>
              </View>
              <Text style={styles.traceText}>origem</Text>
            </View>

            <View style={styles.traceLine} />

            <View style={styles.traceItem}>
              <View style={styles.traceNumber}>
                <Text style={styles.traceNumberText}>2</Text>
              </View>
              <Text style={styles.traceText}>cultivo</Text>
            </View>

            <View style={styles.traceLine} />

            <View style={styles.traceItem}>
              <View style={styles.traceNumber}>
                <Text style={styles.traceNumberText}>3</Text>
              </View>
              <Text style={styles.traceText}>destino</Text>
            </View>
          </View>
        </View>

        {/* PLANO */}
        <TouchableOpacity
          style={styles.planCard}
          activeOpacity={0.85}
          onPress={() => router.push("/planos")}
        >
          <View>
            <Text style={styles.planKicker}>SEU PLANO</Text>

            <Text style={styles.planTitle}>Raiz</Text>

            <Text style={styles.planDescription}>
              descubra recursos para ampliar sua rastreabilidade.
            </Text>
          </View>

          <View style={styles.planArrowCircle}>
            <Text style={styles.planArrow}>↗</Text>
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
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  logo: {
    width: 155,
    height: 52,
  },

  avatar: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: "#52643A",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#F7F0DF",
    fontSize: 10,
    fontWeight: "900",
  },

  intro: {
    marginBottom: 24,
  },

  kicker: {
    color: "#F47A3C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.7,
    marginBottom: 7,
  },

  title: {
    color: "#26382A",
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: -1.8,
  },

  subtitle: {
    color: "#77766D",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
    maxWidth: 310,
  },

  summaryRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "#EFE8D8",
    borderRadius: 18,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },

  summaryNumber: {
    color: "#26382A",
    fontSize: 23,
    fontWeight: "900",
  },

  summaryLabel: {
    color: "#7E7C72",
    fontSize: 8,
    marginTop: 2,
    fontWeight: "700",
  },

  newLotCard: {
    minHeight: 275,
    backgroundColor: "#8D9664",
    borderRadius: 30,
    padding: 21,
    justifyContent: "space-between",
    marginBottom: 30,
  },

  newLotTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  plusCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F7F0DF",
    alignItems: "center",
    justifyContent: "center",
  },

  plus: {
    color: "#52643A",
    fontSize: 25,
    lineHeight: 27,
    fontWeight: "500",
  },

  newLotNumber: {
    color: "#C6CBAA",
    fontSize: 10,
    fontWeight: "900",
  },

  newLotKicker: {
    color: "#F6C950",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.5,
    marginBottom: 6,
  },

  newLotTitle: {
    color: "#F7F0DF",
    fontSize: 38,
    lineHeight: 36,
    fontWeight: "900",
    letterSpacing: -1.8,
  },

  newLotDescription: {
    color: "#EBE8D9",
    fontSize: 11,
    lineHeight: 16,
    maxWidth: 240,
    marginTop: 10,
  },

  newLotBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  newLotLink: {
    color: "#F7F0DF",
    fontSize: 11,
    fontWeight: "800",
    textDecorationLine: "underline",
  },

  newLotArrow: {
    color: "#F6C950",
    fontSize: 22,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#26382A",
    fontSize: 17,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  sectionLink: {
    color: "#8D9664",
    fontSize: 9,
    fontWeight: "800",
    textDecorationLine: "underline",
  },

  productCard: {
    backgroundColor: "#FBF7ED",
    borderRadius: 22,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E1DACB",
  },

  productColor: {
    width: 57,
    height: 57,
    borderRadius: 17,
    backgroundColor: "#F39BC2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  productEmoji: {
    fontSize: 27,
  },

  productInfo: {
    flex: 1,
  },

  productOverline: {
    color: "#9A978D",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
  },

  productName: {
    color: "#26382A",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 2,
  },

  productPlace: {
    color: "#7E7B72",
    fontSize: 8,
    marginTop: 2,
  },

  productScore: {
    alignItems: "center",
    paddingHorizontal: 7,
  },

  productScoreNumber: {
    color: "#52643A",
    fontSize: 20,
    fontWeight: "900",
  },

  productScoreText: {
    color: "#99968C",
    fontSize: 7,
    fontWeight: "700",
  },

  traceCard: {
    backgroundColor: "#52643A",
    borderRadius: 26,
    padding: 20,
    marginBottom: 18,
  },

  traceHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  traceKicker: {
    color: "#DDF56C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.4,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#DDF56C",
    marginRight: 5,
  },

  statusText: {
    color: "#F7F0DF",
    fontSize: 8,
    fontWeight: "800",
  },

  traceTitle: {
    color: "#F7F0DF",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "900",
    letterSpacing: -1,
    marginTop: 15,
  },

  traceItalic: {
    color: "#F6C950",
    fontStyle: "italic",
    fontWeight: "500",
  },

  traceSteps: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },

  traceItem: {
    alignItems: "center",
  },

  traceNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F7F0DF",
    alignItems: "center",
    justifyContent: "center",
  },

  traceNumberText: {
    color: "#52643A",
    fontSize: 9,
    fontWeight: "900",
  },

  traceText: {
    color: "#F7F0DF",
    fontSize: 8,
    marginTop: 5,
    fontWeight: "700",
  },

  traceLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#85936F",
    marginHorizontal: 8,
    marginBottom: 13,
  },

  planCard: {
    backgroundColor: "#EFE8D8",
    borderRadius: 23,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  planKicker: {
    color: "#8D9664",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  planTitle: {
    color: "#26382A",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 3,
  },

  planDescription: {
    color: "#7B796F",
    fontSize: 9,
    lineHeight: 14,
    marginTop: 3,
    maxWidth: 240,
  },

  planArrowCircle: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: "#52643A",
    alignItems: "center",
    justifyContent: "center",
  },

  planArrow: {
    color: "#F7F0DF",
    fontSize: 17,
  },

  footer: {
    color: "#99968D",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1.1,
    textAlign: "center",
    marginTop: 24,
  },
});