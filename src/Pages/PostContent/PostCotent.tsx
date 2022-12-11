import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";


import styles from "./PostContent.module.css";
import {
  getNews,
  getPosts,
  getSingleNews,
  getSinglePost
} from "../../Redux/reducers/postsReducer";
import processingAnimation from "../../lotties/processing.json";
import Post from "../../Components/Post";
import RecomendedPostsList from "../../Components/RecomendedPostsList";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "../Blog/Components/SinglePostModal";
import { PER_PAGE, TabsNames } from "../../Utils";


const PostContent = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const post = useSelector(PostsSelectors.getSinglePost);

  const cardsList = useSelector(PostsSelectors.getCardsList);
  const activeTab = useSelector(PostsSelectors.getActiveTab);

  const isNews = activeTab === TabsNames.News;

  const isLoading = useSelector(PostsSelectors.getSinglePostLoading);

  const { id } = params;

  useEffect(() => {
    if (id) {
      isNews ? dispatch(getSingleNews(id)) : dispatch(getSinglePost(id));
      isNews
        ? dispatch(getNews({ _limit:PER_PAGE,_start: 0, _sort: "" }))
        : dispatch(getPosts({ _limit:PER_PAGE,_start: 0, _sort: "" }));
    }
  }, [id]);

  return !isLoading && post ? (
    <div>
      <Post post={post} />
      <RecomendedPostsList cardList={cardsList} />
      <SinglePostModal />
    </div>
  ) : (
    <div className={styles.lottieContainer}>
      <Lottie
        className={styles.lottieContainerAnimation}
        animationData={processingAnimation}
        loop={true}
      />
    </div>
  );
};
export default PostContent;
