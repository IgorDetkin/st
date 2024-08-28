import React, { useEffect } from 'react';
import classes from "./SearchForm.module.scss";


export interface ISearchInputProps {
  setSearchReq: (searchReq: string) => void;
  value: string;
  setValue: (value: string) => void;
}

const SearchForm: React.FC<ISearchInputProps> = ({ value, setValue, setSearchReq }) => {

  useEffect(() => {
    setSearchReq(value);
  }, [value, setSearchReq]);

  return (
    <div className={classes.container}>
      <label htmlFor="searchInput" className={classes.label}>Поиск:</label>
      <form 
        className={classes.form}
        onSubmit={(e):void => e.preventDefault()}
      >
        <input 
          id="searchInput"
          aria-label="input for searching products"
          type="text" 
          placeholder="Искать..."
          value={value}
          className={classes.input}
          onChange={(e) => setValue(e.target.value)}
        />    
      </form>
    </div>
  )
}

export default SearchForm