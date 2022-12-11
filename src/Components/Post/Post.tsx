import React, { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";




import styles from "./Post.module.css";
import { PostProps } from "./types";

import { Ellipsis, FacebookIcon, TwitterIcon } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { PathNames } from "../../Pages/Router/Router";
import Button, { ButtonType } from "../Button";
import { setSelectedPost, setSinglePostModalVisible } from "../../Redux/reducers/postsReducer";

const Post: FC<PostProps> = ({ post }) => {
  const { imageUrl, text, title, id } = post;

  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate(PathNames.Home);
  };
  const onOpenPostModal = () => {
    dispatch(setSelectedPost(post));
    dispatch(setSinglePostModalVisible(true));
  };

  return (
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

              <Button type={ButtonType.Secondary} className={styles.ellipsis} onClick={onOpenPostModal}>
                <Ellipsis />
              </Button>
            </div>
          </div>
        </div>
      </div>

  );
};
export default Post;
