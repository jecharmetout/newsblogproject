import React, { useState } from "react";
import styles from "./App.module.css";
import { Provider, useDispatch, useSelector } from "react-redux";

import store from "./Redux/store";
import ThemeProvider from "./Context/ThemeContext/Provider";
import { changeTheme } from "./Redux/reducers/themeReducer";
import ThemeSelector from "./Redux/selectors/themeSelector";


import Router from "./Pages/Router";

const App = () => {
  const theme = useSelector(ThemeSelector.getTheme);


  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(changeTheme());
  };


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
