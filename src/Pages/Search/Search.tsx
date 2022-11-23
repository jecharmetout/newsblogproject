import React, { useEffect, useState } from "react";
import classNames from "classnames";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Lottie from "lottie-react";

import SearchList from "../../Components/SearchList";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import styles from "./Search.module.css";
// import PostsSelectors from "../../Redux/selectors/postsSelectors";
// import processingAnimation from "../../lotties/processing.json";
import { PathNames } from "../Router";
// import SinglePostModal from "../Blog/Components/SinglePostModal";
// import SingleImgModal from "../Blog/Components/SingleImgModal";
import { DEFAULT_PAGE_NUMBER, PER_PAGE } from "../../Utils";
// import { searchForPosts } from "../../Redux/reducers/postsReducer";

type LocationState = {
  searchElement: string;
};

const Search = () => {
  const { theme } = useThemeContext();

//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { searchElement } = location.state as LocationState;

//   const searchedPosts = useSelector(PostsSelectors.getSearchedPosts);
  const searchedPosts = [
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
//   const searchedPostsCount = useSelector(PostsSelectors.getSearchedPostsCount);
//   const isSearchPostsLoading = useSelector(
//     PostsSelectors.getSearchedPostsLoading
//   );

//   const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);

  // const searchString = useSelector(
  //   PostsSelectors.getSearchString
  // );
  // !! для поиска по буквенно

//   useEffect(() => {
//     if (searchElement.length === 0) {
//       navigate(PathNames.Home);
//     }
//   }, [searchElement]);

//   useEffect(() => {
//     const offset = (page - 1) * PER_PAGE;
//     dispatch(
//       searchForPosts({ search: searchElement, offset, isOverwrite: false })
//     );
//   }, [page]);

//   const onScroll = () => {
//     setPage(prevPage => prevPage + 1);
//   };
  return (
    <div
      className={classNames(styles.searchPageWrapper, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.searchListTitle}>
        {/* Search results " {searchElement} " */}
        Search results " cat "
      </div>
        <div>
          <SearchList
            searchedPosts={searchedPosts}
            // count={searchedPostsCount}
            // onScroll={onScroll}
          />
          {/* <SinglePostModal />
          <SingleImgModal /> */}
        </div>

    </div>
  );
};
export default Search;
