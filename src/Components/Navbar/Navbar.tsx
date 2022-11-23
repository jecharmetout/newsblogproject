import React, { useState } from "react";
import styles from "./Navbar.module.css";
import User from "../User/User";

import { Logo, CancelIcon, SearchIcon, UserIcon } from "../../Assets/Icons";
import classNames from "classnames";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
// import AuthSelectors from "../../Redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

import { PathNames } from "../../Pages/Router/Router";
import { searchForPosts } from "../../Redux/reducers/postsReducer";

const Navbar = ({ onClick, isOpened }: any) => {
  const { theme, onChangeTheme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = { username: "Artem Malkin" };

  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const onSignInClick = () => {
    navigate(PathNames.SignIn);
  };
  const onLogoClick = () => {
    navigate(PathNames.Home);
  };
  const onSearch = () => {
    if (value.length > 0) {
      dispatch(searchForPosts({ search: value, offset: 0, isOverwrite: true }));
      navigate(PathNames.Search, { state: { searchElement: value } });
      setValue("");
      onClick();
    }
  };

  return (
    <div
      className={classNames(styles.navbarMenu, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <nav className={styles.nav}>
        <div className={styles.logo} onClick={onLogoClick}>
          <Logo />
        </div>
        {isOpened && (
          <div className={styles.inputContainer}>
            <Input
              placeholder={"Search..."}
              onChange={onChange}
              value={value}
            />
            {value.length > 0 ?  (
              <div className={styles.searchIcon} onClick={onSearch}>
                <SearchIcon />
              </div>
            ): (
              <div className={styles.cancelIcon} onClick={onClick}>
                <CancelIcon />
              </div>
            ) }
          </div>
        )}
        <div className={styles.userSearchWrapper}>
          {!isOpened && (
            <div className={styles.searchIcon} onClick={onClick}>
              <SearchIcon />
            </div>
          )}

          {!currentUser ? (
            <div className={styles.userIconWrapper}>
              {/* <User userName={currentUser?.username || ""} /> */}
            </div>
          ) : (
            <div className={styles.userIconWrapper} onClick={onSignInClick}>
              <div className={styles.userIcon}>
                <UserIcon />
              </div>
              <div>Sign In</div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
