import { useState, useEffect } from "react";

const ServerData = () => {
  const [serverData, setServerData] = useState("");
  useEffect(() => {
    const fetchFortnite = async () => {
      const data = await fetch("https://fortnite-api.com/v2/news");
      const response = await data.json();
      //console.log(response.data.br.motds
      //  );
      const parsedData = response.data.br.motds;
      setServerData(parsedData);
    };
    fetchFortnite();
  }, []);
  if (!serverData) return <h1>No data to display</h1>;

  return (
    <div>
      {serverData.map((data) => (
        <div className="serverContainer">
          <h1 className="title">{data.title}</h1>
          <h2 className="body">{data.body}</h2>
          <img className="img" src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};

export default ServerData;
