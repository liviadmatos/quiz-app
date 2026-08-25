import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type StartScreenProps = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <View style={styles.container}>
      <View style={styles.glowOne} />
      <View style={styles.glowTwo} />

      <View style={styles.card}>
        <View style={styles.iconWrap}>
          <Text style={styles.icon}>🎯</Text>
        </View>

        <Text style={styles.badge}>Quiz Challenge</Text>
        <Text style={styles.title}>Teste seu conhecimento</Text>
        <Text style={styles.subtitle}>
          Responda perguntas rápidas, acumule pontos e descubra o quanto você
          sabe.
        </Text>

        <View style={styles.featuresRow}>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>10 perguntas</Text>
          </View>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>Fácil e rápido</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={onStart}
          activeOpacity={0.9}
        >
          <Text style={styles.startButtonText}>Iniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef4ff",
    padding: 24,
    position: "relative",
  },
  glowOne: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(79, 70, 229, 0.12)",
    top: 40,
    left: -30,
  },
  glowTwo: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "rgba(14, 165, 233, 0.12)",
    bottom: 30,
    right: -60,
  },
  card: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#ffffff",
    borderRadius: 32,
    padding: 30,
    alignItems: "center",
    shadowColor: "#1f2a44",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 10,
    borderWidth: 1,
    borderColor: "rgba(99, 102, 241, 0.08)",
  },
  iconWrap: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  icon: {
    fontSize: 40,
  },
  badge: {
    backgroundColor: "#e0e7ff",
    color: "#4338ca",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 24,
  },
  featuresRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  featurePill: {
    backgroundColor: "#f3f4f6",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  featureText: {
    color: "#374151",
    fontWeight: "600",
    fontSize: 12,
  },
  startButton: {
    backgroundColor: "#4f46e5",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 28,
    width: "100%",
    alignItems: "center",
    shadowColor: "#4338ca",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  startButtonText: {
    color: "#ffffff",
    fontWeight: "800",
    fontSize: 18,
  },
});
