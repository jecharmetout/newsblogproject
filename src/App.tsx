import React from "react";
import Button, { ButtonType } from "./Components/Button";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <Button title={"Primary"} type={ButtonType.Primary} />
      <Button title={"Secondary"} type={ButtonType.Secondary} />
      <Button title={"Primary"} type={ButtonType.Secondary} disabled={true}/>
      <Button title={"Secondary"} type={ButtonType.Secondary} disabled={true}/>
    </div>
  );
};

export default App;
