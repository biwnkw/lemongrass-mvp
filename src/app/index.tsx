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

export default function Index() {
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

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.enter}>entrar ↗</Text>
          </TouchableOpacity>
        </View>

        {/* HERO */}
        <View style={styles.hero}>
          <Image
            source={require("../../assets/images/limao.png")}
            style={styles.lemonIllustration}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/tomate.png")}
            style={styles.tomatoIllustration}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/abobora.png")}
            style={styles.pumpkinIllustration}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/banana.png")}
            style={styles.bananaIllustration}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/cenoura.png")}
            style={styles.carrotIllustration}
            resizeMode="contain"
          />

          <Image
            source={require("../../assets/images/ervas.png")}
            style={styles.herbsIllustration}
            resizeMode="contain"
          />

          <View style={styles.heroContent}>
            <Text style={styles.kicker}>
              GOOD FOOD HAS A STORY
            </Text>

            <Text style={styles.title}>
              da terra{"\n"}
              <Text style={styles.titleItalic}>
                até você.
              </Text>
            </Text>

            <Text style={styles.heroText}>
              descubra de onde vem, como foi cultivado e quem tornou cada
              alimento possível.
            </Text>
          </View>
        </View>

        {/* CARD DA SAFRA */}
        <View style={styles.storyCard}>
          <View style={styles.storyTop}>
            <View>
              <Text style={styles.cardOverline}>
                DA SAFRA DE HOJE
              </Text>

              <Text style={styles.cardTitle}>
                morango
              </Text>
            </View>

            <View style={styles.score}>
              <Text style={styles.scoreNumber}>
                92
              </Text>

              <Text style={styles.scoreLabel}>
                lemon{"\n"}score
              </Text>
            </View>
          </View>

          <View style={styles.fruitArea}>
            <Image
              source={require("../../assets/images/morango.png")}
              style={styles.strawberryIllustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.origin}>
            <View style={styles.originDot} />

            <View style={styles.originTextArea}>
              <Text style={styles.originLabel}>
                ORIGEM VERIFICADA
              </Text>

              <Text style={styles.originName}>
                Sítio Boa Terra
              </Text>

              <Text style={styles.originPlace}>
                Atibaia, São Paulo
              </Text>
            </View>

            <Text style={styles.originArrow}>
              ↗
            </Text>
          </View>
        </View>

        {/* TAGS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tags}
        >
          <View style={[styles.tag, styles.tagGreen]}>
            <Text style={styles.tagLight}>
              origem
            </Text>
          </View>

          <View style={[styles.tag, styles.tagPink]}>
            <Text style={styles.tagDark}>
              safra
            </Text>
          </View>

          <View style={[styles.tag, styles.tagYellow]}>
            <Text style={styles.tagDark}>
              impacto
            </Text>
          </View>

          <View style={[styles.tag, styles.tagBlue]}>
            <Text style={styles.tagDark}>
              produtor
            </Text>
          </View>
        </ScrollView>

        {/* CTA */}
        <TouchableOpacity
          style={styles.cta}
          activeOpacity={0.8}
          onPress={() => router.push("/cadastro")}
        >
          <View>
            <Text style={styles.ctaSmall}>
              COMECE POR AQUI
            </Text>

            <Text style={styles.ctaText}>
              conheça sua comida
            </Text>
          </View>

          <View style={styles.ctaCircle}>
            <Text style={styles.ctaArrow}>
              →
            </Text>
          </View>
        </TouchableOpacity>

        {/* FOOTER */}
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
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 145,
    height: 48,
  },

  enter: {
    color: "#26382A",
    fontSize: 11,
    fontWeight: "800",
    textDecorationLine: "underline",
  },

  hero: {
    height: 440,
    backgroundColor: "#8D9664",
    borderRadius: 34,
    padding: 24,
    overflow: "hidden",
    position: "relative",
    marginBottom: 28,
  },

  lemonIllustration: {
    position: "absolute",
    width: 142,
    height: 142,
    top: 5,
    left: -8,
    transform: [{ rotate: "-7deg" }],
    zIndex: 3,
  },

  tomatoIllustration: {
    position: "absolute",
    width: 105,
    height: 105,
    top: 16,
    right: 4,
    transform: [{ rotate: "7deg" }],
    zIndex: 4,
  },

  pumpkinIllustration: {
    position: "absolute",
    width: 105,
    height: 90,
    top: 8,
    left: 138,
    transform: [{ rotate: "3deg" }],
    zIndex: 2,
  },

  bananaIllustration: {
    position: "absolute",
    width: 125,
    height: 105,
    top: 110,
    left: -9,
    transform: [{ rotate: "-15deg" }],
    zIndex: 2,
  },

  carrotIllustration: {
    position: "absolute",
    width: 115,
    height: 100,
    top: 105,
    left: 108,
    transform: [{ rotate: "8deg" }],
    zIndex: 3,
  },

  herbsIllustration: {
    position: "absolute",
    width: 145,
    height: 110,
    top: 105,
    right: -3,
    transform: [{ rotate: "-6deg" }],
    zIndex: 2,
  },

  heroContent: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 28,
    zIndex: 10,
  },

  kicker: {
    color: "#F6C950",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.8,
    marginBottom: 11,
  },

  title: {
    color: "#F7F0DF",
    fontSize: 54,
    lineHeight: 50,
    fontWeight: "900",
    letterSpacing: -3,
  },

  titleItalic: {
    color: "#F6C950",
    fontStyle: "italic",
    fontWeight: "500",
  },

  heroText: {
    color: "#F4EDDD",
    fontSize: 13,
    lineHeight: 19,
    width: "88%",
    marginTop: 16,
  },

  storyCard: {
    backgroundColor: "#52643A",
    borderRadius: 32,
    padding: 21,
    overflow: "hidden",
  },

  storyTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 5,
  },

  cardOverline: {
    color: "#DDF56C",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.5,
  },

  cardTitle: {
    color: "#F7F0DF",
    fontSize: 35,
    fontWeight: "900",
    letterSpacing: -1.5,
    marginTop: 2,
  },

  score: {
    flexDirection: "row",
    alignItems: "center",
  },

  scoreNumber: {
    color: "#DDF56C",
    fontSize: 34,
    fontWeight: "900",
    marginRight: 5,
  },

  scoreLabel: {
    color: "#F7F0DF",
    fontSize: 8,
    lineHeight: 9,
    fontWeight: "700",
  },

  fruitArea: {
    height: 175,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  strawberryIllustration: {
    width: 255,
    height: 180,
    transform: [{ rotate: "-3deg" }],
  },

  origin: {
    backgroundColor: "#F7F0DF",
    borderRadius: 20,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  originDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#DDF56C",
    borderWidth: 2,
    borderColor: "#52643A",
    marginRight: 11,
  },

  originTextArea: {
    flex: 1,
  },

  originLabel: {
    color: "#899081",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.2,
  },

  originName: {
    color: "#26382A",
    fontSize: 13,
    fontWeight: "900",
    marginTop: 2,
  },

  originPlace: {
    color: "#77766D",
    fontSize: 9,
    marginTop: 1,
  },

  originArrow: {
    color: "#52643A",
    fontSize: 20,
  },

  tags: {
    gap: 8,
    paddingVertical: 20,
  },

  tag: {
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 30,
  },

  tagGreen: {
    backgroundColor: "#52643A",
  },

  tagPink: {
    backgroundColor: "#F39BC2",
  },

  tagYellow: {
    backgroundColor: "#F6C950",
  },

  tagBlue: {
    backgroundColor: "#A9C6D3",
  },

  tagLight: {
    color: "#F7F0DF",
    fontSize: 11,
    fontWeight: "800",
  },

  tagDark: {
    color: "#26382A",
    fontSize: 11,
    fontWeight: "800",
  },

  cta: {
    backgroundColor: "#F7F0DF",
    borderWidth: 2,
    borderColor: "#52643A",
    borderRadius: 27,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ctaSmall: {
    color: "#7B806F",
    fontSize: 7,
    fontWeight: "900",
    letterSpacing: 1.7,
    marginBottom: 5,
  },

  ctaText: {
    color: "#26382A",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: -0.5,
  },

  ctaCircle: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#52643A",
    alignItems: "center",
    justifyContent: "center",
  },

  ctaArrow: {
    color: "#F7F0DF",
    fontSize: 20,
  },

  footer: {
    color: "#96958A",
    fontSize: 7,
    fontWeight: "800",
    letterSpacing: 1.2,
    textAlign: "center",
    marginTop: 19,
  },
});