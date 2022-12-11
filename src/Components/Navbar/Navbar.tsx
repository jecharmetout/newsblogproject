import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


import styles from "./Navbar.module.css";

import { Logo, CancelIcon, SearchIcon, UserIcon } from "../../Assets/Icons";
import Input from "../Input";
import User from "../User/User";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

import { PathNames } from "../../Pages/Router/Router";
import {
  searchForNews,
  searchForPosts
} from "../../Redux/reducers/postsReducer";
import postsSelectors from "../../Redux/selectors/postsSelectors";
import { TabsNames } from "../../Utils";

const Navbar = ({ onClick, isOpened }: any) => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = { username: "Artem Malkin" };
  const activeTab = useSelector(postsSelectors.getActiveTab);

  const isNews = activeTab === TabsNames.News;

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
      isNews
        ? dispatch(
            searchForNews({
              title_contains: value,
              _start: 0,
            })
          )
        : dispatch(
            searchForPosts({
              title_contains: value,
              _start: 0,
            })
          );
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
            {value.length > 0 ? (
              <div className={styles.searchIcon} onClick={onSearch}>
                <SearchIcon />
              </div>
            ) : (
              <div className={styles.cancelIcon} onClick={onClick}>
                <CancelIcon />
              </div>
            )}
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
