import React, { useState } from "react";
import styles from "./App.module.css";

import { SortOrder, TabsNames } from "./Utils";
import Button, { ButtonType } from "./Components/Button";
import Tabs from "./Components/Tabs";
import Switch from "./Components/Switch";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import Select from "./Components/Select";

const App = () => {
  const activeTab = TabsNames.Articles;
  const tabs = [
    {
      key: TabsNames.Articles,
      title: "Articles",
      disabled: false
    },
    {
      key: TabsNames.Disabled,
      title: "Disabled",
      disabled: true
    },
    {
      key: TabsNames.News,
      title: "News",
      disabled: false
    }
  ];
  const options = [
    {
      key: SortOrder.TitleAToZ,
      title: "Title (A-Z)",
      value: SortOrder.TitleAToZ,

    },
    {
      key: SortOrder.TitleZtoA,
      title: "Title (Z-A)",
      value: SortOrder.TitleZtoA,

    },

  ];
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [order, setOrder] = useState(SortOrder.TitleAToZ);

  return (
    <div className={styles.container}>
      <div className={styles.containerSelect}>
      <Select selectValue={order}  onChange={(event: any) => setOrder(event.target.value)} options={options}/>
      </div>
      <div className={styles.containerBtn}>
        <Button title={"Primary"} type={ButtonType.Primary} />
        <Button title={"Secondary"} type={ButtonType.Secondary} />
        <Button title={"Primary"} type={ButtonType.Secondary} disabled={true} />
        <Button
          title={"Secondary"}
          type={ButtonType.Secondary}
          disabled={true}
        />
      </div>
      <div className={styles.containerTabs}>
        <Tabs tabs={tabs} onClick={() => {}} activeTab={activeTab} />
      </div>
      <div className={styles.containerSwitch}>
        <Switch disabled={true}  />
        <Switch disabled={false}  />
        <Switch disabled={true} switched={true} />
      </div>
      <div className={styles.containerInput}>
        <Input onChange={onChange} value={value} placeholder={"Placeholder"} />
        <Input
          onChange={onChange}
          value={value}
          placeholder={"Placeholder"}
          disabled={true}
        />
        <Input
          onChange={onChange}
          value={value}
          placeholder={"Placeholder"}
          error={true}
        />
      </div>
      <div className={styles.containerFooter}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
