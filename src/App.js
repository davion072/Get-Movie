import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import ModalContent from "./components/ModalContent";

import { useState, useEffect } from "react";
import axios from 'axios'


function App() {
  const [search, setSearch] = useState({ movie: 'Kantara', year: 0, plot: '' });
  const [results, setResults] = useState({})
  const [open, setOpen] = useState(false);

  useEffect(() => {
      if(search.year) {
        axios.get(`https://www.omdbapi.com/?t=${search.movie}&y=${search.year}&plot=full&apikey=d5629332`)
          .then((res) => {
            const data = res.data
            setResults(data)
            // console.log(data)
          })
          .catch(err => console.error(err))
      } else {
        axios.get(`https://www.omdbapi.com/?t=${search.movie}&plot=full&apikey=d5629332`)
          .then((res) => {
            const data = res.data
            setResults(data)
            // console.log(data)
          })
          .catch(err => console.error(err))
      }

    }, [search]);

  const getSearchData = (text) => {
    setSearch(text);
  }

  const openHandler = () => setOpen(!open);

  return (
    <>
      <div className={`${open ? "opacity-50" : ""}`}>
        <Header onSearch={getSearchData} />
        <MovieCard movie={results} open={openHandler} />
      </div>
      {open ?
        <ModalContent movie={results} open={openHandler} />
        : ""
      }
    </>
  );
}

export default App;
