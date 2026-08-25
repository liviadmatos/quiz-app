import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  isGameOver?: boolean;
};

export default function ResultScreen({
  score,
  totalQuestions,
  onPlayAgain,
  isGameOver = false,
}: ResultScreenProps) {
  const message = isGameOver
    ? "Você perdeu todas as vidas, jogue novamente!"
    : score === totalQuestions
      ? "Perfeito! Você acertou tudo."
      : score >= totalQuestions / 2
        ? "Muito bom! Você mandou bem."
        : "Boa tentativa! Vamos tentar de novo.";

  const icon = isGameOver ? "💥" : "🏆";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={[styles.iconWrap, isGameOver && styles.iconWrapGameOver]}>
          <Text style={styles.icon}>{icon}</Text>
        </View>

        <Text style={[styles.badge, isGameOver && styles.badgeGameOver]}>
          {isGameOver ? "Resultado" : "Resultado"}
        </Text>
        <Text style={[styles.title, isGameOver && styles.titleGameOver]}>
          {isGameOver ? "Game Over" : "Fim de jogo!"}
        </Text>
        <Text style={styles.scoreText}>
          Você acertou {score} de {totalQuestions} perguntas.
        </Text>
        <Text
          style={[styles.messageText, isGameOver && styles.messageTextGameOver]}
        >
          {message}
        </Text>

        <TouchableOpacity
          style={[styles.button, isGameOver && styles.buttonGameOver]}
          onPress={onPlayAgain}
          activeOpacity={0.9}
        >
          <Text style={styles.buttonText}>Jogar novamente</Text>
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
    backgroundColor: "#071427",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "rgba(15, 23, 42, 0.78)",
    borderRadius: 32,
    padding: 30,
    alignItems: "center",
    shadowColor: "#020817",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.4,
    shadowRadius: 28,
    elevation: 12,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
  },
  iconWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#fef3c7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
    shadowColor: "#fbbf24",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  iconWrapGameOver: {
    backgroundColor: "#fee2e2",
    shadowColor: "#ef4444",
  },
  icon: {
    fontSize: 42,
  },
  badge: {
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 20,
  },
  badgeGameOver: {
    backgroundColor: "rgba(254, 226, 226, 0.18)",
    color: "#fecaca",
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 12,
    color: "#f8fafc",
  },
  titleGameOver: {
    color: "#fca5a5",
  },
  scoreText: {
    fontSize: 22,
    marginBottom: 10,
    color: "#e2e8f0",
    textAlign: "center",
    fontWeight: "700",
  },
  messageText: {
    fontSize: 17,
    color: "#a5b4fc",
    fontWeight: "700",
    marginBottom: 26,
    textAlign: "center",
  },
  messageTextGameOver: {
    color: "#fca5a5",
  },
  button: {
    backgroundColor: "#8b5cf6",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
    width: "100%",
    alignItems: "center",
    shadowColor: "#8b5cf6",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 8,
  },
  buttonGameOver: {
    backgroundColor: "#ef4444",
    shadowColor: "#ef4444",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },
});
