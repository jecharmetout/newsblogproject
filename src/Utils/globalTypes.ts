export enum TabsNames {
  Articles = "articles",
  News = "news",
  Disabled = "disabled"
}
export enum SortOrder {
  Initial="",
  Title = "title",
  Date = "publishedAt"
}
export type CardPostType = {
  id: number;
  imageUrl: string;
  text: string;
  publishedAt: string;
  lesson_num: number;
  title: string;
  author: number;
};
export type CardListType = Array<CardPostType>;

export type User = {
  username: string;
  id: number;
  email: string;
};
export type GetPostsPayload = {
  _start: number;
  _sort: string;
};

export type SearchPostsPayload = {
  search: string;
  offset: number;
  isOverwrite: boolean;
};
export type SetSearchedPostsPayload = {
  data: CardListType;
  isOverwrite: boolean;
};
