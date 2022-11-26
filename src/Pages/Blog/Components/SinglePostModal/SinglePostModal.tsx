import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPost from "../../../../Components/CardPost";
import ModalWindow from "../../../../Components/ModalWindow";
import {
  setSelectedPost,
  setSinglePostModalVisible
} from "../../../../Redux/reducers/postsReducer";
import PostsSelectors from "../../../../Redux/selectors/postsSelectors";
import styles from "./SinglePostModal.module.css";

const SinglePostModal = () => {
  const post = useSelector(PostsSelectors.getSelectedPost);

  const isVisible = useSelector(PostsSelectors.getIsModalVisible);

  const ispostModalVisible = useSelector(PostsSelectors.getIsModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSinglePostModalVisible(!isVisible));
    dispatch(setSelectedPost(null));
  };
  return post ? (
    <ModalWindow
      active={isVisible}
      closeModal={onClose}
      ispostModalVisible={ispostModalVisible}
    >
      <div className={styles.postModal}>
        <CardPost post={post} />
      </div>
    </ModalWindow>
  ) : null;
};

export default SinglePostModal;
