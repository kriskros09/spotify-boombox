import React, { useState } from 'react'; //Always need in JSX files

// Create the HTML to return for the input
const SearchBar = (props) => {
  const [term, setTerm] = useState('')

  const onInputChange = (term) => {
    setTerm( term );
    props.onSearchTermChange(term);
  };


  return (
    <div className="search-input">
      <input
        value={term}
        onChange={event => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;



