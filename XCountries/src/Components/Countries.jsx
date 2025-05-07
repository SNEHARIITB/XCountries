import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";

const countriesEndpoint = "https://xcountries-backend.azurewebsites.net/all";

export default function Countries(){

    const [countries, setCountries]  = useState([]);

    useEffect(()=>(
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
    ),[]);


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