import React, { FC } from "react";
import classNames from "classnames";
import styles from "./SearchList.module.css";

import CardPost from "../CardPost";
import { SearchListProps } from "./types";
import EmptyState from "../EmptyState";

const SearchList: FC<SearchListProps> = ({ searchedPosts, count, onScroll }) => {
  return searchedPosts && searchedPosts.length > 0 ? (
    <div className={classNames(styles.listWrapper)}>
      {searchedPosts.map(post => {
        return <CardPost post={post} key={post.id} />;
      })}
    </div>
  ) : (
    <EmptyState />
  );;
};
export default SearchList;
