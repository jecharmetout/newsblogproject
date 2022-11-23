import React, { FC } from "react";
import classNames from "classnames";

import { CardListProps } from "./types";
import styles from "./RecommendedPostsList.module.css";
import CardPost from "../CardPost";


const RecommendPostsList: FC<CardListProps> = ({ cardList }) => {
  return cardList && cardList.length > 0 ? (
    <div className={classNames(styles.listWrapper)}>
      {cardList.map((post, id) => {
            if (id >= 0 && id <= 2) {
              return (
                <CardPost post={post} key={post.id} />
              );
            }
          })}
    </div>
  ) : null;
};
export default RecommendPostsList;
