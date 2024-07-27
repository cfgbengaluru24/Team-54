import React, { useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const id = '66a571e42fcb29f036cb9684'; // Replace with the actual ID you want to fetch

  useEffect(() => {
    axios.get(`/edu/data/${id}`)
      .then(response => setData(response.data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, [id]);

  return (
    <div>
      <h1>Fetched Data</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        data && (
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {/* Render other data fields as needed */}
          </div>
        )
      )}
    </div>
  );


};

export default DataFetchingComponent;
