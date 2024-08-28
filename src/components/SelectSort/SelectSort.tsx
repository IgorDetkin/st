import React from 'react';
import classes from "./SelectSort.module.scss";

interface OptionSort {
  value: string;
  name: string;
}

export interface ISelectSort {
    options: OptionSort[];
    defaultValue?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectSort: React.FC <ISelectSort> = ({options, value, onChange}) => {
  return (
    <div className={classes.container}>
    <label htmlFor="sortSelect" className={classes.label}>Сортировка:</label>
      <select
        id="sortSelect"
        value={value}
        onChange={onChange}
        className={classes.select}
      >
        {options.map((option) => 
          <option key={option.value} value={option.value} className={classes.option}>{option.name}</option>    
        )}
      </select> 
    </div>
  )
}

export default SelectSort