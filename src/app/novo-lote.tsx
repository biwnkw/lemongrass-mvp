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

export default function NovoLote() {
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
          <Text style={styles.kicker}>NOVA PRODUÇÃO</Text>

          <Text style={styles.title}>
            conte a história{"\n"}
            <Text style={styles.titleItalic}>deste lote.</Text>
          </Text>

          <Text style={styles.description}>
            registre as principais informações da produção para gerar
            rastreabilidade e calcular o Lemon Score.
          </Text>
        </View>

        {/* PROGRESSO */}
        <View style={styles.progressArea}>
          <View style={styles.progressTop}>
            <Text style={styles.progressLabel}>CADASTRO DO LOTE</Text>
            <Text style={styles.progressNumber}>01 / 03</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* FORMULÁRIO */}
        <View style={styles.formCard}>
          <View style={styles.formHeader}>
            <View>
              <Text style={styles.formOverline}>INFORMAÇÕES BÁSICAS</Text>
              <Text style={styles.formTitle}>sobre a produção</Text>
            </View>

            <View style={styles.formNumber}>
              <Text style={styles.formNumberText}>01</Text>
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PRODUTO</Text>

            <TextInput
              style={styles.input}
              defaultValue="Morango"
              placeholderTextColor="#969389"
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.field, styles.half]}>
              <Text style={styles.label}>DATA DA COLHEITA</Text>

              <TextInput
                style={styles.input}
                defaultValue="02/10/2026"
                placeholderTextColor="#969389"
              />
            </View>

            <View style={[styles.field, styles.half]}>
              <Text style={styles.label}>QUANTIDADE</Text>

              <TextInput
                style={styles.input}
                defaultValue="80 kg"
                placeholderTextColor="#969389"
              />
            </View>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>PROPRIEDADE</Text>

            <TextInput
              style={styles.input}
              defaultValue="Sítio Boa Terra"
              placeholderTextColor="#969389"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>LOCALIZAÇÃO</Text>

            <TextInput
              style={styles.input}
              defaultValue="Atibaia, São Paulo"
              placeholderTextColor="#969389"
            />
          </View>
        </View>

        {/* CULTIVO */}
        <View style={styles.cultivationCard}>
          <View style={styles.cultivationHeader}>
            <View>
              <Text style={styles.cultivationOverline}>
                CULTIVO
              </Text>

              <Text style={styles.cultivationTitle}>
                como foi produzido?
              </Text>
            </View>

            <Text style={styles.cultivationNumber}>02</Text>
          </View>

          <View style={styles.tags}>
            <TouchableOpacity style={styles.tagActive}>
              <View style={styles.tagDotActive} />
              <Text style={styles.tagActiveText}>orgânico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag}>
              <View style={styles.tagDot} />
              <Text style={styles.tagText}>convencional</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>PRÁTICAS DA PRODUÇÃO</Text>

          <TextInput
            style={styles.textArea}
            defaultValue="Uso consciente de água, adubação orgânica e manejo sustentável do solo."
            multiline
            textAlignVertical="top"
            placeholderTextColor="#969389"
          />
        </View>

        {/* IMPACTO */}
        <View style={styles.impactCard}>
          <View style={styles.impactIcon}>
            <Text style={styles.impactIconText}>✦</Text>
          </View>

          <View style={styles.impactContent}>
            <Text style={styles.impactKicker}>
              POR QUE PEDIMOS ISSO?
            </Text>

            <Text style={styles.impactText}>
              esses dados ajudam a construir a rastreabilidade do alimento e
              contribuem para o cálculo do seu Lemon Score.
            </Text>
          </View>
        </View>

        {/* BOTÃO */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={() => router.push("/lemon-score")}
        >
          <View>
            <Text style={styles.buttonSmall}>
              PRÓXIMA ETAPA
            </Text>

            <Text style={styles.buttonText}>
              gerar rastreabilidade
            </Text>
          </View>

          <View style={styles.buttonCircle}>
            <Text style={styles.buttonArrow}>→</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footer}>
          SUAS INFORMAÇÕES CONSTROEM TRANSPARÊNCIA
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
    marginBottom: 26,
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
    fontWeight: "500",
    fontStyle: "italic",
  },

  description: {
    color: "#77766D",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 14,
    maxWidth: 325,
  },

  progressArea: {
    marginBottom: 22,
  },

  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  progressLabel: {
    color: "#52643A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.4,
  },

  progressNumber: {
    color: "#8B887E",
    fontSize: 7,
    fontWeight: "800",
  },

  progressTrack: {
    width: "100%",
    height: 5,
    borderRadius: 3,
    backgroundColor: "#DED7C7",
    overflow: "hidden",
  },

  progressFill: {
    width: "34%",
    height: "100%",
    backgroundColor: "#52643A",
    borderRadius: 3,
  },

  formCard: {
    backgroundColor: "#FBF7ED",
    borderRadius: 27,
    padding: 19,
    borderWidth: 1,
    borderColor: "#E1DACB",
    marginBottom: 16,
  },

  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 22,
  },

  formOverline: {
    color: "#F47A3C",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  formTitle: {
    color: "#26382A",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 3,
  },

  formNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F6C950",
    alignItems: "center",
    justifyContent: "center",
  },

  formNumberText: {
    color: "#26382A",
    fontSize: 8,
    fontWeight: "900",
  },

  field: {
    marginBottom: 16,
  },

  label: {
    color: "#52643A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 7,
  },

  input: {
    height: 51,
    backgroundColor: "#F7F0DF",
    borderRadius: 15,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#DDD5C4",
    color: "#26382A",
    fontSize: 12,
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    gap: 10,
  },

  half: {
    flex: 1,
  },

  cultivationCard: {
    backgroundColor: "#EFE8D8",
    borderRadius: 27,
    padding: 19,
    marginBottom: 16,
  },

  cultivationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  cultivationOverline: {
    color: "#8D9664",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
  },

  cultivationTitle: {
    color: "#26382A",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 3,
  },

  cultivationNumber: {
    color: "#AAA596",
    fontSize: 10,
    fontWeight: "900",
  },

  tags: {
    flexDirection: "row",
    gap: 9,
    marginBottom: 20,
  },

  tagActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#52643A",
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 25,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#B9B2A2",
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 25,
  },

  tagDotActive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#DDF56C",
    marginRight: 7,
  },

  tagDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#AAA596",
    marginRight: 7,
  },

  tagActiveText: {
    color: "#F7F0DF",
    fontSize: 10,
    fontWeight: "800",
  },

  tagText: {
    color: "#6F6D65",
    fontSize: 10,
    fontWeight: "800",
  },

  textArea: {
    minHeight: 90,
    backgroundColor: "#F7F0DF",
    borderRadius: 15,
    padding: 14,
    borderWidth: 1,
    borderColor: "#D8D0BF",
    color: "#26382A",
    fontSize: 11,
    lineHeight: 17,
  },

  impactCard: {
    backgroundColor: "#F6C950",
    borderRadius: 22,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  impactIcon: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: "#26382A",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  impactIconText: {
    color: "#F6C950",
    fontSize: 17,
  },

  impactContent: {
    flex: 1,
  },

  impactKicker: {
    color: "#26382A",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.1,
    marginBottom: 3,
  },

  impactText: {
    color: "#4E4A3A",
    fontSize: 9,
    lineHeight: 14,
  },

  button: {
    backgroundColor: "#52643A",
    borderRadius: 25,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 11,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonSmall: {
    color: "#DDF56C",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.3,
    marginBottom: 3,
  },

  buttonText: {
    color: "#F7F0DF",
    fontSize: 15,
    fontWeight: "900",
  },

  buttonCircle: {
    width: 44,
    height: 44,
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
    letterSpacing: 1.1,
    textAlign: "center",
    marginTop: 20,
  },
});