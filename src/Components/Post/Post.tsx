import React, { FC } from "react";
// import { useParams } from "react-router-dom";

import styles from "./Post.module.css";
import classNames from "classnames";
import { PostProps } from "./types";

import { Ellipsis, FacebookIcon, TwitterIcon } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { PathNames } from "../../Pages/Router/Router";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonType } from "../Button";

const Post: FC<PostProps> = ({ post }) => {
  const { imageUrl, text, title, id } = post;

  const { theme } = useThemeContext();
  // const params = useParams()
  // console.log(params)

  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate(PathNames.Home);
  };

  return (
    <>
      <div
        className={classNames(styles.post, {
          [styles.darkContainer]: theme === Theme.Dark
        })}
      >
        <div className={styles.head}>
          <div className={styles.homePost} onClick={onBackHomeClick}>
            Home <span>| Post {id}</span>
          </div>
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <img src={imageUrl} alt="img" />
            <div className={styles.imgBackground}></div>
          </div>

          <div className={styles.textIconsWrapper}>
            <div className={styles.textWrapper}>{text}</div>
            <div className={styles.iconsWrapper}>
              <Button type={ButtonType.Secondary} className={styles.facebook}>
                <a href="https://www.facebook.com/" target="_blank">
                  <FacebookIcon />
                </a>
              </Button>

              <Button type={ButtonType.Secondary} className={styles.twitter}>
                <a href="https://www.twitter.com/" target="_blank">
                  <TwitterIcon />
                </a>
              </Button>

              <Button type={ButtonType.Secondary} className={styles.ellipsis}>
                <Ellipsis />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
