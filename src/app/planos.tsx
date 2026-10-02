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

export default function Planos() {
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
          <Text style={styles.kicker}>PLANOS LEMONGRASS</Text>

          <Text style={styles.title}>
            cresça no seu{"\n"}
            <Text style={styles.titleItalic}>próprio ritmo.</Text>
          </Text>

          <Text style={styles.description}>
            escolha os recursos que fazem sentido para sua produção e amplie
            sua rastreabilidade conforme seu negócio cresce.
          </Text>
        </View>

        {/* RAIZ */}
        <View style={styles.planCard}>
          <View style={styles.planTop}>
            <View>
              <Text style={styles.planNumber}>01</Text>
              <Text style={styles.planName}>Raiz</Text>
            </View>

            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>GRÁTIS</Text>
            </View>
          </View>

          <Text style={styles.planDescription}>
            para começar a organizar e registrar sua produção.
          </Text>

          <View style={styles.divider} />

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              cadastro básico de produtos
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              Lemon Score básico
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              rastreabilidade essencial
            </Text>
          </View>

          <View style={styles.currentPlan}>
            <Text style={styles.currentPlanText}>
              plano atual
            </Text>
          </View>
        </View>

        {/* CULTIVO */}
        <View style={styles.planCard}>
          <View style={styles.planTop}>
            <View>
              <Text style={styles.planNumber}>02</Text>
              <Text style={styles.planName}>Cultivo</Text>
            </View>

            <View style={styles.priceArea}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>9,90</Text>
              <Text style={styles.month}>/mês</Text>
            </View>
          </View>

          <Text style={styles.planDescription}>
            para produtores que querem ampliar a transparência dos seus lotes.
          </Text>

          <View style={styles.divider} />

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              tudo do plano Raiz
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              QR Code de rastreabilidade
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              histórico ampliado de lotes
            </Text>
          </View>
        </View>

        {/* COLHEITA */}
        <View style={styles.featuredCard}>
          <View style={styles.recommendedBadge}>
            <Text style={styles.recommendedText}>
              MAIS ESCOLHIDO
            </Text>
          </View>

          <View style={styles.featuredTop}>
            <View>
              <Text style={styles.featuredNumber}>03</Text>
              <Text style={styles.featuredName}>Colheita</Text>
            </View>

            <View style={styles.featuredPriceArea}>
              <Text style={styles.featuredCurrency}>R$</Text>
              <Text style={styles.featuredPrice}>29,90</Text>
              <Text style={styles.featuredMonth}>/mês</Text>
            </View>
          </View>

          <Text style={styles.featuredDescription}>
            inteligência e rastreabilidade para transformar produção em valor.
          </Text>

          <View style={styles.featuredDivider} />

          <View style={styles.feature}>
            <Text style={styles.featuredCheck}>✓</Text>
            <Text style={styles.featuredFeatureText}>
              tudo do plano Cultivo
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featuredCheck}>✓</Text>
            <Text style={styles.featuredFeatureText}>
              relatórios completos
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featuredCheck}>✓</Text>
            <Text style={styles.featuredFeatureText}>
              métricas avançadas
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featuredCheck}>✓</Text>
            <Text style={styles.featuredFeatureText}>
              catálogo ampliado
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featuredCheck}>✓</Text>
            <Text style={styles.featuredFeatureText}>
              conexão com compradores
            </Text>
          </View>

          <TouchableOpacity
            style={styles.selectButton}
            activeOpacity={0.85}
            onPress={() => router.push("/checkout")}
          >
            <View>
              <Text style={styles.selectSmall}>
                ESCOLHER PLANO
              </Text>

              <Text style={styles.selectText}>
                começar Colheita
              </Text>
            </View>

            <View style={styles.selectCircle}>
              <Text style={styles.selectArrow}>→</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* LEGADO */}
        <View style={styles.legacyCard}>
          <View style={styles.planTop}>
            <View>
              <Text style={styles.legacyNumber}>04</Text>
              <Text style={styles.legacyName}>Legado</Text>
            </View>

            <View style={styles.priceArea}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>49,90</Text>
              <Text style={styles.month}>/mês</Text>
            </View>
          </View>

          <Text style={styles.planDescription}>
            para operações que querem ampliar presença, impacto e conexão B2B.
          </Text>

          <View style={styles.divider} />

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              tudo do plano Colheita
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              catálogo completo
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              prioridade no marketplace
            </Text>
          </View>

          <View style={styles.feature}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.featureText}>
              relatórios estratégicos
            </Text>
          </View>
        </View>

        {/* NOTA */}
        <View style={styles.note}>
          <View style={styles.noteIcon}>
            <Text style={styles.noteIconText}>✦</Text>
          </View>

          <Text style={styles.noteText}>
            você pode mudar ou cancelar seu plano quando quiser.
          </Text>
        </View>

        <Text style={styles.footer}>
          TECNOLOGIA PARA QUEM CULTIVA O FUTURO
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
    marginBottom: 25,
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
    fontSize: 40,
    lineHeight: 39,
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

  planCard: {
    backgroundColor: "#FBF7ED",
    borderRadius: 27,
    padding: 19,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E0D8C8",
  },

  planTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  planNumber: {
    color: "#A29D90",
    fontSize: 8,
    fontWeight: "900",
  },

  planName: {
    color: "#26382A",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 2,
  },

  freeBadge: {
    backgroundColor: "#DDF56C",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  freeBadgeText: {
    color: "#26382A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1,
  },

  priceArea: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  currency: {
    color: "#52643A",
    fontSize: 9,
    fontWeight: "900",
    marginRight: 3,
    marginBottom: 5,
  },

  price: {
    color: "#26382A",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: -1,
  },

  month: {
    color: "#8B887E",
    fontSize: 7,
    marginLeft: 2,
    marginBottom: 5,
  },

  planDescription: {
    color: "#77746B",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 10,
    maxWidth: 280,
  },

  divider: {
    height: 1,
    backgroundColor: "#DED6C6",
    marginVertical: 16,
  },

  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  check: {
    color: "#52643A",
    fontSize: 11,
    fontWeight: "900",
    marginRight: 9,
  },

  featureText: {
    color: "#55544D",
    fontSize: 9,
    fontWeight: "700",
  },

  currentPlan: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#52643A",
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginTop: 8,
  },

  currentPlanText: {
    color: "#52643A",
    fontSize: 8,
    fontWeight: "900",
  },

  featuredCard: {
    backgroundColor: "#52643A",
    borderRadius: 30,
    padding: 20,
    marginVertical: 5,
    marginBottom: 14,
  },

  recommendedBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#F6C950",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginBottom: 18,
  },

  recommendedText: {
    color: "#26382A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.1,
  },

  featuredTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  featuredNumber: {
    color: "#AAB590",
    fontSize: 8,
    fontWeight: "900",
  },

  featuredName: {
    color: "#F7F0DF",
    fontSize: 29,
    fontWeight: "900",
    marginTop: 2,
  },

  featuredPriceArea: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  featuredCurrency: {
    color: "#DDF56C",
    fontSize: 9,
    fontWeight: "900",
    marginRight: 3,
    marginBottom: 6,
  },

  featuredPrice: {
    color: "#F7F0DF",
    fontSize: 27,
    fontWeight: "900",
    letterSpacing: -1,
  },

  featuredMonth: {
    color: "#C9CEB4",
    fontSize: 7,
    marginLeft: 2,
    marginBottom: 6,
  },

  featuredDescription: {
    color: "#E7E4D6",
    fontSize: 10,
    lineHeight: 15,
    marginTop: 11,
    maxWidth: 285,
  },

  featuredDivider: {
    height: 1,
    backgroundColor: "#71805C",
    marginVertical: 17,
  },

  featuredCheck: {
    color: "#DDF56C",
    fontSize: 11,
    fontWeight: "900",
    marginRight: 9,
  },

  featuredFeatureText: {
    color: "#F7F0DF",
    fontSize: 9,
    fontWeight: "700",
  },

  selectButton: {
    backgroundColor: "#F7F0DF",
    borderRadius: 24,
    paddingVertical: 10,
    paddingLeft: 17,
    paddingRight: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 13,
  },

  selectSmall: {
    color: "#8D9664",
    fontSize: 6,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 2,
  },

  selectText: {
    color: "#26382A",
    fontSize: 12,
    fontWeight: "900",
  },

  selectCircle: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: "#F6C950",
    alignItems: "center",
    justifyContent: "center",
  },

  selectArrow: {
    color: "#26382A",
    fontSize: 18,
  },

  legacyCard: {
    backgroundColor: "#EFE8D8",
    borderRadius: 27,
    padding: 19,
    marginBottom: 16,
  },

  legacyNumber: {
    color: "#A29D90",
    fontSize: 8,
    fontWeight: "900",
  },

  legacyName: {
    color: "#26382A",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 2,
  },

  note: {
    backgroundColor: "#F6C950",
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  noteIcon: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: "#26382A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  noteIconText: {
    color: "#F6C950",
    fontSize: 13,
  },

  noteText: {
    flex: 1,
    color: "#4D4939",
    fontSize: 9,
    lineHeight: 14,
    fontWeight: "700",
  },

  footer: {
    color: "#99968D",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1.1,
    textAlign: "center",
    marginTop: 21,
  },
});