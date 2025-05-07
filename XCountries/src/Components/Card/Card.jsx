import React from "react";


import styles from "./Card.module.css";

export default function Card(props){

    //console.log("from card",props.country.name);


    return(
        <>
        <div className={styles.card}>
            <img src={props.country.flag} alt={props.country.name} className={styles.image}/>
            <h2 className={styles.cname}>{props.country.name}</h2>
        </div>
        </>
    );
}