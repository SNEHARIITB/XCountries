import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";

const countriesEndpoint = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

export default function Countries(){

    const [countries, setCountries]  = useState([]);
    const [searchCountry, setSearchCountry] = useState("");

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get(countriesEndpoint);
                setCountries(response.data);
                //console.log(response.data);

            }
            catch(error){
                console.error("Error fetching data: ", error)
            }
        }
        fetchData();
    },[]);

    const handleSearch = (value) => {
        //console.log(value);
        setSearchCountry(value);
    }
    const filteredCountries = countries.filter((country) =>
    country.common && country.common.toLowerCase().includes(searchCountry.toLowerCase())
    );


    //console.log(filteredCountries);


    return(
        <>
        <div style={{
            //maxWidth: "100vw",
            maxwidth: "100%",
            height: "30px",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey"
        }}>
            <input style={{
                fontSize: "20px",
                width: "50%",
                minWidth: "200px",
                display: "block",
                color: "black",
                textAlign: "center",
                borderRadius: "5px ",
            }} 
                type="text" 
                placeholder="Search for Country"
                value={searchCountry}
                onChange={(e) => {handleSearch(e.target.value)}}
            
            />
        </div>
        <div 
            style= {{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                margin: "10px",
            }}
        >
        {filteredCountries.map((country, index) => (
            <Card key = {index} country = {country} />
        ))}
        </div>

        </>
    );
}