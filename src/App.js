import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/siderbar/sidebar';
import Recommend from './components/recommend/recommend';
import {data} from "./components/data/data";

function App() {
  const [jsonData , setJSonData] = useState([]);
  const [searchInp, setValue]=useState('');

   //searching a user
   useEffect(() => {
    let newList =
    data &&
      data.filter((item) =>
        item?.title?.toLowerCase()?.includes(searchInp.toLowerCase()) || item?.thumbnail?.toLowerCase()?.includes(searchInp.toLowerCase())
      );
      setJSonData(newList);
  }, [searchInp,data]);

  const onChangeHandler=(e)=>{
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <Header onChangeHandler={onChangeHandler} value={searchInp} />
     <div className="app_page">
      <Sidebar/>
      <Recommend data = {jsonData} />
     </div>
    </div>
  );
}

export default App;
