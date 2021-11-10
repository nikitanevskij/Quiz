import React from "react";
import s from "./ActiveQuiz.module.css";
import AnswersList from "./AnsewrsList/AnswersList";

const ActiveQuiz = ({
  question,
  answers,
  onAnswerClick,
  avtiveQuestion,
  lengthQustions,
  state,
}) => (
  <div className={s.activequiz}>
    <p className={s.question}>
      <span>
        <strong>{avtiveQuestion}.</strong>&nbsp; {question}
      </span>
      <small>
        {avtiveQuestion} из {lengthQustions}
      </small>
    </p>
    <AnswersList
      answers={answers}
      onAnswerClick={onAnswerClick}
      state={state}
    />
  </div>
);

export default ActiveQuiz;
