import React, { useState } from "react";
import styles from "./Navbar.module.css";
import User from "../User/User";
import Menu from "./Menu";

import { Logo, CancelIcon, SearchIcon, UserIcon } from "../../Assets/Icons";
import classNames from "classnames";
// import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
// import AuthSelectors from "../../Redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
// import { PathNames } from "../../Pages/Router/Router";
// import { searchForPosts } from "../../Redux/reducers/postsReducer";

const Navbar = ({ onClick, isOpened }: any) => {
  // const { theme, onChangeTheme } = useThemeContext();
  // const dispatch = useDispatch();

  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <div className={styles.navbarMenu}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {isOpened && (<div className={styles.inputContainer}>
          
            <Input
              placeholder={"Search..."}
              onChange={onChange}
              value={value}
            />
          <div className={styles.cancelIcon} onClick={onClick}><CancelIcon/></div>
        </div> )}
        <div className={styles.userSearchWrapper}>
        {!isOpened && (
            <div className={styles.searchIcon} onClick={onClick}>
              <SearchIcon />
            </div>
          )}

          {/* {currentUser ? (
            <User userName={currentUser?.username || ""} />
          ) : (
            <div className={styles.userIcon} onClick={onSignInClick}>
              <UserIcon />
            </div>
          )} */}

          {/* <div className={styles.userIcon} onClick={onSignInClick}> */}
          <div className={styles.userIconWrapper} onClick={() => {}}>
            <div className={styles.userIcon}>
              <UserIcon />
            </div>
            <div>Sign In</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
