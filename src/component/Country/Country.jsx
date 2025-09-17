import React, { useState } from "react";

const Country = ({ country }) => {
  const { name, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(country);
  return (
    <div>
      <h3>{name?.common}</h3>
      <img src={flags?.png} alt="" />
      <button onClick={handleVisited}>Visited country</button>
      {visited ? "✅" : "🚫"}
    </div>
  );
};

export default Country;
