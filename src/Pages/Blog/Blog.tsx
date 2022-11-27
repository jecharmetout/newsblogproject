import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Lottie from "lottie-react";

import classNames from "classnames";
import styles from "./Blog.module.css";

import CardList from "../../Components/CardList";
import Title from "../../Components/Title";
import Tabs from "../../Components/Tabs";
import {
  ButtonSort,
  DEFAULT_PAGE_NUMBER,
  PER_PAGE,
  SortOrder,
  TabsNames
} from "../../Utils";
import Button, { ButtonType } from "../../Components/Button";
import Select from "../../Components/Select";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import {
  getPosts,
  getPostsCount,
  setActiveBtn,
  setActiveTab,
  setCardsList
} from "../../Redux/reducers/postsReducer";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import processingAnimation from "../../lotties/processing.json";
import SingleImgModal from "./Components/SingleImgModal";
import SinglePostModal from "./Components/SinglePostModal";
import ButtonGroup from "../../Components/ButtonGroup";

const Blog = () => {
  const { theme } = useThemeContext();

  const isBlogLoading = useSelector(PostsSelectors.getBlogLoading);
  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const activeBtn = useSelector(PostsSelectors.getActiveBtn);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const dispatch = useDispatch();
  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const [order, setOrder] = useState(SortOrder.Initial);
  const isDayBtn = activeTab === ButtonSort.Day;


  const cardsCount = useSelector(PostsSelectors.getCardsCount);
  const pagesCount = Math.ceil(cardsCount / PER_PAGE);

  const tabs = [
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
  const buttonGroup = [
    {
      key: ButtonSort.Day,
      title: "Day",
      disabled: false
    },
    {
      key: ButtonSort.Week,
      title: "Week",
      disabled: false
    },
    {
      key: ButtonSort.Month,
      title: "Month",
      disabled: false
    },
    {
      key: ButtonSort.Year,
      title: "Year",
      disabled: false
    },
  ]
  const options = [
    {
      key: SortOrder.Initial,
      title: "Initial",
      value: SortOrder.Initial
    },
    {
      key: SortOrder.Title,
      title: "Title",
      value: SortOrder.Title
    }, {
      key: SortOrder.Date,
      title: "Date",
      value: SortOrder.Date
    }
  ];

  useEffect(() => {
    const _start = (page - 1) * PER_PAGE;
    dispatch(getPosts({ _start, _sort: order }));
    dispatch(getPostsCount());
  }, [page, order]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
  };
  const onBtnGroupClick = (id:ButtonSort)=>{
    dispatch(setActiveBtn(id));

  }

  return (
    <div
      className={classNames({
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      {!isBlogLoading ? (
        <div>
          <Title title={"Blog"} />
          <Tabs tabs={tabs} onClick={onTabClick} activeTab={activeTab} />
          <div className={styles.sortSelect}>
            <ButtonGroup buttonGroup={buttonGroup} onClick={onBtnGroupClick} activeBtn={activeBtn}/>
            <div>
              <Select
                selectValue={order}
                onChange={(event: any) => setOrder(event.target.value)}
                options={options}
              />
            </div>
          </div>
          <CardList cardList={cardsList} />
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
      <ReactPaginate
        pageCount={pagesCount}
        onPageChange={onPageChange}
        containerClassName={styles.pagesContainer}
        pageClassName={styles.pageNumber}
        breakClassName={styles.pageNumber}
        breakLinkClassName={styles.linkPage}
        activeLinkClassName={styles.linkPage}
        pageLinkClassName={styles.linkPage}
        activeClassName={styles.activePageNumber}
        nextClassName={classNames(styles.pageNumber, styles.arrowButton, {
          [styles.availableToClickButton]: page !== pagesCount
        })}
        previousClassName={classNames(styles.pageNumber, styles.arrowButton, {
          [styles.availableToClickButton]: page !== 1
        })}
        previousLinkClassName={styles.linkPage}
        nextLinkClassName={styles.linkPage}
      />
    </div>
  );
};
export default Blog;
