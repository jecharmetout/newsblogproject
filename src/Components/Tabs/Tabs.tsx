import React, { FC } from "react";
import classNames from "classnames";

import styles from "./Tabs.module.css";

import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { TabsProps } from "./types";

const Tabs: FC<TabsProps> = ({ tabs, onClick, activeTab }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classNames(styles.wrapper, styles.wrapperTabs, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <ul className={styles.tabList}>
        {tabs.map(({ key, disabled, title }) => {
          return (
            <li
              key={key}
              className={classNames({
                [styles.activeTab]: activeTab === key
              })}
            >
              {/* <button onClick={() => onClick(key)} disabled={disabled}> */}
              <button onClick={onClick} disabled={disabled}>
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
