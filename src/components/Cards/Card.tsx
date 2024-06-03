import React from "react";
import styles from "./card.module.scss";
import { CardProps } from "../../ts/types";

const Card:React.FC<CardProps> = ({item}:CardProps) => {
  return (
    <div key={item.id}>
      <div className={styles.card} style={{backgroundColor:item.bgColor}}>
        <img
         className={styles.img}
          src={item.image}
        alt='course pic'
        />
        <div className={styles.banner}>{item.name}</div>
     
      </div>
      
    </div>
  );
};

export default Card;
