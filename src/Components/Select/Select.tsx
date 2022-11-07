import React, { Children, FC } from "react";
import classNames from "classnames";

import styles from "./Select.module.css";
import { SelectProps } from "./types";
import Label from "../Label";

const Select: FC<SelectProps> = ({
  options,
  selectValue,
  onChange,
  disabled
}) => {
  return (
    <div className={styles.customSelect}>
      <select
        value={selectValue}
        onChange={onChange}
        disabled={disabled}
        className={styles.select}
      >
        {options.map(({ key, title, value }) => {
          return (
            <option key={key} value={value} className={styles.option}>
              {title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
