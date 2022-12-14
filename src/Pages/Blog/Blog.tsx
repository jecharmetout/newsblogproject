import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Lottie from "lottie-react";
import moment from "moment";
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
import Select from "../../Components/Select";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import {
  getNews,
  getPosts,
  setActiveTab,
} from "../../Redux/reducers/postsReducer";
import PostsSelectors from "../../Redux/selectors/postsSelectors";
import processingAnimation from "../../lotties/processing.json";
import SingleImgModal from "./Components/SingleImgModal";
import SinglePostModal from "./Components/SinglePostModal";
import ButtonGroup from "../../Components/ButtonGroup";

const BUTTON_GROUP = [
  {
    key: ButtonSort.Day,
    title: "Day"
  },
  {
    key: ButtonSort.Week,
    title: "Week"
  },
  {
    key: ButtonSort.Month,
    title: "Month"
  },
  {
    key: ButtonSort.Year,
    title: "Year"
  }
];
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

const OPTIONS = [
  {
    key: SortOrder.Initial,
    title: "Initial",
    value: SortOrder.Initial
  },
  {
    key: SortOrder.Title,
    title: "Title",
    value: SortOrder.Title
  },
  {
    key: SortOrder.Date,
    title: "Date",
    value: SortOrder.Date
  }
];
const Blog = () => {
  const { theme } = useThemeContext();

  const isBlogLoading = useSelector(PostsSelectors.getBlogLoading);
  const activeTab = useSelector(PostsSelectors.getActiveTab);
  const cardsList = useSelector(PostsSelectors.getCardsList);
  const dispatch = useDispatch();
  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);
  const [order, setOrder] = useState(SortOrder.Initial);
  const isNews = activeTab === TabsNames.News;

  const [activeBtn, setActiveBtn] = useState<ButtonSort>();

  useEffect(() => {
    const _start = (page - 1) * PER_PAGE;
    const dateAgo = moment()
      .add(-1, activeBtn)
      .format("YYYY-MM-DDThh:mm:ss");
    const publishedAt = activeBtn ? dateAgo : undefined;
    const sort = activeBtn ? SortOrder.Date : order;
    isNews
      ? dispatch(
          getNews({
            _limit: PER_PAGE,
            _start,
            _sort: sort,
            publishedAt_gt: publishedAt
          })
        )
      : dispatch(
          getPosts({
            _start,
            _sort: sort,
            publishedAt_gt: publishedAt,
            _limit: activeBtn ? undefined : PER_PAGE
          })
        );
  }, [page, order, isNews, activeBtn]);

  const cardsCount = useSelector(PostsSelectors.getCardsCount);

  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    setPage(1);
  }, [activeBtn, order, activeTab]);


  useEffect(() => {
    setPagesCount(Math.ceil(cardsCount / PER_PAGE));
    if (cardsList.length < 12) {
      setPagesCount(page);
    }
  }, [cardsCount, cardsList]);

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const onTabClick = (id: TabsNames) => {
    dispatch(setActiveTab(id));
    setActiveBtn(undefined);
    setOrder(SortOrder.Initial);
  };
  const onBtnGroupClick = (id: ButtonSort) => {
    if (activeBtn === id) {
      setActiveBtn(undefined);
    } else {
      setActiveBtn(id);
      setOrder(SortOrder.Initial);
    }
  };
  const onChangeClick = (event: any) => {
    setOrder(event.target.value);
    setActiveBtn(undefined);
  };
  return (
    <div
      className={classNames({
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      {!isBlogLoading ? (
        <div>
          <Title title={"Blog"} />
          <Tabs tabs={TABS} onClick={onTabClick} activeTab={activeTab} />
          <div className={styles.sortSelect}>
            <ButtonGroup
              buttonGroup={BUTTON_GROUP}
              onClick={onBtnGroupClick}
              activeBtn={activeBtn}
            />

            <div>
              <Select
                selectValue={order}
                onChange={onChangeClick}
                options={OPTIONS}
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
