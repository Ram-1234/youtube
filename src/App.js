import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Loader from "./components/loader";
import Header from "./components/header/header";
import Sidebar from "./components/siderbar/sidebar";
import { data } from "./components/data/data";

const Recommend = lazy(() => import("./components/recommend/recommend"));

function App() {
  const [jsonData, setJSonData] = useState([]);
  const [searchInp, setValue] = useState("");

  //searching a user
  useEffect(() => {
    let newList =
      data &&
      data.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(searchInp.toLowerCase()) ||
          item?.thumbnail?.toLowerCase()?.includes(searchInp.toLowerCase())
      );
    setJSonData(newList);
  }, [searchInp, data]);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <Header onChangeHandler={onChangeHandler} value={searchInp} />
      <div className="app_page">
        <Sidebar />
        <Suspense fallback={<Loader/>}>
          <Recommend data={jsonData} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
