import React from "react";
import s from "./ActiveQuiz.module.css";
import AnswersList from "./AnsewrsList/AnswersList";

const ActiveQuiz = ({ question, answers, onAnswerClick }) => (
  <div className={s.activequiz}>
    <p className={s.question}>
      <span>
        <strong>2.</strong>&nbsp; {question}
      </span>
      <small>4 из 12</small>
    </p>
    <AnswersList answers={answers} onAnswerClick={onAnswerClick} />
  </div>
);

export default ActiveQuiz;
