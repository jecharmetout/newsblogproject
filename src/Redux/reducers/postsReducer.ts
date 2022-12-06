import { ButtonSort } from "./../../Utils/globalTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  activeBtn: ButtonSort;
  cardsList: CardListType;
  singlePost: CardPostType | null;
  isPostLoading: boolean;
  isSearchPostsLoading: boolean;
  isBlogLoading: boolean;
  cardsCount: number;
  searchedPosts: CardListType;
  searchString: string;
  searchedPostsCount: number;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  selectedImgPost: null,
  singlePostModalVisible: false,
  singleImgModalVisible: false,
  activeTab: TabsNames.Articles,
  activeBtn: ButtonSort.Day,
  cardsList: [],
  singlePost: null,
  isPostLoading: false,
  isSearchPostsLoading: false,
  isBlogLoading: false,
  cardsCount: 0,
  searchedPosts: [],
  searchString: "",
  searchedPostsCount: 0
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
      // state.singlePostModalVisible = true;
    },
    setSinglePostModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singlePostModalVisible = action.payload;
    },
    setSelectedImgPost: (state, action: PayloadAction<CardPostType | null>) => {
      state.selectedImgPost = action.payload;
      // state.singleImgModalVisible  = true;
    },
    setSingleImgModalVisible: (state, action: PayloadAction<boolean>) => {
      state.singleImgModalVisible = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
    setActiveBtn: (state, action: PayloadAction<ButtonSort>) => {
      state.activeBtn = action.payload;
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
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedPostsCount = action.payload;
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
  setActiveBtn,
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
  setSearchedPostsCount
} = postsReducer.actions;
