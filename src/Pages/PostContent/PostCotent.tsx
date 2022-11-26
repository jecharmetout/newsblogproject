import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";

import classNames from "classnames";

import styles from "./PostContent.module.css";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { getPosts, getSinglePost } from "../../Redux/reducers/postsReducer";
import processingAnimation from "../../lotties/processing.json";
import Post from "../../Components/Post";
import RecomendedPostsList from "../../Components/RecomendedPostsList";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import SinglePostModal from "../Blog/Components/SinglePostModal";

const post = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    text:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    publishedAt: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    author: 0
  }
];

const PostContent = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const post = useSelector(PostsSelectors.getSinglePost);
  const cardsList = useSelector(PostsSelectors.getCardsList);


  const isLoading = useSelector(PostsSelectors.getSinglePostLoading);

  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
      dispatch(getPosts({ _start: 0, _sort: "" }));
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
