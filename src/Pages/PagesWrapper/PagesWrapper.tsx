import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import classNames from "classnames";

import styles from "./PagesWrapper.module.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Blog from "../../Pages/Blog";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { PathNames } from "../Router/Router";
import postsSelectors from "../../Redux/selectors/postsSelectors";

const PagesWrapper = () => {
  const [isOpened, setOpened] = useState(false);

  const { theme } = useThemeContext();

  const location = useLocation();
  const isVisible = useSelector(postsSelectors.getIsModalVisible);
  const imgModal = useSelector(postsSelectors.getIsImgVisible);

  return (
    <div
      className={classNames(styles.app, {
        [styles.darkContainer]: theme === Theme.Dark,
        [styles.modalActive]: isVisible || imgModal
      })}
    >
      <Navbar onClick={() => setOpened(!isOpened)} isOpened={isOpened} />

      {location.pathname === PathNames.Home ? <Blog /> : <Outlet />}
      <Footer />
    </div>
  );
};
export default PagesWrapper;
