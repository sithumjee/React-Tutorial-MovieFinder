import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  return (
    <div className="app">
      <h1>MOvieFinder</h1>

      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Search for Movies"
          value="superman"
          onChange={() => {}}
        />

        <img
          className="search__icon"
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => {}}
        />
      </div>

      <div className="container"></div>
    </div>
  );
};

export default App;
