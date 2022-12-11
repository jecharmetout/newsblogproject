import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Select.module.css";
import { SelectProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";


const Select: FC<SelectProps> = ({
  options,
  selectValue,
  onChange,
  disabled
}) => {
  const { theme } = useThemeContext();

  return (
    <div  className={classNames(styles.customSelect, {
        [styles.darkContainer]: theme === Theme.Dark
      })} >
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
