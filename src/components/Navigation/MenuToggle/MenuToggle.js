import React from "react";
import s from "./MenuTogle.module.css";

function MenuToggle({ isOpen, onToggle }) {
  const cls = [s.menutoggle, "fa"];
  if (isOpen) {
    cls.push("fa-times");
    cls.push(s.open);
  } else {
    cls.push("fa-bars");
  }
  return <i className={cls.join(" ")} onClick={onToggle} />;
}

export default MenuToggle;
