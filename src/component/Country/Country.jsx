import { useState } from "react";

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
      <img src={flags?.png} alt={name?.common || "country flag"} />
      <button onClick={handleVisited}>Visited country</button>
      {visited ? "Visited✅" : "Not Visited🚫"}
    </div>
  );
};

export default Country;
