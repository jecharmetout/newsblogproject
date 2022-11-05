import React from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";
import Switch from "../Switch";
import Label from "../Label";

// import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const Footer = () => {
  // const {theme} = useThemeContext();

  return (
    <div
      className={classNames(styles.footerWrapper, {
        // [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.footerContent}>
        <div>©2022 Blogolog</div>
        <div className={styles.switchWrapper}>
          <Label title={'Dark theme'} className={styles.switchLabel}/>

          <Switch  />
        </div>
      </div>
    </div>
  );
};
export default Footer;
