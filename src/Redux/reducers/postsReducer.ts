import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CardListType,
  CardPostType,
  GetPostsPayload,
  SearchPostsPayload,
  SetSearchedPostsPayload,
  TabsNames
} from "../../Utils";
type PostStateType = {
  selectedPost: CardPostType | null;
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
  searchedPostsCount: number;
};

const INITIAL_STATE: PostStateType = {
  selectedPost: null,
  selectedImgPost: null,
  singlePostModalVisible: false,
  singleImgModalVisible: false,
  activeTab: TabsNames.News,
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
    getPostsCount: (state, action: PayloadAction<undefined>) => {},
    getSinglePost: (state, action: PayloadAction<string>) => {},
    setSinglePost: (state, action: PayloadAction<CardPostType>) => {
      state.singlePost = action.payload;
    },
    setSinglePostLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostLoading = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<CardPostType | null>) => {
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
      const { isOverwrite, data } = action.payload;
      if (isOverwrite) {
        state.searchedPosts = data;
      } else {
        state.searchedPosts.push(...data);
      }
    },
    setSearchedPostsCount: (state, action: PayloadAction<number>) => {
      state.searchedPostsCount = action.payload;
    },
    searchForPosts: (state, action: PayloadAction<SearchPostsPayload>) => {
      // !! state.searchString = action.payload; для по буквенного поиска
    }
  }
});

export default postsReducer.reducer;

export const {
  getPosts,
  getPostsCount,
  setSelectedPost,
  setSelectedImgPost,
  setSinglePostModalVisible,
  setSingleImgModalVisible,
  setActiveTab,
  setCardsList,

  searchForPosts,
  setSearchPostsLoading,

  getSinglePost,
  setSinglePost,
  setSinglePostLoading,
  setBlogLoading,
  setCardsCount,
  setSearchedPosts,
  setSearchedPostsCount,
} = postsReducer.actions;
