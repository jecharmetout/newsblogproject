import { CardListType } from "../../Utils";

export type SearchListProps = {
    searchedPosts: CardListType;
    count?: number;
    onScroll?: () => void;
  };