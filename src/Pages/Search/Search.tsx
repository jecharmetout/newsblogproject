import React, { useEffect } from "react";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";

import SearchList from "../../Components/SearchList";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import styles from "./Search.module.css";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import processingAnimation from "../../lotties/processing.json";
import { PathNames } from "../Router";
import { TabsNames } from "../../Utils";
import {
  searchForNews,
  searchForPosts,
  setActiveTab
} from "../../Redux/reducers/postsReducer";
import SinglePostModal from "../Blog/Components/SinglePostModal";
import SingleImgModal from "../Blog/Components/SingleImgModal";
import Tabs from "../../Components/Tabs";
import { LocationState } from "./types";


const TABS = [
  {
    key: TabsNames.Articles,
    title: "Articles",
    disabled: false
  },
  {
    key: TabsNames.News,
    title: "News",
    disabled: false
  }
];
const Search = () => {
  const { theme } = useThemeContext();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchElement } = location.state as LocationState;

  const searchedPosts = useSelector(PostsSelectors.getSearchedPosts);

  const isSearchPostsLoading = useSelector(
    PostsSelectors.getSearchedPostsLoading
  );

  const activeTab = useSelector(PostsSelectors.getActiveTab);

  const isNews = activeTab === TabsNames.News;


  useEffect(() => {
    if (searchElement.length === 0) {
      navigate(PathNames.Home);
    }
  }, [searchElement]);

  useEffect(() => {


    isNews
      ? dispatch(
          searchForNews({
            title_contains: searchElement,
            _start: 0,

          })
        )
      : dispatch(
          searchForPosts({
            title_contains: searchElement,
            _start: 0,
          })
        );
  }, [isNews]);


  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };
  return (
    <div
      className={classNames(styles.searchPageWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.searchListTitle}>
        Search {capitalize(activeTab)} results " {searchElement} "
      </div>
      <Tabs tabs={TABS} onClick={onTabClick} activeTab={activeTab} />

      {!isSearchPostsLoading ? (
        <div>
          <SearchList
            searchedPosts={searchedPosts}
          />
          <SinglePostModal />
          <SingleImgModal />
        </div>
      ) : (
        <div className={styles.lottieContainer}>
          <Lottie
            className={styles.lottieContainerAnimation}
            animationData={processingAnimation}
            loop={true}
          />
        </div>
      )}
    </div>
  );
};
export default Search;
