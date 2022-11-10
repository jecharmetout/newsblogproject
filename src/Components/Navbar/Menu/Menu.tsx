import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./Menu.module.css";

import User from "../../User/User";
import Switch from "../../Switch";
import Label from "../../Label";
import Input from "../../Input";
import { SearchIcon } from "../../../Assets/Icons";
// import { Theme, useThemeContext } from "../../../Context/ThemeContext/Context";
// import { PathNames } from "../../../Pages/Router";
// import { logoutUser } from "../../../Redux/reducers/authReducer";
// import AuthSelectors from "../../../Redux/selectors/authSelectors";

const Menu = () => {
  // const { theme } = useThemeContext();
  // const location = useLocation();
  // const dispatch = useDispatch();

  // const isAuthenticated = useSelector(AuthSelectors.getAuthStatus);
  // const currentUser = useSelector(AuthSelectors.getCurrentUser);

  // const onLogOut = () => {
  //   dispatch(logoutUser());
  // };

  // const MENU_LINK = [
  //   {
  //     key: "Home",
  //     title: "Home",
  //     // path: PathNames.Home
  //   },
  //   {
  //     key: "Add post",
  //     title: "Add post",
  //     // path: PathNames.NewPost
  //   }
  // ];
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <ul
      className={classNames(styles.listMenu, {
        // [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      {/* {isAuthenticated && currentUser && (
        <li className={styles.currentUser}>
          <User userName={currentUser?.username || ""} />
        </li>
      )} */}
      <li className={styles.currentUser}>
        <User userName={"Artem Malkin"} />
      </li>
      <div className={styles.search}>
        <div className={styles.searchInput}>
          <Input
            value={value}
            onChange={onChange}
            placeholder={"Search..."}
            className={styles.inputMenu}
          />
        </div>

        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>

      <div className={styles.emptyDiv}></div>
      <li className={styles.switch}>
        <Label title={"Dark theme"} />
        <Switch />
      </li>
      <li className={styles.logOut}>Log out</li>
    </ul>
  );
};
export default Menu;
