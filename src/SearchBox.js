import React from 'react';

//give value from child to parent with {searchChange}
const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>   
      <input 
        className = 'pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='search robot'
        onChange={searchChange}
      />
    </div>
 );
}

export default SearchBox;