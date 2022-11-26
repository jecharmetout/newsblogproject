import React from "react";
import classNames from "classnames";

import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.cardWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.imgWrapper}>
        <img
          src="https://img.freepik.com/premium-vector/the-robot-astronaut-man-sits-with-laptop-search-on-the-internet-internet-surfing-error-page-not-found-flat-color-illustration_138353-51.jpg?w=1800"
          alt="Not found request"
        />
      </div>
      <div className={styles.textWrapper}>
        <div>Sorry there's nothing was found</div>
        <div>Try to adjusting your search</div>
      </div>
    </div>
  );
};
export default EmptyState;