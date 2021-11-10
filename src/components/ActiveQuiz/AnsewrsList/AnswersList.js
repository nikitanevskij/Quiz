import React from "react";
import s from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({ answers, onAnswerClick }) => (
  <ul className={s.answerslist}>
    {answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          onAnswerClick={onAnswerClick}
          answerId={index + 1}
        />
      );
    })}
  </ul>
);

export default AnswersList;
