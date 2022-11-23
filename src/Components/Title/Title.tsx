import React, { FC } from "react";
import styles from "./Title.module.css";
import classNames from "classnames";
import { TitleProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Title: FC<TitleProps> = ({ title }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.wrapperTitle, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Title;
