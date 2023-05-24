import React, { useState } from "react";
import data from "../data/questions.json";

const Question = (props) => {
  const [questions, setQuestions] = useState(data);
  const [currentQuestion, setCurrentQuestions] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestions(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div>
          <div className="">
            You score have {score} correct answers out of {questions.length}{" "}
            questions.
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            {questions[currentQuestion].question}
          </div>
          <div className="card-body d-flex flex-column">
            {questions[currentQuestion].answerOptions.map((a) => (
              <button
                className="btn btn-outline-primary mb-3"
                key={a.answer}
                onClick={() => handleAnswerSelected(a.isCorrect)}
              >
                {a.answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
