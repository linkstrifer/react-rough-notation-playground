export interface RoughNotationGroupProps {
  children: any;
  show?: boolean;
}

export type Annotation = {
  annotation: {
    current: any;
  };
  order: number;
};

export type State = {
  annotations: Array<Annotation>;
};

export type Action = {
  type: "ADD";
  payload: Annotation;
};

export type Dispatch = (action: Action) => void;
