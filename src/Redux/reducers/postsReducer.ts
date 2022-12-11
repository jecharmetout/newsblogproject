import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ButtonSort } from "./../../Utils/globalTypes";
import { PostType } from "../../Components/Post/types";
import {
  CardListType,
  CardPostType,
  GetPostsPayload,
  SearchPostsPayload,
  SetSearchedPostsPayload,
  TabsNames
} from "../../Utils";

type PostStateType = {
  selectedPost: CardPostType | null | PostType;
  selectedImgPost: CardPostType | null;
  singlePostModalVisible: boolean;
  singleImgModalVisible: boolean;
  activeTab: TabsNames;
  cardsList: CardListType;
  singlePost: CardPostType | null;
  isPostLoading: boolean;
  isSearchPostsLoading: boolean;
  isBlogLoading: boolean;
  cardsCount: number;
  searchedPosts: CardListType;
  searchString: string;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  selectedImgPost: null,
  singlePostModalVisible: false,
  singleImgModalVisible: false,
  activeTab: TabsNames.Articles,
  cardsList: [],
  singlePost: null,
  isPostLoading: false,
  isSearchPostsLoading: false,
  isBlogLoading: false,
  cardsCount: 0,
  searchedPosts: [],
  searchString: "",
};
const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    getPosts: (state, action: PayloadAction<GetPostsPayload>) => {},
    getNews: (state, action: PayloadAction<GetPostsPayload>) => {},
    getPostsCount: (state, action: PayloadAction<undefined>) => {},
    getNewsCount: (state, action: PayloadAction<undefined>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    getSingleNews: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setSelectedPost: (
      state,
      action: PayloadAction<CardPostType | null | PostType>
    ) => {
      state.selectedPost = action.payload;
    },
    setSinglePostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singlePostModalVisible = action.payload;
    },
    setSelectedImgPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedImgPost = action.payload;
    },
    setSingleImgModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singleImgModalVisible = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
  
    setCardsList: (state, action: PayloadAction<CardListType>) => {
      state.cardsList = action.payload.map(card => {
        return {
          ...card
        };
      });
    },
    setBlogLoading: (state, action: PayloadAction<boolean>) => {
      state.isBlogLoading = action.payload;
    },
    setSearchPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isSearchPostsLoading = action.payload;
    },

    setCardsCount: (state, action: PayloadAction<number>) => {
      state.cardsCount = action.payload;
    },
    setSearchedPosts: (
      state,
      action: PayloadAction<SetSearchedPostsPayload>
    ) => {
      const { data } = action.payload;

      state.searchedPosts = data;
    },
    searchForPosts: (state, action: PayloadAction<SearchPostsPayload>) => {},
    searchForNews: (state, action: PayloadAction<SearchPostsPayload>) => {}
  }
});

export default postsReducer.reducer;

export const {
  getPosts,
  getNews,
  getPostsCount,
  getNewsCount,
  setSelectedPost,
  setSelectedImgPost,
  setSinglePostModalVisible,
  setSingleImgModalVisible,
  setActiveTab,
  setCardsList,

  searchForPosts,
  searchForNews,
  setSearchPostsLoading,

  getSinglePost,
  getSingleNews,
  setSinglePost,
  setSinglePostLoading,
  setBlogLoading,
  setCardsCount,
  setSearchedPosts,
} = postsReducer.actions;
