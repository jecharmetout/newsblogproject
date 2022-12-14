import React, { FC, ChangeEvent } from "react";
import classNames from "classnames";
import styles from "./Input.module.css";
import { InputProps } from "./types";


const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  disabled,
  error,
  className,
  onBlur,
  type = "text"
}) => {
  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };
  const onTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(evt.target.value);
  };
  return type !== "textarea" ? (
    <input
      type={type}
      onChange={onInputChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      className={classNames(styles.input, className, { [styles.error]: error })}
      disabled={disabled}
    />
  ) : (
    <textarea
      onChange={onTextAreaChange}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
      className={classNames(styles.input, className, { [styles.error]: error })}
      disabled={disabled}
    />
  );
};

export default Input;
