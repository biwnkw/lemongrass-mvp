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

export default function Checkout() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.page}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.back}>← voltar</Text>
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/lemon.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* INTRO */}
        <View style={styles.intro}>
          <Text style={styles.kicker}>
            FINALIZAR ASSINATURA
          </Text>

          <Text style={styles.title}>
            falta só{"\n"}
            <Text style={styles.titleItalic}>
              um passo.
            </Text>
          </Text>

          <Text style={styles.description}>
            revise seu plano e informe os dados de pagamento para ativar os
            novos recursos da sua conta.
          </Text>
        </View>

        {/* PLANO ESCOLHIDO */}
        <View style={styles.planCard}>
          <View style={styles.planTop}>
            <View>
              <Text style={styles.planKicker}>
                PLANO ESCOLHIDO
              </Text>

              <Text style={styles.planName}>
                Colheita
              </Text>
            </View>

            <View style={styles.priceArea}>
              <Text style={styles.currency}>R$</Text>
              <Text style={styles.price}>29,90</Text>
              <Text style={styles.month}>/mês</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.benefit}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.benefitText}>
              Lemon Score completo
            </Text>
          </View>

          <View style={styles.benefit}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.benefitText}>
              QR Code de rastreabilidade
            </Text>
          </View>

          <View style={styles.benefit}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.benefitText}>
              relatórios e métricas
            </Text>
          </View>

          <View style={styles.benefit}>
            <Text style={styles.check}>✓</Text>
            <Text style={styles.benefitText}>
              catálogo para compradores
            </Text>
          </View>
        </View>

        {/* PAGAMENTO */}
        <Text style={styles.sectionTitle}>
          pagamento
        </Text>

        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentActive}>
            <Text style={styles.paymentActiveText}>
              cartão
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentInactive}>
            <Text style={styles.paymentInactiveText}>
              pix
            </Text>
          </TouchableOpacity>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.label}>
              NOME NO CARTÃO
            </Text>

            <TextInput
              style={styles.input}
              defaultValue="Marina Oliveira"
              placeholderTextColor="#99968C"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              NÚMERO DO CARTÃO
            </Text>

            <TextInput
              style={styles.input}
              defaultValue="4242 4242 4242 4242"
              keyboardType="number-pad"
              placeholderTextColor="#99968C"
            />
          </View>

          <View style={styles.row}>
            <View style={styles.half}>
              <Text style={styles.label}>
                VALIDADE
              </Text>

              <TextInput
                style={styles.input}
                defaultValue="10/29"
                placeholderTextColor="#99968C"
              />
            </View>

            <View style={styles.half}>
              <Text style={styles.label}>
                CVV
              </Text>

              <TextInput
                style={styles.input}
                defaultValue="123"
                keyboardType="number-pad"
                secureTextEntry
                placeholderTextColor="#99968C"
              />
            </View>
          </View>
        </View>

        {/* RESUMO */}
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>
            resumo
          </Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Plano Colheita
            </Text>

            <Text style={styles.summaryValue}>
              R$ 29,90
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              cobrança
            </Text>

            <Text style={styles.summaryValue}>
              mensal
            </Text>
          </View>

          <View style={styles.summaryDivider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              total hoje
            </Text>

            <Text style={styles.total}>
              R$ 29,90
            </Text>
          </View>
        </View>

        {/* AVISO */}
        <View style={styles.security}>
          <View style={styles.securityIcon}>
            <Text style={styles.securityIconText}>
              ✓
            </Text>
          </View>

          <Text style={styles.securityText}>
            pagamento seguro. você poderá alterar ou cancelar seu plano
            posteriormente.
          </Text>
        </View>

        {/* FINALIZAR */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push("/sucesso")}
        >
          <View>
            <Text style={styles.buttonSmall}>
              CONFIRMAR ASSINATURA
            </Text>

            <Text style={styles.buttonText}>
              assinar por R$ 29,90
            </Text>
          </View>

          <View style={styles.buttonCircle}>
            <Text style={styles.buttonArrow}>
              →
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.demo}>
          pagamento simulado para demonstração do MVP
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
    paddingTop: 18,
    paddingBottom: 38,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },

  back: {
    color: "#52643A",
    fontSize: 10,
    fontWeight: "800",
  },

  logo: {
    width: 145,
    height: 48,
  },

  /* INTRO */

  intro: {
    marginBottom: 28,
  },

  kicker: {
    color: "#F47A3C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.6,
    marginBottom: 10,
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
    maxWidth: 330,
  },

  /* PLANO */

  planCard: {
    backgroundColor: "#52643A",
    borderRadius: 27,
    padding: 20,
    marginBottom: 29,
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
    letterSpacing: -1,
    marginTop: 3,
  },

  priceArea: {
    flexDirection: "row",
    alignItems: "flex-end",
  },

  currency: {
    color: "#DDF56C",
    fontSize: 9,
    fontWeight: "900",
    marginRight: 2,
    marginBottom: 4,
  },

  price: {
    color: "#F7F0DF",
    fontSize: 22,
    fontWeight: "900",
  },

  month: {
    color: "#D9DCCD",
    fontSize: 7,
    marginLeft: 2,
    marginBottom: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#748061",
    marginVertical: 16,
  },

  benefit: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
  },

  check: {
    color: "#DDF56C",
    fontSize: 10,
    fontWeight: "900",
    width: 21,
  },

  benefitText: {
    color: "#F7F0DF",
    fontSize: 9,
    fontWeight: "700",
  },

  /* PAGAMENTO */

  sectionTitle: {
    color: "#26382A",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 13,
  },

  paymentOptions: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 21,
  },

  paymentActive: {
    flex: 1,
    backgroundColor: "#52643A",
    borderRadius: 23,
    paddingVertical: 13,
    alignItems: "center",
  },

  paymentActiveText: {
    color: "#F7F0DF",
    fontSize: 10,
    fontWeight: "900",
  },

  paymentInactive: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#52643A",
    borderRadius: 23,
    paddingVertical: 13,
    alignItems: "center",
  },

  paymentInactiveText: {
    color: "#52643A",
    fontSize: 10,
    fontWeight: "900",
  },

  /* FORM */

  form: {
    marginBottom: 9,
  },

  field: {
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  half: {
    flex: 1,
  },

  label: {
    color: "#52643A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginBottom: 7,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#D4CEBF",
    borderRadius: 16,
    backgroundColor: "#FBF7ED",
    paddingHorizontal: 15,
    color: "#26382A",
    fontSize: 11,
    fontWeight: "600",
  },

  /* RESUMO */

  summary: {
    backgroundColor: "#EFE8D8",
    borderRadius: 22,
    padding: 17,
    marginTop: 11,
  },

  summaryTitle: {
    color: "#26382A",
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 13,
  },

  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },

  summaryLabel: {
    color: "#77766D",
    fontSize: 9,
  },

  summaryValue: {
    color: "#26382A",
    fontSize: 9,
    fontWeight: "800",
  },

  summaryDivider: {
    height: 1,
    backgroundColor: "#D8D0C0",
    marginVertical: 7,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  totalLabel: {
    color: "#26382A",
    fontSize: 11,
    fontWeight: "900",
  },

  total: {
    color: "#52643A",
    fontSize: 18,
    fontWeight: "900",
  },

  /* SEGURANÇA */

  security: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
    paddingHorizontal: 3,
  },

  securityIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#E2E6D5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  securityIconText: {
    color: "#52643A",
    fontSize: 9,
    fontWeight: "900",
  },

  securityText: {
    flex: 1,
    color: "#7E7B72",
    fontSize: 8,
    lineHeight: 12,
  },

  /* CTA */

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

  demo: {
    color: "#A09D93",
    fontSize: 7,
    textAlign: "center",
    marginTop: 12,
  },
});