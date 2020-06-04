import React from "react";
import { useState } from "react";
import "./styles.css";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const types = [
  {
    backgroundColor: "#ffebee",
    color: "#b71c1c",
    value: "underline",
    copy: ({ show, color, type }) => (
      <p>
        create a sketchy{" "}
        <RoughNotation color={color} type={type} show={show}>
          underline
        </RoughNotation>{" "}
        below an element.
      </p>
    )
  },
  {
    backgroundColor: "#f3e5f5",
    color: "#4a148c",
    value: "box",
    copy: ({ show, color, type }) => (
      <p>
        This style draws a{" "}
        <RoughNotation color={color} type={type} show={show}>
          box
        </RoughNotation>{" "}
        around the element.
      </p>
    )
  },
  {
    backgroundColor: "#e3f2fd",
    color: "#0d47a1",
    value: "circle",
    copy: ({ type, color, show }) => (
      <p>
        Draw a{" "}
        <RoughNotation type={type} show={show} color={color}>
          circle
        </RoughNotation>{" "}
        around the element.
      </p>
    )
  },
  {
    backgroundColor: "#f5f5f5",
    color: "#ffd54f",
    value: "highlight",
    copy: ({ type, color, show }) => (
      <p>
        Creates a{" "}
        <RoughNotation type={type} show={show} color={color}>
          highlight
        </RoughNotation>{" "}
        effect as if marked by a highlighter.
      </p>
    )
  },
  {
    backgroundColor: "#e8f5e9",
    color: "#1b5e20",
    value: "strike-through",
    copy: ({ type, color, show }) => (
      <p>
        Draw a hand-drawn line through an element creating a{" "}
        <RoughNotation type={type} show={show} color={color}>
          stroke-through
        </RoughNotation>{" "}
        effect.
      </p>
    )
  },
  {
    backgroundColor: "#fffde7",
    color: "#f57f17",
    value: "crossed-off",
    copy: ({ type, color, show }) => (
      <p>
        To symbolize rejection, use a{" "}
        <RoughNotation type={type} show={show} color={color}>
          crossed-off
        </RoughNotation>{" "}
        effect on an element.
      </p>
    )
  }
];

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
    </div>
  );
}

function TestRNG() {
  const [show, setShow] = useState(false);
  return (
    <div className="box" style={{ backgroundColor: "#fbe9e7" }}>
      <div className="content">
        <RoughNotationGroup show={show}>
          <h3>
            <RoughNotation
              type="box"
              show={show}
              color="#bf360c"
              strokeWidth={5}
            >
              Annotation Group
            </RoughNotation>
          </h3>
          <p>
            Rough Notation provides a way to order the animation of annotations
            by creating an{" "}
            <RoughNotation type="highlight" color="yellow">
              annotation-group
            </RoughNotation>
            . Pass the list of annotations to create a group. When{" "}
            <i>
              <RoughNotation
                type="underline"
                show={show}
                color="#bf360c"
              >
                show
              </RoughNotation>
            </i>{" "}
            is called on the group, the annotations are animated in order.
          </p>
        </RoughNotationGroup>
        <button className="button" type="button" onClick={() => setShow(!show)}>
          Annotate
        </button>
      </div>
    </div>
  );
}

function TestRN({ type }) {
  const [show, setShow] = useState(false);
  const { value, backgroundColor, copy, color } = type;

  return (
    <div className="box" style={{ backgroundColor }}>
      <div className="content">
        <h3>
          <RoughNotation type={value} color={color} show={show}>
            {value}
          </RoughNotation>
        </h3>
        {copy && copy({ show, color, type: value })}
        <button className="button" type="button" onClick={() => setShow(!show)}>
          Annotate
        </button>
      </div>
    </div>
  );
}
