import React from "react";
import s from "./Backdrop.module.css";

function Backdrop({ onClose }) {
  return <div className={s.Backdrop} onClick={onClose}></div>;
}

export default Backdrop;
