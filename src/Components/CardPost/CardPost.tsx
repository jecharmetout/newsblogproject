import React, { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styles from "./CardPost.module.css";
import { CardPostProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import {
  setSelectedImgPost,
  setSelectedPost,
  setSingleImgModalVisible,
  setSinglePostModalVisible
} from "../../Redux/reducers/postsReducer";
import { Ellipsis } from "../../Assets/Icons";

const CardPost: FC<CardPostProps> = ({ post }) => {
  const { imageUrl, text, publishedAt, title, id } = post;
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };
  const date = (publishedAt: string | number | Date) => {
    const data = new Date(publishedAt);
    return data.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  const onOpenImgModal = (event: any) => {
    event.stopPropagation();
    dispatch(setSelectedImgPost(post));
    dispatch(setSingleImgModalVisible(true));
  };
  const onOpenPostModal = (event: any) => {
    event.stopPropagation();
    dispatch(setSelectedPost(post));
    dispatch(setSinglePostModalVisible(true));
  };

  return (
    <div
      className={classNames(styles.post, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
      onClick={onNavigateToPost}
    >
      <div className={styles.imgWrapper} onClick={onOpenImgModal}>
        <img src={imageUrl} alt="img" />
        <div className={styles.imgBackground}></div>
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.date}>{date(publishedAt)}</div>
        <div className={styles.title}>
          {title.length > 67 ? title.substr(0, 67) + "..." : title}
        </div>
      </div>
      <div className={styles.iconsOptions}>
        <div onClick={onOpenPostModal}>
          <Ellipsis />
        </div>
      </div>
    </div>
  );
};

export default CardPost;
