import React from "react";
import s from "./AnswerItem.module.css";

const AnswerItem = ({ onAnswerClick, answerId, answer, state }) => {
  const cls = [s.answersitem];
  if (state) {
    cls.push(s[state]);
  }
  return (
    <li
      className={cls.join(" ")}
      onClick={() => {
        onAnswerClick(answerId);
      }}
    >
      {answer.text}
    </li>
  );
};

export default AnswerItem;
