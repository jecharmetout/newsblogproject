import { create } from "apisauce";
import { PER_PAGE } from "../../Utils";

const API = create({
  baseURL: "https://api.spaceflightnewsapi.net"
});

const getPostsList = (_start: number, _sort?: string, publishedAt_gt?:string) => {
  return API.get("/v3/articles", { _limit: PER_PAGE, _start, _sort, publishedAt_gt });
};
const getNewsList = (_start: number, _sort?: string, publishedAt_gt?:string) => {
  return API.get("/v3/blogs", { _limit: PER_PAGE, _start, _sort, publishedAt_gt });
};
const getPostsCount = () => {
  return API.get("/v3/articles/count");
};
const getNewsCount = () => {
  return API.get("/v3/blogs/count");
};
const getSearchedPosts = (title_contains: string, _start: number) => {
  return API.get("/v3/articles", { title_contains, _limit: PER_PAGE, _start });
};
const getSearchedNews = (title_contains: string, _start: number) => {
  return API.get("/v3/blogs", { title_contains, _limit: PER_PAGE, _start });
};
const getPost = (id: string) => {
  return API.get(`/v3/articles/${id}/`);
};
const getNews = (id: string) => {
  return API.get(`/v3/blogs/${id}/`);
};

export default {
  getPostsList,
  getNewsList,
  getPostsCount,
  getNewsCount,
  getSearchedPosts,
  getSearchedNews,
  getPost,
  getNews,
};
