import React from "react";


import styles from "./Card.module.css";

export default function Card({ country }) {
    if (!country) return null;
  
    return (
      <>
        <div className="countryCard"
        style={{
              height: "200px",
              width: "200px",
              border: "1px solid grey",
              borderRadius: "5px",
              
              gap: "5px",
              display: "flex",
              flexDirection:" column",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
        }}>
          <img src={country.png} alt={country.common} className={styles.imageflag} />
          <h2 className={styles.cname}>{country.common}</h2>
        </div>
      </>
    );
  }
  