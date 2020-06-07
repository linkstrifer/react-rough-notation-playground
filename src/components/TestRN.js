import React from "react";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
export function TestRN({ type }) {
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
