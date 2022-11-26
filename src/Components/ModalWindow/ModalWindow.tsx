import React, {FC} from "react";
import classNames from "classnames";

import styles from "./ModalWindow.module.css";
import { CancelIcon } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { ModalWindowProps } from "./types";

const ModalWindow:FC<ModalWindowProps> = ({
    active,
    closeModal,
    children,
    ispostModalVisible,
    isImgModalVisible
  }) => {
    const { theme } = useThemeContext();
  
    return (
      <div
        className={classNames(styles.modalPost, {
          [styles.modalActive]: active,
          [styles.darkContainer]: theme === Theme.Dark
        })}
      >
        <div className={styles.cancelButton} onClick={closeModal}>
          <CancelIcon />
        </div>
  
        <div
          className={classNames({
            [styles.modalContent]: ispostModalVisible,
            [styles.modalContentImg]: isImgModalVisible
          })}
        >
          {children}
        </div>
      </div>
    );
  };
  export default ModalWindow;
  