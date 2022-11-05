import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Label.module.css";
import { LabelProps } from "./types";

// import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";


const Label: FC<LabelProps> = ({ title, required}) => {
  // const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.label, {
        // [styles.darkContainer]: theme === Theme.Dark,
        [styles.required]: required,
      })}
    >
      {title}
    </div>
  );
};

export default Label;