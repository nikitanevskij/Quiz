import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import s from "./Quiz.module.css";

class Quiz extends Component {
  state = {
    avtiveQuestion: 0,
    answerState: null, //  {[id]: "succses" "error"}
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 1,
        id: 1,
        answers: [
          { text: "Синее", id: 1 },
          { text: "Зеленое", id: 2 },
          { text: "Черное", id: 3 },
          { text: "Красное", id: 4 },
        ],
      },
      {
        question: "Какого цвета трава?",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "Синяя", id: 1 },
          { text: "Зеленая", id: 2 },
          { text: "Черная", id: 3 },
          { text: "Красная", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    if (answerId === this.state.quiz[this.state.avtiveQuestion].rightAnswerId) {
      // правильно ли ответили на вопрос
      this.setState({
        answerState: { [answerId]: "success" },
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log("Finished");
        } else {
          this.setState({
            avtiveQuestion: this.state.avtiveQuestion + 1, // переключатель на сл.вопрос
            answerState: null, // обнуляем стиль элемента <li>
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      console.log("Попробуйте еще раз!");
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }
  };

  isQuizFinished() {
    return this.state.avtiveQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.avtiveQuestion].answers}
            question={this.state.quiz[this.state.avtiveQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            avtiveQuestion={this.state.avtiveQuestion + 1}
            lengthQustions={this.state.quiz.length}
            state={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
