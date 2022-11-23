import React, { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


import styles from "./CardPost.module.css";
import { CardPostProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

const CardPost: FC<CardPostProps> = ({ post }) => {
  const { imageUrl, text, publishedAt, title, id } = post;
  const date  = new Date()
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const onNavigateToPost = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      className={classNames(styles.post, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
      onClick={onNavigateToPost}

    >
      <div className={styles.imgWrapper}>
        <img src={imageUrl} alt="img" />
        <div className={styles.imgBackground}></div>
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.date}>{publishedAt}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default CardPost;
