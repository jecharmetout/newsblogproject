import React, { useState } from "react";
import styles from "./Footer.module.css";
import classNames from "classnames";
import Switch from "../Switch";
import Label from "../Label";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
// import Switch from "react-js-switch";

const Footer = () => {
  const { theme, onChangeTheme } = useThemeContext();

  return (
    <div
      className={classNames(styles.footerWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.footerContent}>
        <div>©2022 Blogolog</div>
        <div className={styles.switchWrapper}>
          <Label title={`${(theme===Theme.Light)?Theme.Dark:Theme.Light}  theme`} className={styles.switchLabel} />

          {/* <Switch onChange={onChangeTheme}/> */}
          <Switch onChange={onChangeTheme}/>
        </div>
      </div>
    </div>
  );
};
export default Footer;
