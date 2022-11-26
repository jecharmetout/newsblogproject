import { create } from "apisauce";
import { PER_PAGE } from "../../Utils";

const API = create({
  baseURL: "https://api.spaceflightnewsapi.net"
});

const getPostsList = (_start: number, _sort: string) => {
  return API.get("/v3/articles", { _limit: PER_PAGE, _start, _sort });
};
const getPostsCount = () => {
  return API.get("/v3/articles/count");
};

const getSearchedPosts = (title_contains: string, _start: number) => {
  return API.get("/v3/articles", { title_contains, _limit: PER_PAGE, _start });
};
const getPost = (id: string) => {
  return API.get(`/v3/articles/${id}/`);
};

export default {
  getPostsList,
  getPostsCount,
  getSearchedPosts,
  getPost
};
