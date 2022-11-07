import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Label.module.css";
import { LabelProps } from "./types";

// import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Label: FC<LabelProps> = ({ title, required, className,children }) => {
  // const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.label, className, {
        // [styles.darkContainer]: theme === Theme.Dark,
        [styles.required]: required
      })}
    >
      {title}
      {children}
    </div>
  );
};

export default Label;
