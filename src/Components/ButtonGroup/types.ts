import { ButtonSort, SortOrder } from "../../Utils";

export type ButtonGroupNameArray = {
  key: ButtonSort;
  title: string;
  disabled?: boolean;
};

export type ButtonGroupProps = {
  buttonGroup: Array<ButtonGroupNameArray>;
  onClick: (id: ButtonSort) => void;
  activeBtn?: ButtonSort;
};
