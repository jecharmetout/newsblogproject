export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
export type ButtonClassnamesType = {
  [k in ButtonType]: string;
};

export type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type: ButtonType;
};
