export type types =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off";

export interface RoughNotationProps {
  animate?: boolean;
  animationDelay?: number;
  animationDuration?: number;
  children: any;
  color?: string;
  customElement?: string;
  getAnnotationObject?: Function;
  order?: number;
  padding?: number;
  show?: boolean;
  strokeWidth?: number;
  type: types;
}
