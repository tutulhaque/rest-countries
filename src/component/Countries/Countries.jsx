import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "../Countries/countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <h1>Total Countries {countries.length}</h1>
      <div className="flex-container">
        {countries.map((country) => (
          <Country key={country.name.common} country={country}></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
