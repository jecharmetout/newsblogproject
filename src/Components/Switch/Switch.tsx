import React, { useState, FC } from "react";
import Label from "../Label";
import styles from "./Switch.module.css";
import { SwitchProps } from "./types";
const Switch: FC<SwitchProps> = ({ disabled, switched }) => {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    
      <label className={styles.toggleSwitch}>
        {switched ? (
          <input
            type="checkbox"
            checked={switched}
            onChange={onToggle}
            disabled={disabled}
          />
        ) : (
          <input
            type="checkbox"
            checked={isToggled}
            onChange={onToggle}
            disabled={disabled}
          />
        )}
        <span className={styles.switch} />
      </label>
  
  );
};
export default Switch;
