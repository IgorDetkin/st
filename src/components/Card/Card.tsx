import React from 'react';
import classes from "./Card.module.scss";
import { Link } from "react-router-dom";

interface Address {
  suite: string;
  street: string;
  zipcode: string;
}

interface Company {
  name: string
}

export interface ICardProps {
  id: number;
  name: string; 
  email: string;
  address: Address;
  company: Company
}

const Card: React.FC<ICardProps> = ({ name, email, address, company }) => {

  return (
    <div className={classes.card}>
        <h2 className={classes.name}>{name}</h2>
        <Link to={`mailto:${email}`} className={classes.email}>{email}</Link>
        <div className={classes.address}>
            <p>{`${address.street}, ${address.suite};`}</p>
            <p>{address.zipcode}</p>
        </div>
        <div className={classes.company}>{company.name}</div>
    </div>
  )
}

export default Card