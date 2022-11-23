import React, { FC } from "react";
import classNames from "classnames";
import styles from "./CardList.module.css";

import CardPost from "../CardPost";
import { CardListProps } from "./types";

const CardList: FC<CardListProps> = ({ cardList }) => {
  return cardList && cardList.length > 0 ? (
    <div className={classNames(styles.listWrapper)}>
      {cardList.map(post => {
        return <CardPost post={post} key={post.id} />;
      })}
    </div>
  ) : null;
};
export default CardList;
