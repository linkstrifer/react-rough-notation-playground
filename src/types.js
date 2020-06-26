import React from "react";
import { RoughNotation } from "react-rough-notation";

export const types = [
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
    backgroundColor: "#e0f2f1",
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
  {
    backgroundColor: "#fffde7",
    color: "#ff0000",
    value: "bracket",
    brackets: ["left", "right"],
    copy: (props) => (
      <>
        <p>
          Create a hand-drawn bracket around a block (like a paragraph of text)
          on one or multiple sides of the block.
        </p>
        <RoughNotation {...props}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          nisi hendrerit augue molestie tempus. Phasellus purus quam, aliquet
          nec commodo quis, pharetra ut orci. Donec laoreet ligula nisl,
          placerat molestie mauris luctus id. Fusce dapibus non libero nec
          lobortis. Nullam iaculis nisl ac eros consequat, sit amet placerat
          massa vulputate.
        </RoughNotation>
      </>
    ),
  },
  {
    animationDuration: 1500,
    backgroundColor: "#fff8f1",
    brackets: ["left", "right"],
    color: "#f57f17",
    multiline: true,
    title: "Multiple lines",
    value: "highlight",
    copy: (props) => (
      <>
        <p>Ability to annotate inline content that can span multiple lines</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          nisi hendrerit augue molestie tempus. Phasellus purus quam, aliquet
          nec commodo quis, pharetra ut orci.{" "}
          <RoughNotation {...props}>
            Donec laoreet ligula nisl, placerat molestie mauris luctus id. Fusce
            dapibus non libero nec lobortis. Nullam iaculis nisl ac eros
            consequat, sit amet placerat massa vulputate. Maecenas euismod
            volutpat ultrices. Pellentesque felis ex, ullamcorper in felis
            finibus, feugiat dignissim augue.
          </RoughNotation>{" "}
          Integer malesuada non eros consectetur interdum. Mauris mollis non
          urna in porta.
        </p>
      </>
    ),
  },
];
