import React from "react";
import s from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = ({ answers, onAnswerClick, state }) => (
  <ul className={s.answerslist}>
    {answers.map((answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={onAnswerClick}
          answerId={index + 1}
          state={state ? state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
