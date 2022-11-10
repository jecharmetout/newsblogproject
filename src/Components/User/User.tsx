import React, {FC} from "react";
import { UserType } from "./types";
import styles from "./User.module.css";

const User : FC<UserType>= ({ userName }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userInitials}>{userName[0]}</div>
      <p>{userName}</p>
    </div>
  );
};
export default User;
