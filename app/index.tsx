import { useState } from "react";
import QuizScreen from "../components/QuizScreen";
import ResultScreen from "../components/ResultScreen";
import questions from "../questions.json";

const MAX_LIVES = 3;
const NEXT_QUESTION_DELAY = 2000;

export default function HomePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [remainingLives, setRemainingLives] = useState(MAX_LIVES);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const resetGame = () => {
    setIsQuizFinished(false);
    setIsGameOver(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
    setRemainingLives(MAX_LIVES);
    setMistakeCount(0);
  };

  const handleNextQuestion = () => {
    if (isGameOver) {
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handleOptionPress = (option: string) => {
    if (isOptionsDisabled) {
      return;
    }

    const isCorrect = option === currentQuestion.correctAnswer;

    setSelectedOption(option);
    setIsOptionsDisabled(true);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setTimeout(() => {
        handleNextQuestion();
      }, NEXT_QUESTION_DELAY);
      return;
    }

    const nextMistakes = mistakeCount + 1;
    setMistakeCount(nextMistakes);
    setRemainingLives(Math.max(0, MAX_LIVES - nextMistakes));

    if (nextMistakes >= 4) {
      setIsGameOver(true);
      setIsQuizFinished(true);
      return;
    }

    setTimeout(() => {
      handleNextQuestion();
    }, NEXT_QUESTION_DELAY);
  };

  const handlePlayAgain = () => {
    resetGame();
  };

  return isQuizFinished ? (
    <ResultScreen
      score={score}
      totalQuestions={questions.length}
      onPlayAgain={handlePlayAgain}
      isGameOver={isGameOver}
    />
  ) : (
    <QuizScreen
      currentQuestion={currentQuestion}
      selectedOption={selectedOption}
      isOptionsDisabled={isOptionsDisabled}
      score={score}
      totalQuestions={questions.length}
      currentQuestionIndex={currentQuestionIndex}
      remainingLives={remainingLives}
      gameOverMessage={null}
      onOptionPress={handleOptionPress}
      onNextQuestion={handleNextQuestion}
    />
  );
}
