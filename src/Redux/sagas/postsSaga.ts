import { all, takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getPosts,
  getPostsCount,
  getSinglePost,
  searchForPosts,
  setBlogLoading,
  setCardsCount,
  setCardsList,
  setSearchedPosts,
  setSearchedPostsCount,
  setSinglePost,
  setSinglePostLoading
} from "../reducers/postsReducer";
import Api from "../api";
import { GetPostsPayload, SearchPostsPayload } from "../../Utils";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
    yield put(setBlogLoading(true));

    const {_start, _sort } = action.payload;

  const { data, status, problem } = yield call(
    Api.getPostsList,
    _start,
    _sort
  );

  if (status === 200 && data) {
    yield put(setCardsList(data));
  } else {
    console.log(problem);
  }
    yield put(setBlogLoading(false));
}
function* getPostsCountWorker() {
  const { data, status, problem } = yield call(Api.getPostsCount);

  if (status === 200 && data) {
    yield put(setCardsCount(data));
  }else {
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
function* getSearchedPostsWorker(action: PayloadAction<SearchPostsPayload>) {
  const { offset, isOverwrite, search } = action.payload;

  //   yield put(setSearchPostsLoading(isOverwrite));
  const { data, status, problem } = yield call(
    Api.getSearchedPosts,
    search,
    offset
  );
  if (status === 200 && data) {
    yield put(setSearchedPostsCount(data.count));
    yield put(setSearchedPosts({ data: data.results, isOverwrite }));
  } else {
    console.log("Error getting search posts", problem);
  }
  //   yield put(setSearchPostsLoading(false));
}

export default function* postsSagaWatcher() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getPostsCount, getPostsCountWorker),
    takeLatest(searchForPosts, getSearchedPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),

  ]);
}
