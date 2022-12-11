import React, { useState, FC } from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./types";


const Switch: FC<SwitchProps> = ({ disabled, onChange }) => {
  
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
    onChange();
  };
  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        disabled={disabled}
      />

      <span className={styles.switch} />
    </label>
  );
};
export default Switch;
