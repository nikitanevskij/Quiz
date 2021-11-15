import React from "react";
import Button from "../UI/Button/Button";
import s from "./FinishedQuiz.module.css";

function FinishedQuiz({ quizes, quizesResults, onRepeat }) {
  const rightAnswersCount = Object.keys(quizesResults).reduce((sum, key) => {
    if (quizesResults[key] === "success") {
      sum++;
    }
    return sum;
  }, 0);

  console.log(quizesResults);
  return (
    <div className={s.finishedQuiz}>
      <ul>
        {quizes.map((item, index) => {
          const cls = [
            "fa",
            quizesResults[item.id] === "error" ? "fa-times" : "fa-check",
            s[quizesResults[index + 1]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}.</strong>&nbsp; {item.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {rightAnswersCount} из {quizes.length}
      </p>

      <div>
        <Button onClick={onRepeat} type="primary">
          Повторить
        </Button>
        <Button type="success">Перейти в писок тестов</Button>
      </div>
    </div>
  );
}

export default FinishedQuiz;
