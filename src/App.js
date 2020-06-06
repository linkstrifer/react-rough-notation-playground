import React from "react";
import { useState } from "react";
import "./styles.css";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const types = [
  {
    backgroundColor: "#ffebee",
    color: "#b71c1c",
    value: "underline",
    copy: (props) => (
      <p>
        create a sketchy <RoughNotation {...props}>underline</RoughNotation>{" "}
        below an element.
      </p>
    ),
  },
  {
    backgroundColor: "#f3e5f5",
    color: "#4a148c",
    value: "box",
    copy: (props) => (
      <p>
        This style draws a <RoughNotation {...props}>box</RoughNotation> around
        the element.
      </p>
    ),
  },
  {
    backgroundColor: "#e3f2fd",
    color: "#0d47a1",
    value: "circle",
    copy: (props) => (
      <p>
        Draw a <RoughNotation {...props}>circle</RoughNotation> around the
        element.
      </p>
    ),
  },
  {
    backgroundColor: "#f5f5f5",
    color: "#ffd54f",
    value: "highlight",
    copy: (props) => (
      <p>
        Creates a <RoughNotation {...props}>highlight</RoughNotation> effect as
        if marked by a highlighter.
      </p>
    ),
  },
  {
    backgroundColor: "#e8f5e9",
    color: "#1b5e20",
    value: "strike-through",
    copy: (props) => (
      <p>
        Draw a hand-drawn line through an element creating a{" "}
        <RoughNotation {...props}>stroke-through</RoughNotation> effect.
      </p>
    ),
  },
  {
    backgroundColor: "#fffde7",
    color: "#f57f17",
    value: "crossed-off",
    copy: (props) => (
      <p>
        To symbolize rejection, use a{" "}
        <RoughNotation {...props}>crossed-off</RoughNotation> effect on an
        element.
      </p>
    ),
  },
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
              <RoughNotation type="underline" color="#bf360c">
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
  const { value, backgroundColor, copy, color: defaultColor } = type;

  const [animate, setAnimate] = useState(true);
  const [animationDuration, setAnimationDuration] = useState(800);
  const [color, setColor] = useState(defaultColor);
  const [padding, setPadding] = useState(5);
  const [show, setShow] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(1);

  const props = {
    animate,
    animationDuration,
    color,
    padding,
    show,
    strokeWidth,
    type: value,
  };

  return (
    <div className="box" style={{ backgroundColor }}>
      <div className="content">
        <h3>
          <RoughNotation {...props}>{value}</RoughNotation>
        </h3>
        {copy && copy(props)}
        <button className="button" type="button" onClick={() => setShow(!show)}>
          Annotate
        </button>

        <div className="properties">
          <label>
            Animate:
            <input
              type="checkbox"
              checked={animate}
              onChange={({ target }) => {
                setAnimate(target.checked);
              }}
            />
          </label>

          <label>
            Animation Duration:
            <input
              type="range"
              min="0"
              step="100"
              max="5000"
              value={animationDuration}
              onChange={({ target }) => {
                setAnimationDuration(target.value);
              }}
            />
            ({`${animationDuration}ms`})
          </label>

          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={({ target }) => {
                setColor(target.value);
              }}
            />
            <span style={{ color }}>{color}</span>
          </label>

          <label>
            Padding:
            <input
              type="range"
              min="0"
              max="100"
              value={padding}
              onChange={({ target }) => {
                setPadding(target.value);
              }}
            />
            ({`${padding}px`})
          </label>

          <label>
            Stroke Width:
            <input
              min="0"
              max="20"
              type="range"
              value={strokeWidth}
              onChange={({ target }) => {
                setStrokeWidth(target.value);
              }}
            />
            ({`${strokeWidth}px`})
          </label>
        </div>
      </div>
    </div>
  );
}
