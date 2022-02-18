import React from "react";
import Map from "./Map";

const SearchResult = ({ searchResult }) => {
  return (
    <>
      {" "}
      <div className='search-test-results'>
        {Object.keys(searchResult).length ? (
          <div>
            <h2>City: {searchResult["addr:city"]}</h2>
            <p>
              Name: {searchResult["addr:housename"]}, Postcode:{" "}
              {searchResult["addr:postcode"]}, Street:{" "}
              {searchResult["addr:street"]}, Suburb:{" "}
              {searchResult["addr:suburb"]}, Wheelchair Accessible:{" "}
              {searchResult.wheelchair}
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Map />
    </>
  );
};

export default SearchResult;
