import Header from "./components/Header";
import Items from "./components/Items";

import { useState, useEffect } from "react";
import axios from 'axios'


function App() {
  const [search, setSearch] = useState('cat');
  const [results, setResults] = useState([])


  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=33009969-0454b2b172a743a697263c617&q=${search}&image_type=photo&pretty=true`)
      .then((res) => {
        setResults(res.data.hits)
      })
      .catch(err => console.error(err))
  }, [search]);

  const getSearch = (text) => {
    setSearch(text);
    console.log(search)
  }

  return (
    <>
      <Header onSearch={getSearch} />
      <Items items={results} />
    </>
  );
}

export default App;
