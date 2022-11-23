import React, {FC} from "react";
import classNames from "classnames";

import { UserType } from "./types";
import styles from "./User.module.css";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";


const User : FC<UserType>= ({ userName }) => {
  const { theme } = useThemeContext();

  return (
    <div  className={classNames(styles.user, {
        [styles.darkContainer]: theme === Theme.Dark
      })}>
      <div className={styles.userInitials}>{userName[0]}</div>
      <p>{userName}</p>
    </div>
  );
};
export default User;
