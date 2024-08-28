import React from 'react';
import classes from "./List.module.scss";
import Card, { ICardProps } from '../Card/Card';

export interface IListProps {
  users: ICardProps[]; 
}

const List: React.FC<IListProps> = ({users}) => {
    // console.log(users)

  return (
    <div className={classes.list}>
        <div className={classes.columnTitles}>
          <p className={classes.columnTitle}>ФИО</p>
          <p className={classes.columnTitle}>Email</p>
          <p className={classes.columnTitle}>Адрес</p>
          <p className={classes.columnTitle}>Компания</p>  
        </div>
        <div className={classes.cards}>


        { users.length > 0 
        ? users.map(item => (
            <Card
            key={item.id}
            {...item}
            />
          ))
        : <p className={classes.empty}>По вашему запросу ничего не найдено.</p>

        }
        


        </div>
        
    </div>
  )
}

export default List