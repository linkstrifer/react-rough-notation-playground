import React from "react";
import { createContext, useContext, useEffect, useReducer } from "react";

import { annotationGroup } from "rough-notation/lib/rough-notation";

import {
  RoughNotationGroupProps,
  State,
  Action,
  Dispatch,
  Annotation
} from "./types";

const GroupContext = createContext<State | null>(null);
const GroupDispatchContext = createContext<Dispatch | null>(null);

const initialState: State = {
  annotations: []
};

function reducer(state: State, { type, payload }: Action) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        annotations: [...state.annotations, payload]
      };
    default:
      return state;
  }
}

function RoughNotationGroup({ children, show }: RoughNotationGroupProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const annotations = state.annotations.reduce(
      (list: object, annotation: Annotation) => {
        const newList = { ...list };
        const { order } = annotation;

        // if (order) {
        //   newList.withOrder = [...newList.withOrder, annotation];
        // } else {
        //   newList.withoutOrder = [...newList.withoutOrder, annotation];
        // }

        console.log(annotation);

        return list;
      },
      {
        withOrder: [],
        withoutOrder: []
      }
    );

    annotations.withOrder = annotations.withOrder.sort(
      (a, b) => b.order - a.order
    );

    const group = annotationGroup(
      [...annotations.withOrder, ...annotations.withoutOrder].map(
        ({ annotation }) => annotation.current
      )
    );

    if (show) {
      group.show();
    } else {
      group.hide();
    }
  }, [show, state]);

  return (
    <GroupContext.Provider value={state}>
      <GroupDispatchContext.Provider value={dispatch}>
        {children}
      </GroupDispatchContext.Provider>
    </GroupContext.Provider>
  );
}

export function useGroupContext({ annotation, order }: Annotation) {
  const context = useContext(GroupContext);
  const dispatch = useContext(GroupDispatchContext);

  if (!context) {
    return undefined;
  }

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: "ADD",
        payload: { annotation, order }
      });
    }
  }, []);

  return;
}

export default RoughNotationGroup;
