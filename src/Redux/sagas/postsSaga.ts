import { all, takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getNews,
  getNewsCount,
  getPosts,
  getPostsCount,
  getSingleNews,
  getSinglePost,
  searchForNews,
  searchForPosts,
  setBlogLoading,
  setCardsCount,
  setCardsList,
  setSearchedPosts,
  setSearchPostsLoading,
  setSinglePost,
  setSinglePostLoading
} from "../reducers/postsReducer";
import Api from "../api";
import { GetPostsPayload, SearchPostsPayload } from "../../Utils";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setBlogLoading(true));

  const { _start, _sort, publishedAt_gt, _limit } = action.payload;

  const { data, status, problem } = yield call(
    Api.getPostsList,
    _start,
    _sort,
    publishedAt_gt,
    _limit
  );
  if (status === 200 && data) {
    yield put(setCardsList(data));
    if (data.length >= 12) {
      yield getPostsCountWorker();
    }
  } else {
    console.log(problem);
  }
  

  yield put(setBlogLoading(false));
}

function* getNewsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setBlogLoading(true));

  const { _start, _sort, publishedAt_gt, _limit } = action.payload;

  const { data, status, problem } = yield call(
    Api.getNewsList,
    _start,
    _sort,
    publishedAt_gt,
    _limit
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
    if (data.length >= 12) {
      yield getNewsCountWorker();
    }
  } else {
    console.log(problem);
  }
  yield put(setBlogLoading(false));
}



function* getPostsCountWorker() {
  const { data, status, problem } = yield call(Api.getPostsCount);

  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log(problem);
  }
}



function* getNewsCountWorker() {
  const { data, status, problem } = yield call(Api.getNewsCount);

  if (status === 200 && data) {
    yield put(setCardsCount(data));
  } else {
    console.log(problem);
  }
}



function* getSinglePostWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getPost, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.log(problem);
  }
  yield put(setSinglePostLoading(false));
}



function* getSingleNewsWorker(action: PayloadAction<string>) {
  yield put(setSinglePostLoading(true));
  const { data, status, problem } = yield call(Api.getNews, action.payload);
  if (status === 200 && data) {
    yield put(setSinglePost(data));
  } else {
    console.log(problem);
  }
  yield put(setSinglePostLoading(false));
}



function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
  const { _start, title_contains } = action.payload;

  yield put(setSearchPostsLoading(true));
  const { data, status, problem } = yield call(
    Api.getSearchedPosts,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}



function* getSearchedNewsWorker(action: PayloadAction<SearchPostsPayload>) {
  const { _start, title_contains } = action.payload;

  yield put(setSearchPostsLoading(true));
  const { data, status, problem } = yield call(
    Api.getSearchedNews,
    title_contains,
    _start
  );
  if (status === 200 && data) {
    yield put(setSearchedPosts({ data: data }));
  } else {
    console.log("Error getting search posts", problem);
  }
  yield put(setSearchPostsLoading(false));
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getNews, getNewsWorker),
    takeLatest(getPostsCount, getPostsCountWorker),
    takeLatest(getNewsCount, getNewsCountWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(searchForNews, getSearchedNewsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
    takeLatest(getSingleNews, getSingleNewsWorker)
  ]);
}
