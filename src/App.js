import React from "react";
import "./styles.css";

import { RoughNotation } from "react-rough-notation";
import { TestRN } from "./components/TestRN";
import { TestRNG } from "./components/TestRNG";
import { types } from "./types";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>
          <RoughNotation type="highlight" show={true} color="#fff176">
            ReactRoughNotation Playground
          </RoughNotation>
        </h1>
      </div>

      {types.map((type, index) => (
        <TestRN key={index} type={type} />
      ))}

      <TestRNG />
      <TestRNG reverseOrder={true} />
    </div>
  );
}
