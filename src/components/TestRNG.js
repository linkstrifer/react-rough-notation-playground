import React from "react";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export function TestRNG({ reverseOrder = false }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="box"
      style={{ backgroundColor: "#fbe9e7", marginTop: "5px" }}
    >
      <div className="content">
        <RoughNotationGroup show={show}>
          <h3>
            <RoughNotation type="box" color="#bf360c" strokeWidth={5}>
              Annotation Group {reverseOrder && "(Reverse Order)"}
            </RoughNotation>
          </h3>
          <p>
            Rough Notation provides a way to order the animation of annotations
            by creating an{" "}
            <RoughNotation
              type="highlight"
              color="yellow"
              order={reverseOrder ? 2 : false}
            >
              annotation-group
            </RoughNotation>
            . Pass the list of annotations to create a group. When{" "}
            <i>
              <RoughNotation
                type="underline"
                color="#bf360c"
                order={reverseOrder ? 1 : false}
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
