import React from 'react';
import './css/App.css';
import { Box } from '@mui/material';

function App() {
  return (
    <Box 
    component="main" 
    sx={{flexGrow: 1, p:3, width: {md: 'calc(100% - 250px)'}, ml: {md: 'calc(250px)'}}}>
      This is the body content
    </Box>
  );
}

export default App;
