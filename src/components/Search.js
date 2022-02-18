import React, { useState } from "react";
import { getLocationByName } from "../utils/api";
import Map from "./Map";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // const submitHandler = (event) => {
  //   event.preventDefault();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submitting ${searchTerm}`); // <--------------------
    getLocationByName(searchTerm).then((locationsFromApi) => {
      setSearchResult(locationsFromApi);
    });
    setSearchTerm("");
  };

  // if (event.target["search"].value) {
  //   // getLocationById(event.target["search"].value).then((res) => {
  //   //   setSearchResult(res);
  //   });
  //   event.target["search"].value = "";
  // }
  // };

  return (
    <>
      <div className='search-form'>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              value={searchTerm}
              id='search'
              placeholder='Location'
              onChange={handleChange}
            ></input>
          </label>
          <button>Search</button>
        </form>

        <Map searchResult={searchResult} />
      </div>
    </>
  );
};

export default Search;
