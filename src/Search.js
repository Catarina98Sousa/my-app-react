import { useState } from "react";


function Search() {
  let [inputValue, setInputValue] = useState("");
  let [information, setInformation] = useState("");

  function updateInputValue(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("dentro do submit");
    if (inputValue) {
      setInformation(`Find all about ${inputValue}`);
    } else {
      setInformation("Please search for an article topic");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateInputValue} />
        <button type="submit">Search</button>
      </form>
      <h3>Search for {inputValue}</h3>
      <h4>{information}</h4>
    </div>
  );
}

export default Search;
