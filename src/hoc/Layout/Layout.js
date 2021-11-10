import React, { Component } from "react";
import s from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <div className={s.layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}
export default Layout;
