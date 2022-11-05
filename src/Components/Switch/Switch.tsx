import React, { useState,FC } from "react";
import Label from "../Label";
import styles from "./Switch.module.css";
import { SwitchProps } from "./types";
const Switch:FC<SwitchProps> = ({disabled,title}) => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <div className={styles.switchWrapper}>
      <Label title={title} />
      <label className={styles.toggleSwitch}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} disabled={disabled}/>
        <span className={styles.switch} />
      </label>
    </div>
  );
};
export default Switch;
