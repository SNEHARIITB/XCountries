import React from "react";


import styles from "./Card.module.css";

export default function Card({ country }) {
    if (!country) return null;
  
    return (
      <>
        <div className={styles.card}>
          <img src={country.png} alt={country.common} className={styles.imageflag} />
          <h2 className={styles.cname}>{country.common}</h2>
        </div>
      </>
    );
  }
  