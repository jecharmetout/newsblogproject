import React, { FC } from "react";
import styles from "./Button.module.css";
import { ButtonClassnamesType, ButtonType, ButtonPropsType } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import classNames from "classnames";

const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary
};

const Button: FC<ButtonPropsType> = ({
  title,
  onClick,
  className,
  disabled,
  type,
  children
}) => {
  const { theme } = useThemeContext();

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        BUTTON_TYPE_CLASSNAMES[type],
        className || "",
        {
          [styles.darkContainer]: theme === Theme.Dark
        }
      )}
      disabled={disabled}
    >
      {title || children}
    </button>
  );
};

export default Button;
