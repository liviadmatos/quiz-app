import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type QuizScreenProps = {
  currentQuestion: Question;
  selectedOption: string | null;
  isOptionsDisabled: boolean;
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number;
  remainingLives: number;
  gameOverMessage: string | null;
  onOptionPress: (option: string) => void;
  onNextQuestion: () => void;
};

export default function QuizScreen({
  currentQuestion,
  selectedOption,
  isOptionsDisabled,
  score,
  totalQuestions,
  currentQuestionIndex,
  remainingLives,
  gameOverMessage,
  onOptionPress,
  onNextQuestion,
}: QuizScreenProps) {
  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (selectedOption && selectedOption !== currentQuestion.correctAnswer) {
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 8,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -8,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 6,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -6,
          duration: 50,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [selectedOption, currentQuestion.correctAnswer, shakeAnim]);

  const getOptionStyle = (option: string) => {
    if (selectedOption) {
      const isCorrect = option === currentQuestion.correctAnswer;
      if (isCorrect) {
        return styles.correctOption;
      }
      if (option === selectedOption && !isCorrect) {
        return styles.incorrectOption;
      }
    }
    return {};
  };

  const hearts = Array.from(
    { length: 3 },
    (_, index) => index < remainingLives,
  );

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: shakeAnim }] }]}
    >
      <View style={styles.decorCircleOne} />
      <View style={styles.decorCircleTwo} />
      <View style={styles.decorCircleThree} />

      {gameOverMessage ? (
        <View style={styles.gameOverOverlay}>
          <Text style={styles.gameOverTitle}>Game Over</Text>
          <Text style={styles.gameOverText}>{gameOverMessage}</Text>
        </View>
      ) : null}

      <View style={styles.topBar}>
        <View style={styles.progressPill}>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        <View style={styles.statusPanel}>
          <View style={styles.heartsRow}>
            {hearts.map((filled, index) => (
              <Text
                key={`heart-${index}`}
                style={[
                  styles.heart,
                  filled ? styles.heartFilled : styles.heartEmpty,
                ]}
              >
                {filled ? "♥" : "♡"}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.scorePill}>
          <Text style={styles.scoreText}>Score {score}</Text>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionLabel}>Pergunta</Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, getOptionStyle(option)]}
            onPress={() => onOptionPress(option)}
            disabled={isOptionsDisabled}
            activeOpacity={0.85}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071427",
    padding: 20,
    justifyContent: "center",
    position: "relative",
  },
  decorCircleOne: {
    position: "absolute",
    top: -90,
    right: -40,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "rgba(168, 85, 247, 0.18)",
  },
  decorCircleTwo: {
    position: "absolute",
    bottom: -80,
    left: -40,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(59, 130, 246, 0.16)",
  },
  decorCircleThree: {
    position: "absolute",
    top: "32%",
    left: "10%",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "rgba(45, 212, 191, 0.12)",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    zIndex: 1,
    gap: 12,
  },
  progressPill: {
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.25)",
  },
  progressText: {
    color: "#e2e8f0",
    fontWeight: "800",
    fontSize: 14,
  },
  statusPanel: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    borderRadius: 999,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.2)",
  },
  heartsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  heart: {
    fontSize: 28,
    lineHeight: 28,
    color: "#ffffff",
  },
  heartFilled: {
    opacity: 1,
    textShadowColor: "rgba(255,255,255,0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  heartEmpty: {
    opacity: 0.28,
    color: "#ffffff",
  },
  scorePill: {
    backgroundColor: "#f59e0b",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
    shadowColor: "#fbbf24",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  scoreText: {
    color: "#111827",
    fontWeight: "900",
    fontSize: 13,
  },
  questionContainer: {
    backgroundColor: "rgba(15, 23, 42, 0.78)",
    borderRadius: 30,
    padding: 24,
    justifyContent: "center",
    minHeight: 180,
    shadowColor: "#020817",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.2)",
    zIndex: 1,
  },
  questionLabel: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1.8,
    color: "#7dd3fc",
    marginBottom: 12,
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    color: "#f8fafc",
    lineHeight: 32,
  },
  optionsContainer: {
    marginTop: 20,
    gap: 12,
    zIndex: 1,
  },
  option: {
    backgroundColor: "rgba(15, 23, 42, 0.72)",
    padding: 18,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "rgba(148, 163, 184, 0.2)",
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 2,
  },
  optionText: {
    fontSize: 17,
    color: "#e2e8f0",
    fontWeight: "700",
  },
  correctOption: {
    borderColor: "#34d399",
    backgroundColor: "rgba(16, 185, 129, 0.2)",
  },
  incorrectOption: {
    borderColor: "#f87171",
    backgroundColor: "rgba(239, 68, 68, 0.18)",
  },
  gameOverOverlay: {
    position: "absolute",
    top: "25%",
    left: 24,
    right: 24,
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: "rgba(248, 250, 252, 0.2)",
    alignItems: "center",
    zIndex: 10,
  },
  gameOverTitle: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  gameOverText: {
    color: "#fef9c3",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 24,
  },
});
