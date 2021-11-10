import React from "react";
import s from "./AnswerItem.module.css";

const AnswerItem = ({ onAnswerClick, answerId, answer }) => {
  return (
    <li
      className={s.answersitem}
      onClick={() => {
        onAnswerClick(answerId);
      }}
    >
      {answer.text}
    </li>
  );
};

export default AnswerItem;
