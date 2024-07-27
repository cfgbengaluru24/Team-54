import React, { useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError(null);

    axios.get(`https://api.example.com/data/${id}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h3>Fetch Data by ID</h3>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data for ID: {id}</h2>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default DataFetchingComponent;
