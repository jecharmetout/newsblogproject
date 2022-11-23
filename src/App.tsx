import React, { useState } from "react";
import styles from "./App.module.css";
import { Provider, useDispatch, useSelector } from "react-redux";

import store from "./Redux/store";
import ThemeProvider from "./Context/ThemeContext/Provider";
import { changeTheme } from "./Redux/reducers/themeReducer";
import ThemeSelector from "./Redux/selectors/themeSelector";

import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import Router from "./Pages/Router";

const App = () => {
  const theme = useSelector(ThemeSelector.getTheme);


  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(changeTheme());
  };
  const post = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 6,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 7,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 9,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 10,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    },
    {
      id: 11,
      image:
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
      text:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      author: 0
    }
  ];

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};
const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWithStore;
