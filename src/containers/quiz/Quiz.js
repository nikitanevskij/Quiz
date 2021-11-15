import React, { Component } from "react";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import s from "./Quiz.module.css";

class Quiz extends Component {
  state = {
    results: {}, // {[quiz.id]: "success" "error"}
    isFinished: false,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    } // проверка
    const activeQuestion = this.state.quiz[this.state.avtiveQuestion];
    const results = this.state.results;
    if (answerId === activeQuestion.rightAnswerId) {
      if (!results[activeQuestion.id]) {
        results[activeQuestion.id] = "success";
      }
      // правильно ли ответили на вопрос
      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            avtiveQuestion: this.state.avtiveQuestion + 1, // переключатель на сл.вопрос
            answerState: null, // обнуляем стиль элемента <li>
          });
        }
        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[activeQuestion.id] = "error";
      console.log("Попробуйте еще раз!");
      this.setState({
        answerState: { [answerId]: "error" },
        results: results,
      });
    }
  };

  isQuizFinished() {
    return this.state.avtiveQuestion + 1 === this.state.quiz.length;
  }

  repeat = () =>
    this.setState({
      results: {},
      isFinished: false,
      avtiveQuestion: 0,
      answerState: null,
    });

  render() {
    return (
      <div className={s.quiz}>
        <div className={s.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              quizes={this.state.quiz}
              quizesResults={this.state.results}
              onRepeat={this.repeat}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.avtiveQuestion].answers}
              question={this.state.quiz[this.state.avtiveQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              avtiveQuestion={this.state.avtiveQuestion + 1}
              lengthQustions={this.state.quiz.length}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
