import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import s from "./Quiz.module.css";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 1,
        answers: [
          { text: "Синее", id: 1 },
          { text: "Зеленое", id: 2 },
          { text: "Черное", id: 3 },
          { text: "Красное", id: 4 },
        ],
      },
    ],
  };

  onAnswerClick = (answerId) => {
    console.log(answerId);
  };
  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClick}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
