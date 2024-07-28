import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, CircularProgress, Typography, Paper, Box } from '@mui/material';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');

  const fetchData = () => {
    setLoading(true);
    setError(null);

    axios.get(`http://localhost:3000/edu/data/${id}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '40px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Fetch Educational Report
        </Typography>
        <Box mb={2}>
          <TextField
            label="Child's ID"
            variant="outlined"
            fullWidth
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
        </Box>
        <Box mb={2} display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            onClick={fetchData}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Fetch Data'}
          </Button>
        </Box>
        {error && (
          <Typography color="error" style={{ marginTop: '20px' }}>
            Error: {error.message}
          </Typography>
        )}
        {data && (
          <Paper elevation={1} style={{ marginTop: '20px', padding: '10px' }}>
            <Typography variant="h6">Data for ID: {id}</Typography>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}><h3>
              {JSON.stringify(data, null, 2)}</h3>
            </pre>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default DataFetchingComponent;
