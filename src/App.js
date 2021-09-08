import "./App.css";

import React, { Component, useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TextForm />
      </div>
    );
  }
}
