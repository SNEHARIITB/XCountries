import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";

const countriesEndpoint = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

export default function Countries(){

    const [countries, setCountries]  = useState([]);

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get(countriesEndpoint);
                setCountries(response.data);
                console.log(response.data);

            }
            catch(error){
                console.error("Error fetching data: ", error)
            }
        }
        fetchData();
    },[]);


    return(
        <>
        <div 
            style= {{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "10px",
            }}
        >
        {countries.map((country, index) => (
            <Card key = {index} country = {country} />
        ))}
        </div>

        </>
    );
}