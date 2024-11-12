import React, { useState, useEffect } from 'react';

// Sample quiz data
const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Indian', 'Pacific', 'Atlantic', 'Arctic'],
    answer: 'Pacific',
  },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [endTime, setEndTime] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Start the timer when the quiz begins
    setStartTime(Date.now());
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const isCorrect = option === quizData[currentQuestion].answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setCorrectOption(isCorrect ? '' : quizData[currentQuestion].answer);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question after a delay
    setTimeout(() => {
      setFeedback('');
      setSelectedOption('');
      setCorrectOption('');

      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setEndTime(Date.now()); // Stop the timer
        setQuizCompleted(true); // Mark quiz as completed
      }
    }, 2000); // Adjust delay as needed
  };

  // Restart quiz after completion
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setFeedback('');
    setCorrectOption('');
    setScore(0);
    setStartTime(Date.now());
    setEndTime(null);
    setQuizCompleted(false);
  };

  // Calculate time taken in seconds
  const timeTaken = endTime ? ((endTime - startTime) / 1000).toFixed(2) : null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      {!quizCompleted ? (
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {quizData[currentQuestion].question}
          </h2>
          <div className="grid gap-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full p-3 rounded-md font-medium ${
                  selectedOption === option
                    ? feedback === 'correct'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : correctOption === option
                    ? 'bg-green-400 text-white'
                    : 'bg-gray-200 text-gray-800'
                } transition duration-200 ease-in-out`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quiz Completed!🎉🎉
          </h2>
          <p className="text-lg mb-2">
            Your Score 🏆: {score} / {quizData.length}
          </p>
          <p className="text-lg mb-4">Time Taken: {timeTaken} seconds</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
