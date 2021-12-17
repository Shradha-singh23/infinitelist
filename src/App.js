import React, { useEffect, useState } from "react";
import { Waypoint } from 'react-waypoint';
import Card from "./components/Card";

const BASE_URL = "https://random-data-api.com/api/food/random_food?size=5"

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchCard(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setResults(prevResult => [...prevResult, ...data]);
    setLoading(false);
  }

  const loadMoreContent = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1)
  }
  
  useEffect(() => {
    fetchCard();
  }, [page])

  const cCards = results.map((result) => {
    return (
      <Card food={result} key={result.id}/>

    )
  })

  return (
    <div>
      {cCards}
      {loading 
        ? <p>Loading more data...</p> 
        : <Waypoint
            onEnter={loadMoreContent}
          />
      }
    </div>
  );
}

export default App;
